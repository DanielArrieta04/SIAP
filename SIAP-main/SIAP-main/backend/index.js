const aler = require("./alertas");
const contrato = require("./contrato");
const devolucion = require("./devolucion");
const devoluciondetallada = require("./devoluciondetallada");
const facturacompra = require("./facturacompra");
const facturadetalle = require("./facturadetalle");
const gestionproducto = require("./gestionproducto");
const ordendesalida = require("./ordendesalida");
const ordendesalidadetallada = require("./ordendesalidadetallada");
const persona = require("./persona");
const producto = require("./producto");
const proveedor = require("./proveedor");
const rol = require("./rol");
const subcategoria = require("./subcategoria");
const tienda = require("./tienda");
const tipocontrato = require("./tipocontrato");
const tipodocumento = require("./tipodocumento");


const router = require('express').Router();
const user = require("./routes/user");
const ap = require("./app");
const auth = require("./auth");
const authMiddleware = require("./authmiddleware");
const authorize = require("./authorize");
const config = require("./config");
const server = require("./server");


const mysql = require('mysql2');

conexion = mysql.createConnection({

    host:'bdsiap.mysql.database.azure.com',
    database:'bdsiap',
    user:'siapadmin',
    password:'Pollitos123456.'
})


const express = require("express");
const bodyParser = require("body-parser");
const { throws } = require("assert");
const app = express();


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json());
const PUERTO = 5200;

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conexion a base de datos exitosa");
});

app.listen(PUERTO, () => {
  console.log("Servidor iniciado en el puerto: ", PUERTO);
});


aler.RegisterAlertas(app);
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
