import Estoque from "../model/estoqueModel.js";
import { criaEstoque } from "../services/validacoesEstoque.js";

const estoqueModel = new Estoque()

const estoqueController = {

    buscarEstoque: async (req, res)=> {
        try {
            const resposta = await estoqueModel.buscarEstoque()
    
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "produtos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro": true
                })
            }

        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    InsereEstoque: async (req, res)=> {
        const body = req.body
        try {
            const novoEstoque = criaEstoque(body.idEstoque, body.produto, body.quantidade, body.fornecedor)
            const resposta = await estoqueModel.inserirEstoque(novoEstoque)
            
            res.status(resposta.status).json(
                {"msg": "Um novo produto foi inserido com sucesso",
                "estoque": resposta.dados,
                "erro": false}
            )

        } catch (error) {
            res.status(resposta.status).json(
                {"msg": error.message,
                "erro": true}
            )
        }
    },

    buscarQuantidadePorId: async (req, res)=> {
        const id = req.params.id

        try {
            const todosProdutos = await estoqueModel.buscarQuantidadePorId(id)
    
            res.status(resposta.status).json({
                "produtos": todosProdutos,
                "erro": false
            })
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    },

    atualizaEstoque: async (req, res)=> {
        const id = req.params.idEstoque
        const body= await req.body

        try {
            const informacaoAtualizada = criaEstoque(
                body.idEstoque,
                body.produto,
                body.quantidade,
                body.fornecedor
            )

            const resposta = await estoqueModel.atualizarEstoque(id, informacaoAtualizada)
            res.status(resposta.status).json(
                {"msg": "Produto atualizado com éxito",
                "produto": resposta.dados,
                "erro": false}
            )
            
        } catch (error) {

         res.status(500).json(
          {"msg": error.message,
          "erro": true}
          )
       }
   },

    deletaProdutoEstoque: async (req,res) =>{
        const id = req.params.id

        try{
            const resposta = await estoqueModel.removeProduto(id)

            res.status(resposta.status).json(
                {"msg": "O produto foi removido do estoque",
                "erro": false}
            )

        } catch (error) {

            res.status(500).json(
                {"msg": error.message,
                "error": true}
            )
            
        } 
    }

}
        
export default estoqueController