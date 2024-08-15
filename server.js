const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');

const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

/***
 *
 * narayanasamymech06
 * GrZfkzaagkbPsE7S
 * mongodb+srv://narayanasamymech06:GrZfkzaagkbPsE7S@narayancluster.sda4l.mongodb.net/
 */
connectDB();
app.use(express.json());

app.use('/api/contacts', require('./contactRoutes/contactRoutes'));
app.use(errorHandler);

app.listen(port, () => console.log(`app running on ${port}`));
