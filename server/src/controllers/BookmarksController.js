const { Bookmark } = require('../models');

module.exports = {
  async getAll(req, res) {
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
  async createBookmark(req, res) {
    try {
      const Bookmark = await Bookmark.create(req.body);
      res.status(201).send({
        message: `${Bookmark.title} added successfully`,
        Bookmark,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  async updateBookmark(req, res) {
    try {
      const Bookmark = await Bookmark.update(req.body,{ 
        where: {
          id: req.params.BookmarkId
        }
      });
      res.status(200).send({
        message: `${Bookmark.title} updated successfully`,
        Bookmark,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  async getBookmark(req, res) {
    try {
      const Bookmark = await Bookmark.findById(req.params.BookmarkId);
      res.status(200).send({
        Bookmark,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
};

