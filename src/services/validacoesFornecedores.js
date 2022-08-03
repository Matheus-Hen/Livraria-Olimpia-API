export const validaCNPJ = (cnpj)=>{
  if(cnpj){
      if(cnpj.length < 14){
          throw new Error("O CNPJ precisa ter 14 caracteres")
      }          
  }else{
      throw new Error("Insira um CNPJ com 14 caracteres")
  }

}

export const criaFornecedor = (nome, cnpj, produto, email, telefone, endereco, cep)=> {
  validaCNPJ(cnpj)
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