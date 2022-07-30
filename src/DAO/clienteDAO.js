import db from '../database/connect.js'

const daoCliente = {

    insereCliente : (cliente)=> {
    const INSERE_CLIENTE = `
    INSERT INTO CLIENTES (nome, email, cpf, telefone, cep, senha)
    VALUES (?, ?, ?, ?, ?, ?)
    `
    return new Promise((resolve, reject)=> {
        db.run(INSERE_CLIENTE, cliente.nome, cliente.email, cliente.cpf,
            cliente.telefone, cliente.cep, cliente.senha,
            (error)=>{
                if (error)
                    reject (error)
                else 
                    resolve (cliente)
            })
    })
    },

    pegaTodosClientes : ()=> {
        const PEGA_CLIENTES_TODOS = `
        SELECT * FROM CLIENTES
        `

        return new Promise((resolve, reject)=> {
            db.all(PEGA_CLIENTES_TODOS, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaClientePeloNome : (nome)=> {
        const PEGA_CLIENTE_NOME = `
        SELECT * FROM CLIENTES 
        WHERE nome = ?
        `

        return new Promise((resolve, reject)=> {
            db.get(PEGA_CLIENTE_NOME, nome, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaClientePeloCPF : (cpf)=> {
        const PEGA_CLIENTE_CPF = `
        SELECT * FROM CLIENTES
        WHERE cpf = ?
        `

        return new Promise((resolve, reject)=> {
            db.get(PEGA_CLIENTE_CPF, cpf, (error, row)=> {
                if (error) 
                    reject(error)
                else 
                    resolve(row)
                
            })
        })
    },

    pegaClientePeloEmail : (email)=> {
        const PEGA_CLIENTE_EMAIL = `
        SELECT * FROM CLIENTES
        WHERE email = ?
        `
        return new Promise((resolve, reject)=> {
            db.get(PEGA_CLIENTE_EMAIL, email, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaClientePeloId : (id)=> {
        const PEGA_CLIENTE_ID = `
        SELECT * FROM CLIENTES
        WHERE id = ?
        `
        return new Promise((resolve, reject)=> {
            db.get(PEGA_CLIENTE_ID, id, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    removeCliente : (id)=> {
    const DELETA_CLIENTE = `
    DELETE FROM CLIENTES
    WHERE id = ?
    `
    return new Promise((resolve, reject)=> {
        db.run(DELETA_CLIENTE, id, (error, row)=> {
            if(error)
                reject(error)
            else
                resolve(row)
        })
    })
    },

    atualizarCliente : (id, novoCliente)=> {
        const ATUALIZA_CLIENTE = `
        UPDATE CLIENTES
        SET nome = ?, email = ?, cpf = ?, telefone = ?, cep = ?, senha = ?
        WHERE id = ?
        `

        return new Promise((resolve, reject)=> {
            db.run(ATUALIZA_CLIENTE, 
                novoCliente.nome, novoCliente.email, novoCliente.cpf, 
                novoCliente.telefone, novoCliente.cep, novoCliente.senha,
                id,
                (error)=>{
                    if (error)
                        reject(error)
                    else
                        resolve(novoCliente)
                })
        })
    }
}

export default daoCliente