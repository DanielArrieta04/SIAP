// routes/user.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const conexion = require('../conexion'); // Importar conexión correcta
const cors = require('cors'); 
const { ACCESS_TOKEN_SECRET } = require('../config');

// Configuración de CORS
router.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Asegúrate de que el secreto sea suficientemente largo y seguro
if (ACCESS_TOKEN_SECRET.length < 32) {
  throw new Error('ACCESS_TOKEN_SECRET is too short; it should be at least 32 characters long.');
}

router.post('/signin', (req, res) => { // Nombre de ruta correcto
  const { CorreoElectronico, Contrasena } = req.body;

  // Consulta SQL para verificar las credenciales del usuario
  conexion.query(
    'SELECT * FROM persona WHERE CorreoElectronico=? AND Contrasena=?',
    [CorreoElectronico, Contrasena],
    (err, rows) => {
      if (!err) {
        if (rows.length > 0) {
          const usuario = rows[0];

          // Genera un token JWT con los datos del usuario
          const token = jwt.sign(
            { id: usuario.idPersona, correo: usuario.CorreoElectronico, Rol_idRol: usuario.Rol_idRol },
            ACCESS_TOKEN_SECRET
          );

          console.log('Datos del usuario:', usuario);
          console.log('Token generado:', token);

          // Envía el token JWT y los datos del usuario como respuesta
          res.json({ token, usuario });
        } else {
          res.status(401).json('Usuario o contraseña incorrectos');
        }
      } else {
        console.log(err);
        res.status(500).json('Error interno del servidor');
      }
    }
  );
});

module.exports = router;
