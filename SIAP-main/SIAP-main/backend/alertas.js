const express = require('express');
const mysql = require('mysql2');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Configuración de CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Manejo de la solicitud preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 5000; // Usar el puerto del entorno si está disponible

const db = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: '04120413', // Reemplaza con tu contraseña
    port: 3306, // El puerto por defecto de MySQL
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Endpoint para verificar productos próximos a vencer
router.get('/alertas', (req, res) => {
    const hoy = moment().format('YYYY-MM-DD');
    const enSieteDias = moment().add(7, 'days').format('YYYY-MM-DD');

    const query = `
        SELECT * FROM producto
        WHERE fechaVencimiento BETWEEN ? AND ?
    `;

    db.query(query, [hoy, enSieteDias], (err, results) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(results);
    });
});

// Usar el router
app.use(router);

// Iniciar el servidor
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
