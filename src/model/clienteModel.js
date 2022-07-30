import dao from '../DAO/clienteDAO.js'
import db from '../database/connect.js'

class Cliente {
    constructor(id, nome, email, cpf, telefone, cep, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.telefone = telefone
        this.cep = cep
        this.senha = senha
    }

    inserirCliente = async (cliente) => {
    return await dao.insereCliente(cliente)
    }

    removerCliente = async (id) => {
    return await dao.removeCliente(id)
    }

    buscarClientesTodos = async () => {
    return await dao.pegaTodosClientes()
    }

    buscarClienteNome =  async (nome) => {
    return await dao.pegaClientePeloNome(nome)
    }   

    buscarClienteEmail = async (email) => {
    return await dao.pegaClientePeloEmail(email)
    }

    buscarClienteCPF = async (cpf) => {
    return await dao.pegaClientePeloCPF(cpf)
    }

    atualizarCliente = (id, novoCliennte) => {
    
    }
}

export default Cliente