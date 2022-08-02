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

    //especificos
    procurarIDfornecedores : async (req, res)=> {
      const id = req.params.id
      const modelFornecedor = new Fornecedores()
      const result = await modelFornecedor.IDfornecedor(id)
      
      res.json({
          "fornecedores": result,
          "erro": false
      })
    },

    procurarProdutosFornecedores : async (req, res)=> {
      const produtos = req.params.produtos
      const modelFornecedor = new Fornecedores()
      const result = await modelFornecedor.produtosFornecedor(produtos)
      
      res.json({
          "fornecedores": result,
          "erro": false
      })
    },
  
    procurarCEPfornecedores : async (req, res)=> {
      const cep = req.params.cep
      const modelFornecedor = new Fornecedores()
      const result = await modelFornecedor.CEPfornecedor(cep)
      
      res.json({
          "fornecedores": result,
          "erro": false
      })
    },
  
    procurarCNPJfornecedores : async (req, res)=> {
      const cnpj = req.params.cnpj
      const modelFornecedor = new Fornecedores()
      const result = await modelFornecedor.CNPJfornecedor(cnpj)
      res.json({
          "fornecedores": result,
          "erro": false
      })
    },

     //DELETA
    deletaFornecedor: async (req, res)=> {
      const modelFornecedor = new Fornecedores()
      const id = req.params.id
      try { 
        await modelFornecedor.deletaFornecedor(id)
        res.json(
          {"msg": "Fornecedor deletado",
            "erro": false}
        )
        } catch (error) {
          res.json(
            { "msg": error.message,
              "erro": true}
          )
        }
      },

    //ATUALIZA
    atualizaFornecedor: async (req, res)=> {
      const modelFornecedor = new Fornecedores()
      const id = req.params.id
      const body = req.body
      try { 
         const fornecedorAtualizado = criaFornecedor(body.nome, body.cnpj,
            body.produto, body.email, body.telefone, body.endereco, body.cep)
            await modelFornecedor.atualizaFornecedor(id, fornecedorAtualizado)
            res.json(
              {"msg": "Fornecedor atualizado",
                "fornecedor": fornecedorAtualizado,
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

export default fornecedoresController