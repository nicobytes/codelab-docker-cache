const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World!123');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
