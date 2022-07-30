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

    buscarFornecedorEstoque =  async (produtos) => {
        return await dao.FornecedorEstoque(produtos)
    }   

    buscarQuantidadeEstoque = async (produtos) => {
    return await dao.buscarQuantidadeEstoque(produtos)
    }

}

export default Estoque