import Estoque from "../model/estoqueModel.js";


const estoqueController = {

    buscarEstoque: async (req, res)=> {
        const estoqueModel = new Estoque()
        const todosProdutos = await estoqueModel.buscarEstoque()

        res.json({
            "produtos": todosProdutos,
            "erro": false
        })
    },

}

export default estoqueController