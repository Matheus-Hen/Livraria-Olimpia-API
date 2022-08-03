import Cliente from "../model/clienteModel.js";
import { criaCliente } from "../services/validacoesCliente.js";

const modelCliente = new Cliente()

const clienteController = {
    
    buscarClientes : async (req, res)=> {
        try {
            const resposta = await modelCliente.buscarClientesTodos()
            
            if(resposta.status === 200) {
                res.status(resposta.status).json({
                    "clientes": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json(
                {"msg": error.message,
                "erro": true}
                )
        }
    },
    
    buscarClientePeloNome: async (req, res)=> {
        const nome = req.params.nome
        try { 
            const resposta = await modelCliente.buscarClienteNome(nome)
            
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "cliente": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json(
                {"msg": error.message,
                "erro": true}
                )
        }
    },
    
    buscarClientePeloCPF: async (req, res)=> {
        const cpf = req.params.cpf

        try {
            const resposta = await modelCliente.buscarClienteCPF(cpf) 
            
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "cliente": resposta.dados,
                    "erro": false
                })
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
    
    buscarClientePeloEmail: async (req, res)=> {
        const email = req.params.email

        try {
            const resposta = await modelCliente.buscarClienteEmail(email)
            
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "cliente": resposta.dados,
                    "erro": false
                })
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
    
    buscarClientePeloID: async (req, res)=> {
        const id = req.params.id

        try {
            const resposta = await modelCliente.buscarClienteId(id)
            
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "cliente": resposta.dados,
                    "erro": false
                })
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
    
    criarNovoCliente: async (req, res)=> {
        const body = req.body

        try {
            const novoCliente = criaCliente(body.nome, body.email, body.cpf, 
                body.telefone, body.cep, body.senha)
                const resposta = await modelCliente.inserirCliente(novoCliente)
                
                res.json(
                    {"msg": "Cliente inserido com sucesso",
                    "cliente": resposta.dados,
                    "erro": false}
                    )
                    
                } catch (error) {
                    res.status(500).json(
                        {"msg": error.message,
                        "erro": true}
                        )
                    }
                },
                
    deletaCliente: async (req, res)=> {
        const id = req.params.id

        try { 
            await modelCliente.removerCliente(id)
                        
            res.json(
                {"msg": "Cliente deletado com sucesso",
                 "erro": false}
                )
            } catch (error) {
                res.status(500).json(
                    { "msg": error.message,
                    "erro": true}
                     )
                }
            },
                        
    atualizaCliente: async (req, res)=> {
        const id = req.params.id
        const body = req.body
        
        try { 
            const clienteAtualizado = criaCliente(body.nome, body.email, body.cpf,
            body.telefone, body.senha, body.cep)
            await modelCliente.atualizarCliente(id, clienteAtualizado)
            res.json(
                {"msg": "Cliente atualizado com sucesso",
                 "cliente": clienteAtualizado,
                  "erro": false}
                )
            } catch (error) {
                res.status(500).json(
                     {"msg": error.message,
                      "erro": true}
                    )
                }
            }
        }
                                
                                
                                export default clienteController