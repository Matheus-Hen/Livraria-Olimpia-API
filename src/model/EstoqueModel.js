import dao from '../DAO/estoqueDAO.js'

class Estoque {
    constructor(idEstoque, produto, quantidade, fornecedor) {
        this.idEstoque = idEstoque
        this.produto = produto
        this.quantidade = quantidade
        this.fornecedor = fornecedor
    }


    buscarEstoque = async(produtos) => {
        return await dao.buscarEstoque(produtos)
    }

    inserirEstoque = async (produto) => {
        return await dao.insereEstoque(produto)
    }


}

export default Estoque