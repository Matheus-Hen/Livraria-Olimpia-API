import Cliente from "../model/clienteModel.js";
import { criaCliente } from "../services/validacoesCliente.js";


const clienteController = {
    
    buscarClientes : async (req, res)=> {
        const modelCliente = new Cliente()
        const todosClientes = await modelCliente.buscarClientesTodos()

        res.json({
            "clientes": todosClientes,
            "erro": false
        })
    },

    buscarClientePeloNome: async (req, res)=> {
        const nome = req.params.nome
        const modelCliente = new Cliente()
        const resultadoBusca = await modelCliente.buscarClienteNome(nome)

        res.json({
            "cliente": resultadoBusca,
            "erro": false
        })
    },

    buscarClientePeloCPF: async (req, res)=> {
        const cpf = req.params.cpf
        const modelCliente = new Cliente()
        const resultadoBusca = await modelCliente.buscarClienteCPF(cpf) 

        res.json({
            "cliente": resultadoBusca,
            "erro": false
        })
    },

    buscarClientePeloEmail: async (req, res)=> {
        const email = req.params.email
        const modelCliente = new Cliente()
        const resultadoBusca = await modelCliente.buscarClienteEmail(email)

        res.json({
            "cliente": resultadoBusca,
            "erro": false
        })
    },

    buscarClientePeloID: async (req, res)=> {
        const id = req.params.id
        const modelCliente = new Cliente()
        const resultadoBusca = await modelCliente.buscarClienteId(id)

        res.json({
            "cliente": resultadoBusca,
            "erro": false
        })
    },

    criarNovoCliente: async (req, res)=> {
        const body = req.body
        try {
            const novoCliente = criaCliente(body.nome, body.email, body.cpf, 
                body.telefone, body.cep, body.senha)
            await modelClient.inserirCliente(novoCliente)

            res.json(
                {"msg": "Cliente inserido com sucesso",
                "cliente": novoCliente,
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

// TODO: Tratamento de erro com try/catch

export default clienteController