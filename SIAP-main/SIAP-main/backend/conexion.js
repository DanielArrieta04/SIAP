const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host:'siap.mysql.database.azure.com',
  database:'bdsiap',
  user:'DSGD',
  password:'Sa1028881949#'
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conexión a base de datos exitosa");
});

module.exports = conexion;