const jwt = require('jsonwebtoken');
const conexion = require('./conexion');
const { ACCESS_TOKEN_SECRET } = require('./config'); // Asegúrate de ajustar la ruta y el nombre de la clave secreta según tu configuración

function authenticateToken(req, res, next) {
  // Obtiene el token de las cabeceras de la solicitud
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Si no hay token, responde con un estado 401 (No autorizado)
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  // Verifica y decodifica el token JWT
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decodedToken) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      return res.status(403).json({ message: 'Acceso denegado. Token inválido.' }); // Si el token no es válido, responde con un estado 403 (Prohibido)
    }

    // Almacena la información del usuario decodificado en el objeto de solicitud
    req.user = decodedToken;
    next(); // Continúa con el siguiente middleware
  });
}

function authorize(role) {
  return (req, res, next) => {
    // Verifica el rol del usuario obtenido del token decodificado
    const userRole = req.user && req.user.Rol_idRol;

    // Si el rol del usuario no coincide con el rol permitido, devuelve un estado 403 (Prohibido)
    if (!userRole || userRole !== role) {
      return res.status(403).json({ message: 'Acceso denegado. Permiso insuficiente.' });
    }

    next(); // Continúa con el siguiente middleware si el rol es adecuado
  };
}

module.exports = {
  authenticateToken,
  authorize,
};
