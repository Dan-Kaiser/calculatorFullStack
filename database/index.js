const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;
//`mongodb+srv://Dan:${process.env.DBPASSWORD}@fullstackcalculatorcluster-daz5w.mongodb.net/---->Replace me for different collection name<----?retryWrites=true`
const databaseURL = `mongodb+srv://Dan:${process.env.DBPASSWORD}@fullstackcalculatorcluster-daz5w.mongodb.net/test?retryWrites=true`;
let calculationSchema = new Schema({
  resultString: String
});

let Calculation = mongoose.model('Calculation', calculationSchema);

const findRecent = (callback) => {
  // console.log('we in calc function');
  Calculation.find().sort({ _id: -1 }).limit(10).then(results => {
    return callback(results);
  }).catch(err => {
    console.error(err);
    callback(err);
    return;
  })
}

const insertResult = (val, callback) => {
  // console.log(val);
  let currCalc = new Calculation({ resultString: val });
  currCalc.save((err, currCalc) => {
    // console.log('inside save callback')
    if (err) return console.error(err);
    callback(`Saved ${currCalc} to database!`);
  });
}

const db = mongoose.connect(databaseURL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'error in mongoose.connect -- mongoose.connect');
  } else {
    console.log('connected to the mongo fullStackCalculator database');
  }
});

module.exports.findRecent = findRecent;
module.exports.insertResult = insertResult;
module.exports.db = db;