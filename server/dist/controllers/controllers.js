"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.uppdateTask = exports.getTaskById = exports.insertTask = exports.getTasks = void 0;
const db_1 = require("../db");
const getTasks = (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db_1.db.query(sql, (error, result) => {
        if (error) {
            console.log('no se inserto correctamenete');
            res.status(500).json({
                error: "Error en la base de datos"
            });
        }
        else {
            res.json(result);
            console.log();
        }
    });
};
exports.getTasks = getTasks;
const getTaskById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM tasks WHERE id = ${id}`;
    if (id) {
        db_1.db.query(sql, (error, result) => {
            if (error) {
                res.status(500).send({ error: "No se pudo insertar" });
                return;
            }
            res.status(200).json(result);
        });
        return;
    }
    res.status(400).send({
        message: "Error Id No existe"
    });
};
exports.getTaskById = getTaskById;
const insertTask = (req, res) => {
    if (req.body) {
        const { name, description, done } = req.body;
        const sql = `INSERT INTO tasks (name, description,done) VALUES (?,?,?)`;
        db_1.db.query(sql, [name, description, done], (error, result) => {
            if (error) {
                res.status(500).send({ error: "No se pudo insertar" });
                return;
            }
            res.status(200).json(result);
        });
        return;
    }
    res.status(404).send({
        'error ': 'Error en la base de datos'
    });
};
exports.insertTask = insertTask;
const uppdateTask = (req, res) => {
    const { id } = req.params;
    const { name, description, done } = req.body;
    if (id) {
        console.log(id);
        const sql = `UPDATE tasks SET name = ?, description = ?, done = ? WHERE id = ?`;
        const values = [name, description, done, id];
        db_1.db.query(sql, values, (error, result) => {
            if (error) {
                res.status(404).send({ error: "No se pudo actualizar" });
                return;
            }
            res.status(200).json(result);
        });
        return;
    }
    res.status(500).send({
        message: 'error'
    });
};
exports.uppdateTask = uppdateTask;
const deleteTask = (req, res) => {
    const { id } = req.params;
    if (id) {
        const sql = `DELETE FROM tasks  WHERE id = ${id}`;
        db_1.db.query(sql, (error, result) => {
            if (error) {
                res.status(404).send({
                    message: "Error no se pudo borrar"
                });
                return;
            }
            res.status(200).json(result);
        });
        return;
    }
    res.status(500).send({ error: "Error id no existe" });
};
exports.deleteTask = deleteTask;
