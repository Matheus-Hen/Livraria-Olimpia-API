import Estoque from "../model/estoqueModel.js";
import { criaEstoque } from "../services/validacoesEstoque.js";


const estoqueController = {

    buscarEstoque: async (req, res)=> {
        const estoqueModel = new Estoque()
        const todosProdutos = await estoqueModel.buscarEstoque()

        res.json({
            "produtos": todosProdutos,
            "erro": false
        })
    },

    InsereEstoque: async (req, res)=> {
        const body = req.body
        const modelEstoque = new Estoque()
        try {
            const novoEstoque = criaEstoque(body.idEstoque, body.produto, body.quantidade, body.fornecedor)
            await modelEstoque.inserirEstoque(novoEstoque)
            console.log(novoEstoque)
            
            res.json(
                {"msg": "Um novo produto foi inserido com sucesso",
                "estoque": novoEstoque,
                "erro": false}
            )

        } catch (error) {
            res.json(
                {"msg": error.message,
                "erro": true}
            )
        }
    },

    buscarQuantidadePorId: async (req, res)=> {
        const id = req.params.id
        const estoqueModel = new Estoque()
        const todosProdutos = await estoqueModel.buscarQuantidadePorId(id)

        res.json({
            "produtos": todosProdutos,
            "erro": false
        })
    },

    atualizaEstoque: async (req, res)=> {
        const modelEstoque = new Estoque()
        const id = req.params.idEstoque
        const body= await req.body

        try {
            const informacaoAtualizada = criaEstoque(
                body.idEstoque,
                body.produto,
                body.quantidade,
                body.fornecedor
            )

            await modelEstoque.atualizarEstoque(id, informacaoAtualizada)
            res.json(
                {"msg": "Produto atualizado com éxito",
                "produto": informacaoAtualizada,
                "erro": false}
            )
            
            
        } catch (error) {

         res.json(
          {"msg": error.message,
          "erro": true}
          )
       }
   },

    deletaProdutoEstoque: async (req,res) =>{
        const modelEstoque = new Estoque()
        const id = req.params.id

        try{
            await modelEstoque.removeProduto(id)

            res.json(
                {"msg": "O produto foi removido do estoque",
                "erro": false}
            )

        } catch (error) {

            res.json(
                {"msg": error.message,
                "error": true}
            )
            
        }
        
    }
}
        
export default estoqueController