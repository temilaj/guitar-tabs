const { Song } = require('../models');

module.exports = {
  async createSong(req, res) {
    try {
      const song = await Song.create(req.body);
      res.status(201).send({
        message: `${song.title} added successfully`,
        song,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  async updateSong(req, res) {
    try {
      const song = await Song.update(req.body,{ 
        where: {
          id: req.params.songId
        }
      });
      res.status(200).send({
        message: `${song.title} updated successfully`,
        song,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  async getAll(req, res) {
    try {
      let songs = null;
      const queryString = req.query.search;
      if (queryString) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${queryString}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll();
      }
      res.status(200).send({
        songs,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
  async getSong(req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.status(200).send({
        song,
      });
    } catch(err) {
      res.status(500).send({
        error: err.errors[0].message
      })
    }
  },
};

