import db from "../database/connect.js";

const daoFornecedores = {

  //inserindo
  insereFornecedor : (fornecedor)=> {
    const INSERE_FORNECEDORES = `
    INSERT INTO FORNECEDORES (id, nome, cnpj, produto, email, telefone, endereco)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    return new Promise((resolve, reject)=> {
        db.run(INSERE_FORNECEDORES, fornecedor.id, fornecedor.nome, fornecedor.cnpj, fornecedor.produto, fornecedor.email, fornecedor.telefone, fornecedor.endereco, (error)=>{
                if (error)
                    reject (error)
                else 
                    resolve (fornecedor)
            })
    })
    },

  // ALL (SELECT) -------------------------------------------

  

//GET (DELETE) - -------------------------------------------------
  
  
//RUN (UPDATE)---------------------------------------------------
  
}

export default daoFornecedores