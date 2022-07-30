import dao from '../DAO/estoqueDAO.js'
import db from '../database/connect.js'

class Estoque {
    constructor(idEstoque, produto, quantidade, fornecedor) {
        this.idEstoque = idEstoque
        this.produto = produto
        this.quantidade = quantidade
        this.fornecedor = fornecedor
    }
}

inserirProduto = async (produtos) => {
    return await dao.insereProdutos(produtos)
}

buscarEstoque = async(produtos) => {
    return await dao.buscandoEstoque(produtos)
}

buscarFornecedorEstoque =  async (nome) => {
    return await dao.FornecedorEstoque(nome)
    }   

    buscarQuantidadeEstoque = async (email) => {
    return await dao.pegaClientePeloEmail(email)
    }

