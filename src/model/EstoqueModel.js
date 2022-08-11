import dao from '../DAO/estoqueDAO.js'

class Estoque {

    buscarEstoque = async(produtos) => {
        try {
            const data = await dao.buscarEstoque(produtos)
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

    inserirEstoque = async (produto, quantidade, fornecedor) => {
        try {
            const estoque = this.criaEstoque(produto, quantidade, fornecedor)
            const data = await dao.insereEstoque(estoque)
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


    
    atualizarEstoque = async (id, produto, quantidade, fornecedor) =>{
        try {
            const atualizaEstoque = this.criaEstoque(produto, quantidade, fornecedor)
            const informacaoAtual = await this.buscarQuantidadePorId(id)
            if (informacaoAtual) {
                const informacaoAtualizada = {
                    "produto": atualizaEstoque.produto || informacaoAtual.dados.produto,
                    "quantidade": atualizaEstoque.quantidade || informacaoAtual.dados.quantidade,
                    "fornecedor": atualizaEstoque.fornecedor|| informacaoAtual.dados.fornecedor
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

    criaEstoque = (produto, quantidade, fornecedor)=> {
        return {
            "produto": produto,
            "quantidade": quantidade,
            "fornecedor": fornecedor,
        }
    }
}

export default Estoque