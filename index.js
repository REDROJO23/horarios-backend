const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const horariosRoutes = require('./routes/horariosRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas principales
app.use('/', horariosRoutes);

// Ruta de prueba para verificar que el backend está activo
app.get('/ping', (req, res) => {
  res.send('Backend funcionando en Render 🚀');
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});