const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 4200;

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World',
  });
});

app.listen(port, () => {
  console.log('Hello World!');
});
