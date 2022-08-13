import express from "express";
import routerCliente from "./router/routerCliente.js";
import pagamentos from "./router/routerPagamentos.js";
import fornecedores from "./router/fornecedoresRouter.js"
import routerEstoque from "./router/routerEstoque.js";
import { routerFuncionario } from "./router/routerFuncionario.js";
import routerLivros from "./router/routerLivros.js";

const app = express()

app.use(express.json())


pagamentos(app)
fornecedores(app)
routerCliente(app)
routerEstoque(app)
routerFuncionario(app)
routerLivros(app)

const port = 3000;

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

export default app