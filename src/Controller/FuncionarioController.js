import Funcionario from "../model/FuncionarioModel.js";
import { newFunc } from "../services/ValidacaoFunc.js";

const modelFuncionario = new Funcionario()

const FuncionarioController = {
    
    showFuncionario : async (req, res)=> {
        try {
            const showAllFunc = await modelFuncionario.showFunc()

            res.status(showAllFunc.status).json({
                "funcionarios": showAllFunc.dados,
                "erro": false
            })
        } catch (error) {
            res.status(500).json(
                {"mensagem": error.message,
                "erro": true}
                )
        }
        
        
    },
    
    showFuncionarioName: async (req, res)=> {
        try {
            const nome = req.params.nome
            const resultadoBusca = await modelFuncionario.showFuncName(nome)
            
            res.status(resultadoBusca.status).json({
                "funcionario": resultadoBusca.dados,
                "erro": false
            })
        } catch (error) {
            res.status(500).json(
                {"mensagem": error.message,
                "erro": true}
            )
        }
    },
    
    showFuncionarioCPF: async (req, res)=> {
        try {
            const cpf = req.params.cpf
            const resultadoBusca = await modelFuncionario.showFuncCPF(cpf) 
            
            if (resultadoBusca.status === 200) {
                res.status(resultadoBusca.status).json({
                    "funcionario": resultadoBusca,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resultadoBusca.mensagem,
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
    
    showFuncionarioEmail: async (req, res)=> {
        try {
            const email = req.params.email
            const resultadoBusca = await modelFuncionario.showFuncEmail(email)

            if (resultadoBusca.status === 200) {
                res.status(resultadoBusca.status).json({
                    "funcionario": resultadoBusca,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resultadoBusca.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "funcionario": error.message,
                "erro": true
            })
        }
        
    },
    
    showFuncionarioID: async (req, res)=> {
        try {
            const id = req.params.id
            const resultadoBusca = await modelFuncionario.showFuncID(id)

            if (resultadoBusca.status === 200) {
                res.status(resultadoBusca.status).json({
                    "funcionario": resultadoBusca.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resultadoBusca.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "funcionario": error.message,
                "erro": false
            })
        }
    },
    
    AddNewFuncionario: async (req, res)=> {
        const body = req.body
        try {
            const newFuncionario = newFunc(body.nome, body.email, body.cpf, 
                body.telefone, body.cargo, body.senha)
                const resposta = await modelFuncionario.insertFunc(newFuncionario)
                
                res.status(200).json(
                    {"msg": "Funcionario inserido com sucesso",
                    "funcionario": resposta.dados,
                    "erro": false}
                    )
                    
                } catch (error) {
                    res.status(400).json(
                        {"msg": error.message,
                        "erro": true}
                        )
                    }
                },
                
    deleteFunc: async (req, res)=> {
        const id = req.params.id
            try { 
            await modelFuncionario.deleteFunc(id)
                        
            res.status(200).json(
                {"msg": "Funcionario deletado com sucesso",
                "erro": false}
                )
            } catch (error) {
            res.status(400).json(
                { "msg": error.message,
                "erro": true}
                )
            }
        },
                        
    updateFuncionario: async (req, res)=> {
        const id = req.params.id
        const body = req.body
            try { 
                const funcionarioAtualizado = newFunc(body.nome, body.email, body.cpf,
                body.telefone, body.cargo, body.senha)
                const resposta = await modelFuncionario.updateFunc(id, funcionarioAtualizado)
                res.status(200).json(
                    {"msg": "Funcionario atualizado com sucesso",
                    "cliente": resposta.dados,
                    "erro": false}
            )
            } catch (error) {
                res.status(400).json(
                    {"msg": error.message,
                    "erro": true}
            )
        }
    }
}
                                    
                                
export default FuncionarioController
