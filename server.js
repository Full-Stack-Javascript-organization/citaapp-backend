
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = require('./config/database');
const userRoutes = require('./routes/user');
const companyRoutes = require('./routes/company');
const serviceRoutes = require('./routes/service');
const calendarRoutes = require('./routes/calendar');
const NotificationService = require('./app/services/notificationService');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

connectDB();

app.use('/users', userRoutes);
app.use('/company', companyRoutes);
app.use('/service', serviceRoutes);
app.use('/calendar', calendarRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
