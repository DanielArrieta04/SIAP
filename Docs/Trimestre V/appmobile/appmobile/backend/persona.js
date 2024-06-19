const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const md5 = require("md5");

const app = express();

app.use(function (_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(bodyParser.json());
const HOST = '192.168.2.8';
const PUERTO = 4004;

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: ''
});

app.listen(PUERTO, () => {
console.log(`Servidor corriendo en http://${HOST}:${PUERTO}`);



});

conexion.connect(error => {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});

app.post('/login', (req, res) => {
    const { correoElectronico, contrasena } = req.body;

    // Verificar que la contraseña no sea undefined o null
    if (!contrasena) {
        return res.status(400).json({ error: 'Contraseña requerida' });
    }

    const hashedPassword = md5(contrasena);
    console.log('Contraseña a comparar:', hashedPassword);
    const query = 'SELECT * FROM persona WHERE CorreoElectronico = ? AND Contrasena = ?';
    conexion.query(query, [correoElectronico, md5(contrasena)], (error, resultado) => {


        if (error) {
            return res.status(500).json({ error: 'Error al buscar el usuario' });
        }

        if (resultado.length > 0) {
            res.status(200).json({ message: 'Login exitoso', usuario: resultado[0] });
        } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    });
});


app.post('/personaAG', (req, res) => {
    const { Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol } = req.body;
    conexion.query("INSERT INTO persona (Nombre1,Nombre2,Apellido1,Apellido2,fechaNacimiento,Telefono,CorreoElectronico,Contrasena,DireccionResidencia,NumeroDocumentoIdentidad,tipoDocumento_idtipoDocumento,Rol_idRol) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
        [Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, md5(Contrasena), DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error al insertar los datos en la base de datos' });
            }
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});
app.get('/personas', (req, res) => {
    conexion.query('SELECT * FROM persona', (error, resultados) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener las personas desde la base de datos' });
        }
        res.status(200).json({ personas: resultados });
    });
});


app.delete('/personaEl/:id', (request, response) => {
    const id = request.params.id;
    conexion.query("Delete from persona where idPersona=?",
        [id],
        (error, results) => {
            if (error)
                return response.status(500).json({ error: 'Error al eliminar el registro' });
            response.status(201).json({ "item eliminado": results.affectedRows });
        });
});
app.put('/personaAc/:id', (req, res) => {
    const id = req.params.id;
    const { Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol } = req.body;
    const sql = "UPDATE persona SET Nombre1 = ?, Nombre2 = ?, Apellido1 = ?, Apellido2 = ?, fechaNacimiento = ?, Telefono = ?, CorreoElectronico = ?, Contrasena = ?, DireccionResidencia = ?, NumeroDocumentoIdentidad = ?, tipoDocumento_idtipoDocumento = ?, Rol_idRol = ? WHERE idPersona = ?";
    conexion.query(sql, [Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, md5(Contrasena), DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol, id], (error, result) => {
        if (error) {
            console.error("Error al actualizar la persona:", error);
            res.status(500).json({ error: 'Error al actualizar la persona desde el servidor' });
            return;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Persona actualizada correctamente' });
        } else {
            res.status(404).json({ error: 'No se encontró la persona a actualizar' });
        }
    });
});


