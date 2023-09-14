"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
exports.router = (0, express_1.Router)();
exports.router.get('/tasks', controllers_1.getTasks);
exports.router.get('/task/:id', controllers_1.getTaskById);
exports.router.post('/task', controllers_1.insertTask);
exports.router.put('/task/:id', controllers_1.uppdateTask);
exports.router.delete('/task/:id', controllers_1.deleteTask);
// const storage = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, './uploads/')
//     },
//     filename : (req, file, cb) => {
//         cb(null , Date.now()  + '-' + file.originalname );
//         console.log(file.originalname)
//     }
// });
// const upload = multer({storage : storage});
// router.post('/upload', upload.single('foto'), (req, res) => {
//     if(req.body){
//         console.log(req.file?.path)
//         console.log(upload)
//         res.send(req.body)
//         return
//     };
//     res.status(500).send({
//         error : "no se pudo subir"
//     })
// });
