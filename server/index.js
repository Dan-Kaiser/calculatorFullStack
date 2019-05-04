const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = process.env.port || 3000;

app.use(express.static('../client/dist'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => res.send('Test Express Hello World!'))
app.get('/count', (req, res) => {
  db.calculationCounter(result => {
    console.log('we got back a result', result);
    res.send(`the current count = ${result}`);
  })
});
app.post('/insert', (req, res) => {
  console.log(req.body);
  let str = req.body.payload;
  db.insertResult(str, (results) => {
    console.log('severside return results', results);
    if (results) {
      res.send(`these are the results ${results}`);
    } else {
      res.send('error in insert');
    }
  });
})


app.listen(port, () => console.log(`Listening on port ${port}!`))