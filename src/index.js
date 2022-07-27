import express from "express";
import { router } from "./router/router.js";
import db from "./db/connect.js";

const app = express()

app.use(express.json())
app.use(router)
app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})