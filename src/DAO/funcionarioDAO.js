import db from "../database/connect.js"


const daoFuncionario = {

    insertFunc : (func)=> {
    const insertFunc = 
    `INSERT INTO FUNCIONARIOS (nome, email, cpf, telefone, cargo, senha)
    VALUES (?, ?, ?, ?, ?, ?)`
    return new Promise((resolve, reject)=> {
        db.run(insertFunc, func.nome, func.email, func.cpf,
            func.telefone, func.cargo, func.senha,
            (error)=>{
                if (error)
                    reject (error)
                else 
                    resolve (func)
            })
    })
    },

    showFunc : ()=> {
        const showFuncionarios = `
        SELECT * FROM FUNCIONARIOS
        `

        return new Promise((resolve, reject)=> {
            db.all(showFuncionarios, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    showFunc_Names : (nome)=> {
        const showFuncNames = `
        SELECT * FROM FUNCIONARIOS 
        WHERE nome = ?
        `

        return new Promise((resolve, reject)=> {
            db.get(showFuncNames, nome, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    showFunc_cpf : (cpf)=> {
        const showFuncCPF = `
        SELECT * FROM FUNCIONARIOS
        WHERE cpf = ?
        `

        return new Promise((resolve, reject)=> {
            db.get(showFuncCPF, cpf, (error, row)=> {
                if (error) 
                    reject(error)
                else 
                    resolve(row)
                
            })
        })
    },

    showFunc_email : (email)=> {
        const showFuncEmail = `
        SELECT * FROM FUNCIONARIOS
        WHERE email = ?
        `
        return new Promise((resolve, reject)=> {
            db.get(showFuncEmail, email, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    showFunc_ID : (id)=> {
        const showFuncID = `
        SELECT * FROM FUNCIONARIOS
        WHERE id = ?
        `
        return new Promise((resolve, reject)=> {
            db.get(showFuncID, id, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    deleteFunc : (id)=> {
    const deleteFuncionario = `
    DELETE FROM FUNCIONARIOS
    WHERE id = ?
    `
    return new Promise((resolve, reject)=> {
        db.run(deleteFuncionario, id, (error, row)=> {
            if(error)
                reject(error)
            else
                resolve(row)
        })
    })
    },

    updateFunc : (id, newFunc)=> {
        const updateFuncionario = `
        UPDATE FUNCIONARIOS
        SET nome = ?, email = ?, cpf = ?, telefone = ?, cep = ?, senha = ?
        WHERE id = ?
        `

        return new Promise((resolve, reject)=> {
            db.run(updateFuncionario, 
                newFunc.nome, newFunc.email, newFunc.cpf, 
                newFunc.telefone, newFunc.cep, newFunc.senha,
                id,
                (error)=>{
                    if (error)
                        reject(error)
                    else
                        resolve(newFunc)
                })
        })
    }
}

export default daoFuncionario