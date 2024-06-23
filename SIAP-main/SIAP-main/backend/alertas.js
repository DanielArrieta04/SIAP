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

// Endpoint para obtener alertas de productos próximos a vencer y bajo stock
router.get('/alertas', (req, res) => {
    const hoy = moment().format('YYYY-MM-DD');
    const enTreintaDias = moment().add(30, 'days').format('YYYY-MM-DD');

    const query1 = `
        SELECT idProducto, nomProducto, fechaVencimiento, DATEDIFF(fechaVencimiento, ?) AS diasRestantes
        FROM producto
        WHERE fechaVencimiento BETWEEN ? AND ?
    `;

    const query2 = `
        SELECT idProducto, nomProducto, cantidadExistente
        FROM producto
        WHERE cantidadExistente <= 50
    `;

    db.query(query1, [hoy, hoy, enTreintaDias], (err1, results1) => {
        if (err1) {
            return res.status(500).send(err1.message);
        }

        // Almacenar resultados de la primera consulta
        const alertasVencimiento = results1;

        db.query(query2, (err2, results2) => {
            if (err2) {
                return res.status(500).send(err2.message);
            }

            // Almacenar resultados de la segunda consulta
            const alertasBajoStock = results2;

            // Combinar resultados en un solo objeto de respuesta
            const alertas = {
                proximosAVencer: alertasVencimiento,
                bajoStock: alertasBajoStock
            };

            res.json(alertas);
        });
    });
});

// Usar el router
app.use('/alertas', router); // Ruta base para el router

// Iniciar el servidor
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
