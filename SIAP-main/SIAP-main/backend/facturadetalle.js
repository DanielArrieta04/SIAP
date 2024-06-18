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

const PUERTO = process.env.PORT || 4012; // Usar el puerto del entorno si está disponible

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: '', // Reemplaza con tu contraseña
    port: 3306, // El puerto por defecto de MySQL
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

app.get('/facturadetalle', (_req, res, next) =>{
    const query = 'SELECT * FROM facturadetalle;'
    conexion.query(query, (error, resultado) =>{
        if(error) {
            return next(error); 
        }
        
        if(resultado.length > 0) { 
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros' }); 
        }
    });
});

app.get('/facturadetalleID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM facturadetalle WHERE FacturaCompra_idFacturaCompra=?';
    conexion.query(query, [id], (error, resultado) =>{
        if(error) {
            return next(error); 
        }
        
        if(resultado.length > 0) { 
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros de id' }); 
        }
    });
});

app.post('/facturadetalleAG', (req, res) => {
    const { FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, categoria_idCategorias } = req.body;
    conexion.query("CALL InsertarFacturaDetalle(?, ?, ?, ?, ?, ?, ?)",
        [FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, categoria_idCategorias],
        (err, result) => {
            if (err) {
                console.error("Error al insertar detalle de factura:", err);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
            console.log("Detalle de factura agregado:", req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
        });
});


app.delete('/facturadetalleEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM facturadetalle WHERE FacturaCompra_idFacturaCompra=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/facturadetalleAc/:id', (req, res) => {
    const id = req.params.id;
    const { FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, categoria_idCategorias } = req.body;
    const sql = "CALL ActualizarFacturaDetalle(?, ?, ?, ?, ?, ?, ?, ?)";
    conexion.query(sql, [id, FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, categoria_idCategorias],
        (error, result) => {
            if (error) {
                console.error("Error al actualizar detalle de factura:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
            console.log("Detalle de factura actualizado:", req.body);
            res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
        });
});


