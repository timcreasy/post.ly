const express = require('express');
const bodyParser = require('body-parser');
var app = express();

require('./db')

app.use(bodyParser.json());
app.use(require('./controllers'));

app.listen(3000, () => {
  console.log("Server listening at port 3000...");
});
