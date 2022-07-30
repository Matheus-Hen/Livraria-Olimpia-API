import db from "../database/connect.js";

const daoFornecedores = {

  //inserindo
  insereFornecedor : (fornecedor)=> {
    const INSERE_FORNECEDORES = `
    INSERT INTO FORNECEDORES (id, nome, cnpj, produto, email, telefone, endereco)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `
      return new Promise((resolve, reject)=> {
        db.run(INSERE_FORNECEDORES, fornecedor.id, fornecedor.nome,
        fornecedor.cnpj, fornecedor.produto, fornecedor.email,
        fornecedor.telefone, fornecedor.endereco, (error)=>{
            if (error)
              reject (error)
            else 
              resolve (fornecedor)
        })
      })
    },

  // ALL (SELECT) -------------------------------------------

  totalFornecedores: () => {
      const PEGA_TOTAL_FORNECEDORES = `
      SELECT * FROM FORNECEDORES
      `
    return new Promise((resolve, reject) =>{
      db.all(PEGA_TOTAL_FORNECEDORES, (error, row) =>{
        if(error)
          reject(error)
        else
          resolve(row)
      })
    })
  },
  
  //ALL ID
  IDfornecedores: (id)=>{
    const PEGA_ID_FORNECEDORES =`
    SELECT * FROM FORNECEDORES
    WHERE id = ?
    `
    return new Promise((resolve, reject)=>{
      db.all(PEGA_ID_FORNECEDORES, id, (error, row)=>{
        if(error)
          reject(error)
        else
          resolve(row)
      })
    })
  },

  //ALL PRODUTOS
  produtosFornecedores: (produtos)=>{
    const PEGA_PRODUTOS_FORNECEDORES =`
    SELECT * FROM FORNECEDORES
    WHERE produtos = ?
    `
    return new Promise((resolve, reject)=>{
      db.all(PEGA_PRODUTOS_FORNECEDORES, produtos, (error, row)=>{
        if(error)
          reject(error)
        else
          resolve(row)
      })
    })
  },

  //ALL ENDEREÇOS
  enderecosFornecedores: (enderecos)=>{
    const PEGA_ENDERECOS_FORNECEDORES =`
    SELECT * FROM FORNECEDORES
    WHERE produtos = ?
    `
    return new Promise((resolve, reject)=>{
      db.all(PEGA_ENDERECOS_FORNECEDORES, enderecos, (error, row)=>{
        if(error)
          reject(error)
        else
          resolve(row)
      })
    })
  },

//RUN (DELETE) - -------------------------------------------------
deletaFornecedores : (id)=>{
  const DELETA_FORNECEDORES = `
  DELETE FROM FORNECEDORES
  WHERE id = ?
  `
  return new Promise((resolve, reject)=>{
      db.run(DELETA_FORNECEDORES, id, (error, row)=>{
          if(error)
              reject(error)
          else
              resolve(row)
      })
  })
},
  
//RUN (UPDATE)---------------------------------------------------
atualizaFornecedores : (id, newFornecedor)=> {
  const ATT_FORNECEDORES = `
  UPDATE FORNECEDORES
  SET nome = ?, cnpj = ?, produto = ?, email = ?, telefone = ?, endereco = ?
  WHERE id = ?
  `

 return new Promise((resolve, reject)=> {
   db.run(ATT_FORNECEDORES, 
      newFornecedor.id, newFornecedor.nome, newFornecedor.cnpj, newFornecedor.produto, newFornecedor.email, newFornecedor.telefone, newFornecedor.endereco, id, (error)=>{
          if (error)
            reject(error)
          else
            resolve(newFornecedor)
     })
  })
}  

}

export default daoFornecedores