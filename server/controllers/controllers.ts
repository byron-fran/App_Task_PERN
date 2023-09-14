import { db } from "../db";
import multer from "multer";

const getTasks = (req : any, res : any) : void => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (error, result) => {
        if(error){
            console.log('no se inserto correctamenete');
            res.status(500).json({
                error : "Error en la base de datos"
            })
        }
        else{
            res.json(result)
            console.log()
        }
    })
};

const getTaskById =  (req : any, res : any ) : void =>  {
    const {id} = req.params
    const sql = `SELECT * FROM tasks WHERE id = ${id}`;
    if(id){
         db.query(sql, (error, result) => {
            if(error){
                res.status(500).send({error : "No se pudo insertar"});
                return
            }
                res.status(200).json(result)
        })
        return
    }
    res.status(400).send({
        message : "Error Id No existe"
    })
}
const insertTask = (req : any, res : any) : void => {

    if(req.body){

        const {name, description, done} = req.body;
       
        const sql = `INSERT INTO tasks (name, description,done) VALUES (?,?,?)`;
        db.query(sql, [name, description, done], (error, result) => {
            if(error){
                res.status(500).send({ error : "No se pudo insertar" })
                return
            }
                res.status(200).json(result)
        })
   
        return
    }
    res.status(404).send({
        'error ' : 'Error en la base de datos'
    });
};

const uppdateTask = (req :any, res :any) : void => {
    const {id} = req.params;
    const {name, description, done} = req.body;

    if(id){
        console.log(id)
        const sql = `UPDATE tasks SET name = ?, description = ?, done = ? WHERE id = ?`;
        const values = [name, description, done, id];

        db.query(sql, values, (error, result) => {
            if(error){
                res.status(404).send({ error : "No se pudo actualizar"})
                return
            }
            res.status(200).json(result)
        });
        return;
    }
    res.status(500).send({
        message: 'error'
    });

};

const deleteTask = (req : any, res : any) : void => {
    const {id} = req.params;
    if(id){
        const sql = `DELETE FROM tasks  WHERE id = ${id}`;
        db.query(sql, (error : any, result : object) => {
            if(error){
                res.status(404).send({
                    message : "Error no se pudo borrar"
                });
                return
            }
            res.status(200).json(result)
        })
        return
    }
    res.status(500).send({error : "Error id no existe"})

}

export {
    getTasks,
    insertTask,
    getTaskById,
    uppdateTask,
    deleteTask
}
