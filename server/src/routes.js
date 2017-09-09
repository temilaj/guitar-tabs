const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World',
    });
  });
  app.post('/register', AuthenticationController.register);
};
