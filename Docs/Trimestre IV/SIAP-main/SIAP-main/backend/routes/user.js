const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const conexion = require('../persona'); // Importa la conexión a la base de datos
const { authenticateToken, authorize } = require('../auth'); // Importa los middlewares de autenticación y autorización
const { ACCESS_TOKEN_SECRET } = require('../config'); // Importa la clave secreta desde config.js

// Asegúrate de que el secreto sea suficientemente largo y seguro
if (ACCESS_TOKEN_SECRET.length < 32) {
  throw new Error('ACCESS_TOKEN_SECRET is too short; it should be at least 32 characters long.');
}

router.post('/singin', (req, res) => {
  const { CorreoElectronico, Contrasena } = req.body; // Extrae correo y contraseña del cuerpo de la solicitud

  // Consulta SQL para verificar las credenciales del usuario
  conexion.query(
    'SELECT * FROM persona WHERE CorreoElectronico=? AND Contrasena=?',
    [CorreoElectronico, Contrasena],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length > 0) {
          const usuario = rows[0]; // Obtiene el primer usuario encontrado
          
          // Genera un token JWT con los datos del usuario
          const token = jwt.sign(
            { id: usuario.idPersona, correo: usuario.CorreoElectronico, Rol_idRol: usuario.Rol_idRol },
            ACCESS_TOKEN_SECRET // Utiliza la clave secreta configurada en config.js
          );

          console.log('Datos del usuario:', usuario); // Imprime los datos del usuario en la consola del servidor
          console.log('Token generado:', token); // Imprime el token JWT generado

          // Envía el token JWT y los datos del usuario como respuesta
          res.json({ token, usuario });
        } else {
          // Si no se encontró ningún usuario con las credenciales proporcionadas
          res.status(401).json('Usuario o contraseña incorrectos');
        }
      } else {
        // Si hubo un error en la consulta a la base de datos
        console.log(err); // Registra el error en la consola del servidor
        res.status(500).json('Error interno del servidor');
      }
    }
  );
});



module.exports = router;
