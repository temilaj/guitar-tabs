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
  async getAll(req, res) {
    try {
      const songs = await Song.findAll();
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

