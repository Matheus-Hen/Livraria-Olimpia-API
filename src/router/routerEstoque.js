import estoqueController from "../controller/estoqueController.js";

const routerEstoque = (app)=> {

    app.get('/estoque', estoqueController.buscarEstoque)
    // busca as informações cadastradas no estoque

    app.post('/estoque', estoqueController.InsereEstoque)
    // adicionar uma nova informação no estoque

    app.get('/estoque/id/:idEstoque', estoqueController.buscarQuantidadePorId)
    // buscando quantidade por id ativo dentro do estoque 

    app.put('/estoque/id/:idEstoque', estoqueController.atualizaEstoque)
    // atualizar as informações no estoque

    app.delete('/estoque/id/:idEstoque', estoqueController.deletaProdutoEstoque)
    // deletar informação do estoque
}

export default routerEstoque