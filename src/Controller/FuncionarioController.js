import Funcionario from "../model/FuncionarioModel";
import { newFunc } from "../services/ValidacaoFunc";


const FuncionarioController = {
    
    showFuncionario : async (req, res)=> {
        const modelFuncionario = new Funcionario()
        const showAllFunc = await modelFuncionario.showFunc()
        
        res.json({
            "Funcionarios": showAllFunc,
            "erro": false
        })
    },
    
    showFuncionarioName: async (req, res)=> {
        const nome = req.params.nome
        const modelFuncionario = new Funcionario()
        const resultadoBusca = await modelFuncionario.showFuncName(nome)
        
        res.json({
            "funcionario": resultadoBusca,
            "erro": false
        })
    },
    
    showFuncionarioCPF: async (req, res)=> {
        const cpf = req.params.cpf
        const modelFuncionario = new Funcionario()
        const resultadoBusca = await modelFuncionario.showFuncCPF(cpf) 
        
        res.json({
            "Funcionario": resultadoBusca,
            "erro": false
        })
    },
    
    showFuncionarioEmail: async (req, res)=> {
        const email = req.params.email
        const modelFuncionario = new Funcionario()
        const resultadoBusca = await modelFuncionario.showFuncEmail(email)
        
        res.json({
            "Funcionario": resultadoBusca,
            "erro": false
        })
    },
    
    showFuncionarioID: async (req, res)=> {
        const id = req.params.id
        const modelFuncionario = new Funcionario()
        const resultadoBusca = await modelFuncionario.showFuncID(id)
        
        res.json({
            "Funcionario": resultadoBusca,
            "erro": false
        })
    },
    
    AddNewFuncionario: async (req, res)=> {
        const body = req.body
        const modelFuncionario = new Funcionario()
        try {
            const newFuncionario = newFunc(body.nome, body.email, body.cpf, 
                body.telefone, body.cargo, body.senha)
                await modelFuncionario.insertFunc(novoCliente)
                
                res.json(
                    {"msg": "Funcionario inserido com sucesso",
                    "funcionario": newFuncionario,
                    "erro": false}
                    )
                    
                } catch (error) {
                    res.json(
                        {"msg": error.message,
                        "erro": true}
                        )
                    }
                },
                
                deleteFunc: async (req, res)=> {
                    const modelFuncionario = new Funcionario()
                    const id = req.params.id
                    try { 
                        await modelFuncionario.deleteFunc(id)
                        
                        res.json(
                            {"msg": "Funcionario deletado com sucesso",
                            "erro": false}
                            )
                        } catch (error) {
                            res.json(
                                { "msg": error.message,
                                "erro": true}
                                )
                            }
                        },
                        
                        updateCliente: async (req, res)=> {
                            const modelFuncionario = new Funcionario()
                            const id = req.params.id
                            const body = req.body
                            try { 
                                const funcionarioAtualizado = criaCliente(body.nome, body.email, body.cpf,
                                    body.telefone, body.cargo, body.senha)
                                    await modelFuncionario.newFunc(id, funcionarioAtualizado)
                                    res.json(
                                        {"msg": "Funcionario atualizado com sucesso",
                                        "cliente": funcionarioAtualizado,
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
                                
                                
                                export default FuncionarioController