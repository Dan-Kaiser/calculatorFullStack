const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;
//`mongodb+srv://Dan:${process.env.DBPASSWORD}@fullstackcalculatorcluster-daz5w.mongodb.net/---->Replace me for different collection name<----?retryWrites=true`

let calculationSchema = new Schema({
  resultString: String
});

let Calculation = mongoose.model('Calculation', calculationSchema);

const calculationCounter = (callback) => {
  // console.log('we in calc function');
  Calculation.countDocuments().exec((err, count) => {
    if (err) {
      console.log('error in calculationCounter', err);
      return err;
    }
    // console.log('no error in Calculation Function')
    callback(count);
  })
}

const insertResult = (val, callback) => {
  // console.log('inside insert Result, with value', val);
  console.log(val);
  let currCalc = new Calculation({ resultString: val });
  currCalc.save((err, currCalc) => {
    console.log('inside save callback')
    if (err) return console.error(err);
    callback(`Saved ${currCalc} to database!`);
  });
}

const db = mongoose.connect(`mongodb+srv://Dan:${process.env.DBPASSWORD}@fullstackcalculatorcluster-daz5w.mongodb.net/test?retryWrites=true
`, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log(err, 'error in mongoose.connect -- mongoose.connect');
    } else {
      console.log('connected to the mongo fullStackCalculator database');
    }
  });

module.exports.calculationCounter = calculationCounter;
module.exports.insertResult = insertResult;
module.exports.db = db;