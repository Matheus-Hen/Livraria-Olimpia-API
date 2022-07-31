import express from "express";
import { router } from "./router/router.js";
import db from "./database/connect.js";
import pagamentos from "./router/routerPagamentos.js";

const app = express()

app.use(express.json())
pagamentos(app)
app.use(router)
app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})