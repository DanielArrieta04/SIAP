const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

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

const PUERTO = process.env.PORT || 4014; // Usar el puerto del entorno si está disponible

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: '', // Reemplaza con tu contraseña
    port: 3306, // El puerto por defecto de MySQL
});

// Intenta conectarse a la base de datos
conexion.connect(error => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conectado a la base de datos de Azure');
    }
});

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto: ${PUERTO}`);
});

app.get('/tienda', (_req, res, next) => {
    const query = 'SELECT * FROM tienda;';
    conexion.query(query, (error, resultado) => {
        if (error) {
            return next(error);
        }

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros' });
        }
    });
});

app.get('/tiendaID/:id', (req, res, next) => {
    const id = req.params.id;
    const query = 'SELECT * FROM tienda WHERE idTienda=?';
    conexion.query(query, [id], (error, resultado) => {
        if (error) {
            return next(error);
        }

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros de id' });
        }
    });
});

app.post('/tiendaAG', (req, res, next) => {
    const { nombre, direccion } = req.body;
    const query = "INSERT INTO tienda (nombre, direccion) VALUES (?,?)";
    conexion.query(query, [nombre, direccion], (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(201).json({ "Item añadido": result.affectedRows });
    });
});

app.delete('/tiendaEl/:id', (req, res, next) => {
    const id = req.params.id;
    const query = "DELETE FROM tienda WHERE idTienda=?";
    conexion.query(query, [id], (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({ "item eliminado": results.affectedRows });
    });
});

app.put('/tiendaAc/:id', (req, res, next) => {
    const id = req.params.id;
    const { nombre, direccion } = req.body;
    const query = "UPDATE tienda SET nombre = ?, direccion = ? WHERE idTienda = ?";
    conexion.query(query, [nombre, direccion, id], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});
