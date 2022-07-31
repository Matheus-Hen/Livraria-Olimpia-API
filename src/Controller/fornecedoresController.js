import Fornecedores from '../model/fornecedoresModel.js'
import { criaFornecedor } from '../services/validacoesFornecedores.js'

const fornecedoresController = {

    //CRIA / INSERE
    criarNewFornecedor: async (req, res)=> {
      const body = req.body
      const modelFornecedor = new Fornecedores()
      try {
        const novoFornecedor = criaFornecedor(body.nome, body.cnpj, body.produto,
        body.email, body.telefone, body.endereco, body.cep)
        await modelFornecedor.insereFornecedores(novoFornecedor)
          res.json(
            {"msg": "Fornecedor inserido",
              "cliente": novoFornecedor,
              "erro": false}
          )   
            } catch (error) {
              res.json(
               {"msg": error.message,
                "erro": true}
               )
            }
    },
    
     //geral
    procurarFornecedores : async (req, res)=> {
      const modelFornecedor = new Fornecedores()
      const todosFornecedores = await modelFornecedor.totalDeFornecedores()
      
      res.json({
          "fornecedores": todosFornecedores,
          "erro": false
      })
    },
}