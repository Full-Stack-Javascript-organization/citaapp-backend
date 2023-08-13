const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    //const connectionString = 'mongodb+srv://brero12:Q8941Fxd34Tnoikw@brcluster0.c3pdivh.mongodb.net/citas';
    const connectionString = process.env.MONGO_URI;
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;