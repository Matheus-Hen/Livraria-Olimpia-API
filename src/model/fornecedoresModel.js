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
    try {
      const data = await dao.insereFornecedor(fornecedor)
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

  totalDeFornecedores = async()=>{
    try {
      const data = await dao.totalFornecedores()
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

  IDfornecedor = async(id)=>{
    try {
      const data = await dao.IDfornecedores(id)
      if (data) {
        return {
          "dados": data,
          "status": 200
        }
      } else {
        return {
          "mensagem": `Fornecedor com ID ${id} não encontrado`,
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

  CNPJfornecedor = async(cnpj)=>{
    try {
      const data = await dao.CNPJfornecedores(cnpj)
      if (data) {
        return {
          "dados": data,
          "status": 200
        }
      } else {
        return {
          "mensagem": `Fornecedor com CNPJ ${cnpj} não encontrado`,
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

  produtosFornecedor = async(produtos)=>{
    try {
      const data = await dao.produtosFornecedores(produtos)
      if (data) {
        return {
          "dados": data,
          "status": 200
        }
      } else {
        return {
          "mensagem": `Produtos do fornecedor ${produto} não encontrados`,
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

  CEPfornecedor = async(cep)=>{
    try {
      const data = await dao.CEPfornecedores(cep)
      if (data) {
        return {
          "dados": data,
          "status": 200
        }
      } else {
        return {
          "mensagem": `Fornecedor com CEP ${cep} não encontrado`,
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

  deletaFornecedor = async(id)=>{
    try {
      const data = await dao.deletaFornecedores(id)
      if (data) {
        return {
          "dados": data,
          "status": 200
        }
      } else {
        return {
          "mensagem": `Fornecedor com ID ${id} não encontrado`,
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

  atualizaFornecedor = async(id, newFornecedor)=>{
    try { 
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
      const data = await dao.atualizaFornecedor(id, fornecedorAtualizado)
      return {
        "dados": data,
        "status": 200
      }
      } else {
      throw new Error("Fornecedor não encontrado")
        }
    } catch (error) {
      return {
        "mensagem": error.message,
        "status": 400
      }
    }
  }
}

export default Fornecedores;
