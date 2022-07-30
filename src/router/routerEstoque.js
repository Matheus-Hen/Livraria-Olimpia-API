import estoqueController from "../controller/estoqueController.js";

const routerCliente = (app)=> {

    app.get('/estoque', estoqueController.buscarEstoque)
}