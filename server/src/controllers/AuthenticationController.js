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
        message: err.errors[0].message
      })
    }
  },
};

