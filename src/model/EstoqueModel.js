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

    buscarQuantidadePorId = async(id) => {
        return await dao.buscarQuantidadeporId(id)
    }


    
    atualizarEstoque = async (id, atualizaEstoque) =>{
        const informacaoAtual = await this.buscarQuantidadePorId(id)
        if (informacaoAtual) {
            const informacaoAtualizada = {
                "produto": atualizaEstoque.produto || informacaoAtual.produto,
                "quantidade": atualizaEstoque.quantidade || informacaoAtual.quantidade,
                "fornecedor": atualizaEstoque.fornecedor|| informacaoAtual.fornecedor
            }

            return await dao.atualizarEstoque(id, informacaoAtualizada)
        } else {
            throw new Error("O produto que você está procurando não foi encontrado")
        }
    }


    removeProduto = async (idEstoque) => {
        return await dao.removeProduto(idEstoque)
    }

}

export default Estoque