import express from "express";
import { router } from "./router/router.js";
import  routerLivros   from "./router/routerLivros.js";

const app = express()

app.use(express.json())

routerLivros(app)

app.use(router)
app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})