"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
//import mysql from 'mysql';
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = mysql2_1.default.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
exports.db.connect(error => {
    if (error) {
        console.log(error);
        console.log('Hubo un error al conectar la base de datos');
    }
    else {
        console.log('conexion a base de datos exitosa!!!');
    }
});
process.on('exit', () => {
    exports.db.end();
});
