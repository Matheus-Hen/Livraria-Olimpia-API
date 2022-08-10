import dao from '../DAO/estoqueDAO.js'

class Estoque {
    constructor(idEstoque, produto, quantidade, fornecedor) {
        this.idEstoque = idEstoque
        this.produto = produto
        this.quantidade = quantidade
        this.fornecedor = fornecedor
    }


    buscarEstoque = async(produtos) => {
        try {
            const data = await dao.buscarEstoque(produtos)
            return {
                "dados": data,
                "tamanho": data.length,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }
    
        buscarQuantidadePorId = async(id) => {
            try {
                const data = await dao.buscarQuantidadeporId(id)
                if (data) {
                    return {
                        "dados": data,
                        "status": 200
                    }
                } else {
                    return {
                        "mensagem": `Produto de ID ${id} não encontrado`,
                        "status": 400
                    }
                }
            } catch (error) {
                return {
                    "mensagem": error.message,
                    "status": 400
                }
            }
        }

    inserirEstoque = async (produto) => {
        try {
            const data = await dao.insereEstoque(produto)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }


    
    atualizarEstoque = async (id, atualizaEstoque) =>{
        try {
            const informacaoAtual = await this.buscarQuantidadePorId(id)
            if (informacaoAtual) {
                const informacaoAtualizada = {
                    "produto": atualizaEstoque.produto || informacaoAtual.produto,
                    "quantidade": atualizaEstoque.quantidade || informacaoAtual.quantidade,
                    "fornecedor": atualizaEstoque.fornecedor|| informacaoAtual.fornecedor
                }
    
                const data = await dao.atualizarEstoque(id, informacaoAtualizada)
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                throw new Error("O produto que você está procurando não foi encontrado")
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }


    removeProduto = async (idEstoque) => {
        try {
            const data = await dao.removeProduto(idEstoque)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

}

export default Estoque