// authorize.js
const conexion = require('./conexion');
const authorize = (role) => {
    return (req, res, next) => {
        // Verificar el rol del usuario obtenido del token decodificado
        const userRole = req.user && req.user.rol;
        if (!userRole || userRole !== role) {
            return res.status(403).json({ message: 'Acceso denegado. Permiso insuficiente.' });
        }
        next();
    };
};

module.exports = authorize;
