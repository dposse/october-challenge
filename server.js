const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

// const mainRoutes = require('./routes/main');

// app.use(mainRoutes);

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
});