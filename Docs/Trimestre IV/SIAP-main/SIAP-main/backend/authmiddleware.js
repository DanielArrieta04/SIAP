const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const { ACCESS_TOKEN_SECRET } = require('./config'); // Ajusta la ruta según la ubicación de tu archivo config.js

// Configuración de la conexión a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: '', // Reemplaza con tu contraseña
    port: 3306, // El puerto por defecto de MySQL
});

// Función para obtener el rol de usuario desde la base de datos
async function obtenerRolUsuarioDesdeBaseDeDatos(idPersona) {
    try {
        await conexion.connect(); // Conectar a la base de datos
        const [rows] = await conexion.query('SELECT Rol_idRol FROM persona WHERE idPersona = ?', [idPersona]);
        if (rows.length > 0) {
            return rows[0].Rol_idRol;
        } else {
            throw new Error('Usuario no encontrado');
        }
    } catch (error) {
        throw error;
    } finally {
        await conexion.end(); // Cerrar la conexión después de usarla
    }
}

// Función para verificar el token JWT
async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado - Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
        const rolUsuario = await obtenerRolUsuarioDesdeBaseDeDatos(decoded.idPersona);

        // Verificar el rol del usuario
        if (rolUsuario === 2) {
            return res.status(403).json({ message: 'Acceso prohibido para rol #2 (Administrador de Bodega)' });
        }

        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error al verificar el token:', error);
        return res.status(401).json({ message: 'Acceso no autorizado - Token inválido' });
    }
}

module.exports = authMiddleware;
