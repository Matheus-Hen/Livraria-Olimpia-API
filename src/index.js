import express from "express";
import { routerFuncionario } from "./router/routerFuncionario.js";
import db from "./database/connect.js";

const app = express()

app.use(express.json())
routerFuncionario(app)
app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})