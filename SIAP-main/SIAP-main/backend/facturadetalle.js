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
    console.log('Solicitud POST recibida en /facturadetalleAG');
    const productos = req.body.productos;
    console.log('Datos recibidos en el servidor:', productos);

    if (!Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ error: 'El cuerpo de la solicitud debe contener un arreglo de productos' });
    }

    conexion.beginTransaction(err => {
        if (err) {
            console.error('Error al iniciar la transacción:', err);
            return res.status(500).json({ error: 'Error al iniciar la transacción' });
        }

        productos.forEach(producto => {
            const sql = "CALL InsertarFacturaDetalle(?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const {
                FacturaCompra_idFacturaCompra,
                Producto_idProducto,
                CantidadProductos,
                PrecioCompra,
                nomProducto,
                descripcionProducto,
                fechaVencimiento,
                categoria_idCategorias,
                Persona_idPersona
            } = producto;

            if (typeof Persona_idPersona === 'undefined' || Persona_idPersona === null) {
                conexion.rollback(() => {
                    return res.status(400).json({ error: 'Persona_idPersona es requerido' });
                });
                return;
            }

            conexion.query(sql, [
                FacturaCompra_idFacturaCompra,
                Producto_idProducto,
                CantidadProductos,
                PrecioCompra,
                nomProducto,
                descripcionProducto,
                fechaVencimiento,
                categoria_idCategorias,
                Persona_idPersona
            ], (err, result) => {
                if (err) {
                    conexion.rollback(() => {
                        console.error("Error al insertar detalle de factura:", err);
                        return res.status(500).json({ error: 'Error al insertar detalle de factura' });
                    });
                } else {
                    console.log("Detalle de factura agregado:", producto);
                }
            });
        });

        conexion.commit(err => {
            if (err) {
                conexion.rollback(() => {
                    console.error('Error al hacer commit de la transacción:', err);
                    return res.status(500).json({ error: 'Error al hacer commit de la transacción' });
                });
            } else {
                res.status(201).json({ message: 'Productos agregados exitosamente' });
            }
        });
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
    const {
        FacturaCompra_idFacturaCompra,
        Producto_idProducto,
        CantidadProductos,
        PrecioCompra,
        nomProducto,
        descripcionProducto,
        fechaVencimiento,
        categoria_idCategorias
    } = req.body;

    const sql = "CALL ActualizarFacturaDetalle(?, ?, ?, ?, ?, ?, ?, ?)";

    conexion.query(sql, [
        id,
        FacturaCompra_idFacturaCompra,
        Producto_idProducto,
        CantidadProductos,
        PrecioCompra,
        nomProducto,
        descripcionProducto,
        fechaVencimiento,
        categoria_idCategorias
    ], (error, result) => {
        if (error) {
            console.error("Error al actualizar detalle de factura:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        console.log("Detalle de factura actualizado:", req.body);
        res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});



