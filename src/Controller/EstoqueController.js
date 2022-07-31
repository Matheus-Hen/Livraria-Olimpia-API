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
    }
}
export default estoqueController