import {Router} from 'express';
import { getTasks, insertTask , getTaskById,uppdateTask, deleteTask} from '../controllers/controllers';
import multer from 'multer';
export const router = Router();



router.get('/tasks', getTasks);
router.get('/task/:id', getTaskById);
router.post('/task',  insertTask);
router.put('/task/:id', uppdateTask);
router.delete('/task/:id', deleteTask)
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
