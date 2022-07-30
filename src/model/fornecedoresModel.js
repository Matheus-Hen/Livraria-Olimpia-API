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
  }
}

export default Fornecedores;
