const moduleName = "contrato";
const conexion = require('./conexion');
function RegisterContrato(app){
app.get(`/${moduleName}`, (_req, res, next) =>{
    const query = `SELECT * FROM ${moduleName};`
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

app.get(`/${moduleName}/:id`, (req, res, next) =>{
    const id = req.params.id;
    const query = `SELECT * FROM ${moduleName} WHERE idContrato=?`;
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

app.post(`/${moduleName}/agregar`, (req, res) => {
    const { Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona} = req.body;
    conexion.query(`INSERT INTO ${moduleName} (Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona) VALUES (?,?,?,?,?)`,
        [Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete(`/${moduleName}/borrar/:id`,(request,response)=>{
    const id=request.params.id;
    conexion.query(`DELETE FROM ${moduleName} WHERE idContrato=?`,
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put(`/${moduleName}/editar/:id`,(req,_res)=>{
    const id = req.params.id;
    const {Salario,FechaInicioContrato,FechaFinalContrato} = req.body;
    const sql = `UPDATE ${moduleName} SET Salario = ?, FechaInicioContrato = ?, FechaFinalContrato = ? WHERE idContrato = ?`;
    conexion.query(sql,[Salario,FechaInicioContrato,FechaFinalContrato,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})
}

module.exports = {RegisterContrato};