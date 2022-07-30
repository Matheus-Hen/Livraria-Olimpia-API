import estoqueController from "../controller/estoqueController.js";

const routerEstoque = (app)=> {

    app.get('/estoque', estoqueController.buscarEstoque)
}

export default routerEstoque