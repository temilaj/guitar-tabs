const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World',
    });
  });
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register,
  );
  app.post(
    '/login',
    AuthenticationController.login,
  );
  app.get(
    '/songs',
    SongsController.getAll,
  );
  app.get(
    '/songs/:songId',
    SongsController.getSong,
  );
  app.put(
    '/songs/:songId',
    SongsController.updateSong,
  );
  app.post(
    '/songs',
    SongsController.createSong,
  );
  app.get(
    '/bookmarks',
    BookmarksController.getBookMark,
  );
  app.post(
    '/bookmarks',
    BookmarksController.addBookmark,
  );
  app.delete(
    '/bookmarks/:bookmarkId',
    BookmarksController.deleteBookmark,
  );
};
