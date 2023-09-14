"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarId = void 0;
const generarId = () => {
    const id = Math.random().toString(16).substring(2) + Date.now().toString(16);
    return id;
};
exports.generarId = generarId;
