import dao from '../DAO/funcionarioDAO.js'

class Funcionario {

    insertFunc = async (nome, email, cpf, 
        telefone, cargo, senha) => {
        try {
            const funcionario = this.newFunc(nome, email, cpf, telefone, cargo, senha)
            if (funcionario == false) throw error
            const data = await dao.insertFunc(funcionario)
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

    updateFunc = async (id, nome, email, cpf, telefone, cargo, senha) => {
        try {
            const newFunc = this.newFunc(nome, email, cpf, telefone, cargo, senha)
            const AtualFunc = await this.showFuncID(id)
            if (AtualFunc) {
                const atualizaFunc = {
                    "nome": newFunc.nome || AtualFunc.dados.nome,
                    "email": newFunc.email || AtualFunc.dados.email,
                    "cpf": newFunc.cpf || AtualFunc.dados.cpf,
                    "telefone": newFunc.telefone || AtualFunc.dados.telefone,
                    "cargo": newFunc.cargo || AtualFunc.dados.cargo,
                    "senha": newFunc.senha || AtualFunc.dados.senha
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

    newFunc = (nome, email, cpf, telefone, cargo, senha)=> {
    
        return {
            "nome": nome,
            "email": email,
            "cpf": cpf,
            "telefone": telefone,
            "cargo": cargo,
            "senha": senha
        }
        }
}

export default Funcionario