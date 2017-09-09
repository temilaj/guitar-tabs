const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 4200;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World',
  });
});

app.post('/register', (req, res) => {
  res.status(201).send({
    message: `Hello ${req.body.email}!, your user was registered!`,
  });
});

app.listen(port, () => {
  console.log('Hello World!');
});
