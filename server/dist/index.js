"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const db_1 = require("./db");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
db_1.db;
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/', routes_1.router);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`el puerto ${PORT} esta conectado`);
});
