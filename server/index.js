const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('../client/dist'))

app.get('/test', (req, res) => res.send('Test Express Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))