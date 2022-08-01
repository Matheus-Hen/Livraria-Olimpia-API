import express from "express";
import routerCliente from "./router/routerCliente.js";


const app = express()

app.use(express.json())

routerCliente(app)

app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})