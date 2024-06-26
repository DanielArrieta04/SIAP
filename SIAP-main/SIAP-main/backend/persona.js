const moduleName = "persona";
const conexion = require('./conexion');
function RegisterPersona(app){

// Protege tus rutas con authenticateToken y authorize según sea necesario
app.get(`/${moduleName}`, (_req, res, next) => {
    const query = `SELECT * FROM ${moduleName};`;
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

app.get(`/${moduleName}/:id`, (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM ${moduleName} WHERE idPersona = ?`;
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

app.post(`/${moduleName}/agregar`, (req, res, next) => {
    const { Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol } = req.body;
    conexion.query(`INSERT INTO ${moduleName} (Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, tipoDocumento_idtipoDocumento, Rol_idRol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id; // Aquí corregido a req.params.id
    conexion.query(`DELETE FROM ${moduleName} WHERE idPersona = ?`,
        [id],
        (error, results) => {
            if (error) {
                console.error("Error al borrar la persona:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
            console.log("Persona eliminada:", id);
            res.status(201).json({ "item eliminado": results.affectedRows });
        });
});


app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad } = req.body;
    const sql = `UPDATE ${moduleName} SET Nombre1 = ?, Nombre2 = ?, Apellido1 = ?, Apellido2 = ?, fechaNacimiento = ?, Telefono = ?, CorreoElectronico = ?, Contrasena = ?, DireccionResidencia = ?, NumeroDocumentoIdentidad = ? WHERE idPersona = ?`;
    conexion.query(sql, [Nombre1, Nombre2, Apellido1, Apellido2, fechaNacimiento, Telefono, CorreoElectronico, Contrasena, DireccionResidencia, NumeroDocumentoIdentidad, id],
        (error, result) => { // Cambiado 'res' por 'result' para evitar conflicto de nombres
            if (error) {
                console.error("Error al actualizar persona:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
            console.log("Persona actualizada:", id);
            res.status(201).json({ "Datos actualizados: ": result.affectedRows, "id:": id });
        });
});

}

module.exports = {RegisterPersona};
