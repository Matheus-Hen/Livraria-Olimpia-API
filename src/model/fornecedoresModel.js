import db from '../database/connect.js'
import dao from '../DAO/fornecedoresDAO.js'

class Fornecedores {
  constructor(id, nome, cnpj, produto, email, telefone, endereco) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cnpj = cnpj;
    this.produto = produto;
    this.telefone = telefone;
    this.endereco = endereco;
    this.cep = cep
  }

  insereFornecedores = async(fornecedor) => {
    return await dao.insereFornecedor(fornecedor)
  }

  totalDeFornecedores = async()=>{
    return await dao.totalFornecedores()
  }

  IDfornecedor = async(id)=>{
    return await dao.IDfornecedores(id)
  }

  CNPJfornecedor = async(cnpj)=>{
    return await dao.CNPJfornecedores(cnpj)
  }

  produtosFornecedor = async(produtos)=>{
    return await dao.produtosFornecedores(produtos)
  }

  CEPfornecedor = async(cep)=>{
    return await dao.CEPfornecedores(cep)
  }
}

export default Fornecedores;
