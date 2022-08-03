import { quatorzeDigitos } from "./logicaFornecedores"
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

  const quatorzeDigitos = (cnpj)=>{
    if(!quatorzeDigitos(cnpj)){
        throw new Error("O CNPJ precisa ter 14 caracteres")
    }
}

export const validaCNPJ = (dado)=>{
  if(dado.cnpj)
      validaCNPJ(dado.cnpj)
}