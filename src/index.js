import express from "express";
import { router } from "./router/router.js";
import connect from "./db/connect.js";
const app = express()

connect()
app.use(express.json())
app.use(router)
app.listen(3000, ()=> {
    console.log('Servidor inicializado')
})