const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host:'b49ieheniuofmfyvd2rj-mysql.services.clever-cloud.com',
  database:'b49ieheniuofmfyvd2rj',
  user:'ucbx9uy7h7xjqvkv',
  password:'DfW9153OTUsJZbi1M67j'
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conexión a base de datos exitosa");
});

module.exports = conexion;