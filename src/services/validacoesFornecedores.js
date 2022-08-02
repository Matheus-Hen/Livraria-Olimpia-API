export const criaFornecedor = (nome, cnpj, produto, email, telefone, endereco, cep)=> {
  
  return {
      "nome": nome,
      "cnpj": cnpj,
      "produto": produto,
      "email": email,
      "telefone": telefone,
      "endereco": endereco,
      "cep": cep
  }
  }