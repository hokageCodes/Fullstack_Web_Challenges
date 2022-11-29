require('dotenv').config();
require('./db/db');

const express = require('express');
// const routes = require('./routes/routes');
// const route = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const { Client } = require('pg');
const multer  = require('multer');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', routes);
// app.use('/', route);

// parse requests of content-type - application/json
app.use(bodyParser.json());
/* parse requests of content-type - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
//routes
require('./routes/image_routes')(app);
app.get('/', (req, res) => {
    res.send("Heyy!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});