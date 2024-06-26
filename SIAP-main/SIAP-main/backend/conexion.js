const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host:'bdsiap.mysql.database.azure.com',
  database:'bdsiap',
  user:'siapadmin',
  password:'pollitoS123456.'
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conexión a base de datos exitosa");
});

module.exports = conexion;