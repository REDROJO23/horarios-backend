const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const horariosRoutes = require('./routes/horariosRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', horariosRoutes);

app.listen(3001, () => {
  console.log('Servidor backend corriendo en puerto 3001');
});