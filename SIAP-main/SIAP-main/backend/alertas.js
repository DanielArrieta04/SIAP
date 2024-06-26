const moment = require('moment'); // Importación de moment
const conexion = require('./conexion');

function RegisterAlertas(app) {
    app.get('/alertas', (req, res) => {
        const hoy = moment().format('YYYY-MM-DD');
        const enTreintaDias = moment().add(30, 'days').format('YYYY-MM-DD');

        const query1 = `
            SELECT idProducto, nomProducto, fechaVencimiento, DATEDIFF(fechaVencimiento, ?) AS diasRestantes
            FROM producto
            WHERE fechaVencimiento BETWEEN ? AND ?
        `;

        const query2 = `
            SELECT idProducto, nomProducto, cantidadExistente
            FROM producto
            WHERE cantidadExistente <= 50
        `;

        conexion.query(query1, [hoy, hoy, enTreintaDias], (err1, results1) => {
            if (err1) {
                return res.status(500).send(err1.message);
            }

            // Almacenar resultados de la primera consulta
            const alertasVencimiento = results1;

            conexion.query(query2, (err2, results2) => {
                if (err2) {
                    return res.status(500).send(err2.message);
                }

                // Almacenar resultados de la segunda consulta
                const alertasBajoStock = results2;

                // Combinar resultados en un solo objeto de respuesta
                const alertas = {
                    proximosAVencer: alertasVencimiento,
                    bajoStock: alertasBajoStock
                };

                res.json(alertas);
            });
        });
    });
}

module.exports = { RegisterAlertas };
