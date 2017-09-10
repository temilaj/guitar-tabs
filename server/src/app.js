const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

// clear out DB
// sequelize.sync({ force: true })
sequelize.sync()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`server started on ${config.port}!`);
    });
  });

