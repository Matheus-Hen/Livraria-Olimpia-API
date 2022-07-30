import express from "express";
import routerCliente from "./router/routerCliente.js";
import db from "./database/connect.js";

const app = express()

routerCliente(app)

app.use(express.json())
app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})