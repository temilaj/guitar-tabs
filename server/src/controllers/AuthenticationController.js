const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun`,
        user,
      });
    } catch(err) {
      // email already exisits
      res.status(400).send({
        error: err.errors[0].message
      })
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        }
      });
      if (!user) {
        // TODO: find out why pees use 403 here
        res.status(401).send({
          error: 'The login information was incorrect'
        });
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        // TODO: find out why pees use 403 here
        res.status(401).send({
          error: 'The login information was incorrect'
        });
      }
      const userJson = user.toJSON();
      res.send({ user : userJson });
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to login.'
      });
    }
  }
};

