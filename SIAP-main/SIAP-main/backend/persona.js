const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 4020;

const conexion = mysql.createConnection({
    host: 'bdsiap.mysql.database.azure.com',
    user: 'siapadmin',
    password: 'Pollitos123456.', // Reemplaza con tu contraseña
    database: 'bdsiap', // Nombre de tu base de datos en Azure
    port: 3306 // El puerto por defecto de MySQL
});

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

// Protege tus rutas con authenticateToken y authorize según sea necesario
app.get('/persona', (_req, res, next) => {
    const query = 'SELECT * FROM persona;';
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

app.get('/personaID/:id', (req, res, next) => {
    const id = req.params.id;
    const query = 'SELECT * FROM persona WHERE idPersona = ?';
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

app.post('/personaAG', (req, res) => {
    const { Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol } = req.body;
    conexion.query("INSERT INTO persona (Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});

app.delete('/personaEl/:id', (request, response) => {
    const id = request.params.id;
    conexion.query("DELETE FROM persona WHERE idPersona = ?",
        [id],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "item eliminado": results.affectedRows });
        });
});

app.put('/personaAc/:id',  (req, _res) => {
    const id = req.params.id;
    const { Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad } = req.body;
    const sql = "UPDATE persona SET Nombre1 = ?, Nombre2 = ?, Apellido1 = ?, Apellido2 = ?, fechaNacimiento = ?, Telefono = ?, CorreoElectronico = ?, Contrasena = ?, DireccionResidencia = ?, NumeroDocumentoIdentidad = ? WHERE idPersona = ?";
    conexion.query(sql, [Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, id],
        (error, res) => {
            if (error)
                throw error;
            _res.status(201).json({ "Datos actualizados: ": res.affectedRows, "id:": id });
        });
});

module.exports = conexion;
