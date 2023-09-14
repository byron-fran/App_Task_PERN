//import mysql from 'mysql';
import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();


export  const db = mysql.createConnection({
        host : 'localhost',
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
    
    
    });
db.connect( error => {
        if(error){
            console.log(error)
            console.log('Hubo un error al conectar la base de datos')
        }
        else{
            console.log('conexion a base de datos exitosa!!!')
        }
    });
    process.on('exit', () => {
        db.end();
    })




