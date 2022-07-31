import estoqueController from "../controller/estoqueController.js";

const routerEstoque = (app)=> {

    app.get('/estoque', estoqueController.buscarEstoque)
    // busca as informações cadastradas no estoque

    app.post('/estoque', estoqueController.InsereEstoque)
    // adicionar uma nova informação no estoque

    
}

export default routerEstoque