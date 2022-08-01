import express from "express";
import cors from "cors";
import routerCliente from "./router/routerCliente.js";

const app = express()

app.use(cors())
app.use(express.json())

routerCliente(app)

const port = 3000;

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

export default app