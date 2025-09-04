const express = require('express');
const router = express.Router();
const horariosController = require('../controllers/horariosController');

router.post('/registro', horariosController.registrarHorario);
router.get('/horarios/:id', horariosController.obtenerHorariosPorId);

module.exports = router;

router.get('/test-db', async (req, res) => {
  try {
    const result = await require('../config/db').query('SELECT NOW()');
    res.send({ success: true, timestamp: result.rows[0].now });
  } catch (err) {
    console.error('Error en test-db:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});