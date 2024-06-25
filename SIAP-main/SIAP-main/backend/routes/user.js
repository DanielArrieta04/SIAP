const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const conexion = require('../conexion'); // Asegúrate de importar la conexión correcta
const { ACCESS_TOKEN_SECRET } = require('../config'); // Importa la clave secreta desde config.js

// Ruta POST para iniciar sesión
router.post('/singin', (req, res) => {
  const { CorreoElectronico, Contrasena } = req.body;

  conexion.query(
    'SELECT * FROM persona WHERE CorreoElectronico=? AND Contrasena=?',
    [CorreoElectronico, Contrasena],
    (err, rows, fields) => {
      if (err) {
        console.error('Error en la consulta SQL:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }

      if (rows.length === 0) {
        return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
      }

      const usuario = rows[0];
          
      const token = jwt.sign(
        { id: usuario.idPersona, correo: usuario.CorreoElectronico, Rol_idRol: usuario.Rol_idRol },
        ACCESS_TOKEN_SECRET
      );

      console.log('Datos del usuario:', usuario);
      console.log('Token generado:', token);

      res.json({ token, usuario });
    }
  );
});

module.exports = router;
