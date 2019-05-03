const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;

const db = mongoose.connect(`mongodb+srv://Dan:${process.env.DBPASSWORD}@fullstackcalculatorcluster-daz5w.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'error in mongoose.connect -- mongoose.connect');
  } else {
    console.log('connected to the mongo fullStackCalculator database');
  }
});