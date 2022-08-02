import db from '../database/connect.js'
import dao from '../DAO/fornecedoresDAO.js'

class Fornecedores {
  constructor(id, nome, cnpj, produto, email, telefone, endereco, cep) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cnpj = cnpj;
    this.produto = produto;
    this.telefone = telefone;
    this.endereco = endereco;
    this.cep = cep;
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

  deletaFornecedor = async(id)=>{
    return await dao.deletaFornecedores(id)
  }

  atualizaFornecedor = async(id, newFornecedor)=>{
    const fornecedorVigente = await this.IDfornecedor(id)
    if(fornecedorVigente){
      const fornecedorAtualizado = {
      "id": newFornecedor.id || fornecedorVigente.id,
      "nome": newFornecedor.nome || fornecedorVigente.nome,
      'cnpj': newFornecedor.cnpj || fornecedorVigente.cnpj,
      'produto': newFornecedor.produto || fornecedorVigente.produto,
      'email': newFornecedor.email || fornecedorVigente.email,
      'telefone': newFornecedor.telefone || fornecedorVigente.telefone,
      'endereco': newFornecedor.endereco || fornecedorVigente.endereco,
      'cep': newFornecedor.cep || fornecedorVigente.cep
    }
    return await dao.atualizaFornecedor(id, fornecedorAtualizado)
    } else {
    throw new Error("Fornecedor não encontrado")
      }
  }
}

export default Fornecedores;
