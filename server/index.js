const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;
const db = require('../database/index.js')

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
  db.insertResult('2 + 4 = 6', (results) => {
    if (results) {
      res.send(results);
    } else {
      res.send('error in insert');
    }
  });
})


app.listen(port, () => console.log(`Listening on port ${port}!`))