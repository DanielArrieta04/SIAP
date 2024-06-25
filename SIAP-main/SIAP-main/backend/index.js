// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aler = require('./alertas');
const categoria = require('./categoria');
const contrato = require('./contrato');
const devolucion = require('./devolucion');
const devoluciondetallada = require('./devoluciondetallada');
const facturacompra = require('./facturacompra');
const facturadetalle = require('./facturadetalle');
const gestionproducto = require('./gestionproducto');
const ordendesalida = require('./ordendesalida');
const ordendesalidadetallada = require('./ordendesalidadetallada');
const persona = require('./persona');
const producto = require('./producto');
const proveedor = require('./proveedor');
const rol = require('./rol');
const subcategoria = require('./subcategoria');
const tienda = require('./tienda');
const tipocontrato = require('./tipocontrato');
const tipodocumento = require('./tipodocumento');

const userRoutes = require('./routes/user'); // Importa rutas de usuario

const app = express();
const PORT = process.env.PORT || 5200;
const conexion = require('./conexion');

app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos
conexion.connect((error) => {
  if (error) throw error;
  console.log('Conexión a base de datos exitosa');
});

// Registra todas las rutas
aler.RegisterAlertas(app);
categoria.RegisterCategoria(app);
contrato.RegisterContrato(app);
devolucion.RegisterDevolucion(app);
devoluciondetallada.RegisterDevolucionDetallada(app);
facturacompra.RegisterFacturaCompra(app);
facturadetalle.RegisterFacturaDetalle(app);
gestionproducto.RegisterGestionProducto(app);
ordendesalida.RegisterOrdenDeSalida(app);
ordendesalidadetallada.RegisterOrdenDeSalidaDetallada(app);
persona.RegisterPersona(app);
producto.RegisterProducto(app);
proveedor.RegisterProveedor(app);
rol.RegisterRol(app);
subcategoria.RegisterSubCategoria(app);
tienda.RegisterTienda(app);
tipocontrato.RegisterTipoContrato(app);
tipodocumento.RegisterTipoDocumento(app);

// Usa las rutas de usuario
app.use('/user', userRoutes); // Asegúrate de usar '/user' antes de userRoutes

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto: ${PORT}`);
});
