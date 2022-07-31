import dao from '../DAO/funcionarioDAO.js'
import db from '../database/criar-e-popular.js'

class Funcionario {
    constructor(id, nome, email, cpf, telefone, cargo, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.telefone = telefone
        this.cargo = cargo
        this.senha = senha
    }

    insertFunc = async (cliente) => {
    return await dao.insertFunc(cliente)
    }

    deleteFunc = async (id) => {
    return await dao.deleteFunc(id)
    }

    showFunc = async () => {
    return await dao.showFunc()
    }

    showFuncID = async (id) => {
    return await dao.showFunc_ID(id)
    }

    showFuncName =  async (nome) => {
    return await dao.showFunc_Names(nome)
    }   

    showFuncEmail = async (email) => {
    return await dao.showFunc_email(email)
    }

    showFuncCPF = async (cpf) => {
    return await dao.showFunc_cpf(cpf)
    }

    updateFunc = async (id, newFunc) => {
    const AtualFunc = await this.showFuncID(id)
    if (AtualFunc) {
        const atualizaFunc = {
            "nome": newFunc.nome || AtualFunc.nome,
            "email": newFunc.email || AtualFunc.email,
            "cpf": newFunc.cpf || AtualFunc.cpf,
            "telefone": newFunc.telefone || AtualFunc.telefone,
            "cargo": newFunc.cargo || AtualFunc.cargo,
            "senha": newFunc.senha || AtualFunc.senha
        }
        return await dao.updateFunc(id, clienteAtualizado)
    } else {
        throw new Error("Funcionario não encontrado")
    }
    }
}

export default Funcionario