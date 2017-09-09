module.exports = {
  register(req, res) {
    res.status(201).send({
      message: `Hello ${req.body.email}! Your user was registered! Have fun`
    });
  },
};

