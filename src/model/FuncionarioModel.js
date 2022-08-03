import dao from '../DAO/funcionarioDAO.js'
import db from '../database/connect.js'

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
        try {
            const data = await dao.insertFunc(cliente)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    deleteFunc = async (id) => {
        try {
            const data = await dao.deleteFunc(id)
                return {
                    "dados": data,
                    "status": 200
                }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    showFunc = async () => {
        try {
            const data = await dao.showFunc()
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    showFuncID = async (id) => {
        try {
            const data = await dao.showFunc_ID(id)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Funcionário com ID ${id} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
        }
    }
}

    showFuncName =  async (nome) => {
    try {
        const data = await dao.showFunc_Names(nome)
        if (data) {
            return {
                "dados": data,
                "status": 200
            }
        } else {
            return {
                "mensagem": `Funcionário com nome ${nome} não encontrado`,
                "status": 404
            }
        }
    } catch (error) {
        return {
            "mensagem": error.message,
            "status": 400
        }
    }
}   

    showFuncEmail = async (email) => {
    try {
        const data = await dao.showFunc_email(email)
        if (data) {
            return {
                "dados": data,
                "status": 200
            }
        } else {
            return {
                "mensagem": `Funcionário com email ${email} não encontrado`,
                "status": 404
            }
        }
    } catch (error) {
        return {
            "mensagem": error.message,
            "status": 400
        }
    }
    }

    showFuncCPF = async (cpf) => {
        try {
        const data = await dao.showFunc_cpf(cpf)
        if (data) {
            return {
                "dados": data,
                "status": 200
            }
        } else {
            return {
                "mensagem": `Funcionário com cpf ${cpf} não encontrado`,
                "status": 404
            }
        }
    } catch (error) {
        return {
            "mensagem": error.message,
            "status": 400
        }
    }
    }

    updateFunc = async (id, newFunc) => {
        try {
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
                const data = await dao.updateFunc(id, atualizaFunc)
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                throw new Error("Funcionario não encontrado")
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }
}

export default Funcionario