const db = require('../config/db');

exports.registrarHorario = (req, res) => {
  const { id, nombre, fecha, hora_entrada, hora_salida } = req.body;
  const query = `
    INSERT INTO registros (id, nombre, fecha, hora_entrada, hora_salida)
    VALUES ($1, $2, $3, $4, $5)
  `;
  db.query(query, [id, nombre, fecha, hora_entrada, hora_salida], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true });
  });
};

exports.obtenerHorariosPorId = (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM registros WHERE id = $1';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results.rows);
  });
};