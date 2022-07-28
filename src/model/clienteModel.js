import dao from '../DAO/clienteDAO.js'

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

    inserirCliente = () => {

    }

    removerCliente = () => {

    }

    buscarClientesTodos = async () => {
    return await dao.buscarClientesTodos()
    }

    buscarClienteNome =  async (nome) => {
    return await dao.buscarClienteNome(nome)
    }   

    buscarClienteEmail = (email) => {
    return await dao.buscarClienteEmail(email)
    }

    buscarClienteCPF = (cpf) => {
    return await dao.buscarClienteCPF(cpf)
    }

    atualizarCliente = () => {

    }
}

export default Cliente