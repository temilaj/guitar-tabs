const { Bookmark } = require('../models');

module.exports = {
  async getBookMark(req, res) {
    try {
      const { songId, userId } = req.query;
      if (songId) {
        const bookmark = await Bookmark.findOne({
          where: {
            songId,
            userId,
          },
        }).then((bookmark) => {
            if (bookmark) {
              res.status(200).send({
                bookmark
              });
            } else {
              res.status(404).send({
                message: 'no bookmark available for this song'
              });
            }
        });
      } else {
        res.status(400).send({
          message: 'Invalid song Id'
        });
      }
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  async addBookmark(req, res) {
    try {
      const bookmark = req.body;
      await Bookmark.create(bookmark);
      res.status(201).send({
        message: `bookmark added successfully`,
        Bookmark,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  // async updateBookmark(req, res) {
  //   try {
  //     const Bookmark = await Bookmark.update(req.body,{ 
  //       where: {
  //         id: req.params.BookmarkId
  //       }
  //     });
  //     res.status(200).send({
  //       message: `${Bookmark.title} updated successfully`,
  //       Bookmark,
  //     });
  //   } catch(err) {
  //     res.status(500).send({
  //       error: err.errors[0].message
  //     })
  //   }
  // },
  async deleteBookmark(req, res) {
    try {
      const bookmark = await Bookmark.findById(req.params.BookmarkId);
      await bookmark.destroy();
      res.status(200).send({
        message: 'bookmark deleted successfully',
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
};

