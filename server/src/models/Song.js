module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    artist: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    album: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT,
    
  });

  return Song;
}