const bodyParser = require('body-parser');
const router = require('./routers');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});