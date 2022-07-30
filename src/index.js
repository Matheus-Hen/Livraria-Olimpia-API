import express from "express";
import routerEstoque from "./router/routerEstoque.js";
import db from "./database/connect.js";

const app = express()
const port = 3000

app.use(express.json())
routerEstoque(app)

app.listen(port, () => {
    console.log(`servidor aberto em http://localhost:${port}/`)
})