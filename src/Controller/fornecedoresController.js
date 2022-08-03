import Fornecedores from '../model/fornecedoresModel.js'
import { criaFornecedor } from '../services/validacoesFornecedores.js'

const modelFornecedor = new Fornecedores()

const fornecedoresController = {

    //CRIA / INSERE
    criarNewFornecedor: async (req, res)=> {
      const body = req.body
      try {
        const novoFornecedor = criaFornecedor(body.nome, body.cnpj, body.produto,
        body.email, body.telefone, body.endereco, body.cep)
        const resposta = await modelFornecedor.insereFornecedores(novoFornecedor)

        if (resposta.status === 200) {
          res.status(resposta.status).json(
            {"msg": "Fornecedor inserido",
              "cliente": resposta.dados,
              "erro": false}
          )   
        } else {
          res.status(resposta.status).json(
            {"msg": resposta.mensagem,
          "erro": true}
          )
        }
            } catch (error) {
              res.status(500).json(
               {"msg": error.message,
                "erro": true}
               )
            }
    },
    
     //geral
    procurarFornecedores : async (req, res)=> {
      try {
        const resposta = await modelFornecedor.totalDeFornecedores()
        
        if (resposta.status === 200) {
          res.status(resposta.status).json({
              "fornecedores": resposta.dados,
              "erro": false
          })
        } else {
          res.status(resposta.status).json({
            "mensagem": resposta.mensagem,
            "erro": true
          })
        }
      } catch (error) {
        res.status(500).json(
          {"mensagem": error.message,
        "erro": true}
          )
      }
    },

    //especificos
    procurarIDfornecedores : async (req, res)=> {
      try {
        const id = req.params.id
        const resposta = await modelFornecedor.IDfornecedor(id)
        
        if (resposta.status === 200) {
          res.status(resposta.status).json({
              "fornecedores": resposta.dados,
              "erro": false
          })
        } else {
          res.status(resposta.status).json({
            "mensagem": resposta.mensagem,
            "erro": true})
        }
      } catch (error) {
        res.status(500).json({
          "mensagem": error.message,
          "erro": true
        })
      }
    },

    procurarProdutosFornecedores : async (req, res)=> {
      try {
        const produtos = req.params.produtos
        const resposta = await modelFornecedor.produtosFornecedor(produtos)

        if (resposta.status === 200) {
          res.status(resposta.status).json({
            "fornecedores": resposta.dados,
            "erro": false
        })
        } else {
          res.status(resposta.status).json({
            "mensagem": resposta.mensagem,
            "erro": true})
        }
    } catch (error) {
      res.status(500).json({
        "mensagem": error.message,
        "erro": true
      })
      }
    },
  
    procurarCEPfornecedores : async (req, res)=> {
      try {
        
        const cep = req.params.cep
        const resposta = await modelFornecedor.CEPfornecedor(cep)
        
        if (resposta.status === 200) {
          res.status(resposta.status).json({
              "fornecedores": resposta.dados,
              "erro": false
          })
        } else {
          res.status(resposta.status).json({
            "mensagem": resposta.mensagem,
            "erro": true})
        }
      } catch (error) {
        res.status(500).json({
          "mensagem": error.message,
          "erro": true
        })
        }
    },
  
    procurarCNPJfornecedores : async (req, res)=> {
      try {
        const cnpj = req.params.cnpj
        const resposta = await modelFornecedor.CNPJfornecedor(cnpj)
        
        if (resposta.status === 200) {
          res.status(resposta.status).json({
              "fornecedores": resposta.dados,
              "erro": false
          })
        } else {
          res.status(resposta.status).json({
            "mensagem": resposta.mensagem,
            "erro": true})
        }
      } catch (error) {
        res.status(500).json({
          "mensagem": error.message,
          "erro": true
        })
      }
    },

     //DELETA
    deletaFornecedor: async (req, res)=> {
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