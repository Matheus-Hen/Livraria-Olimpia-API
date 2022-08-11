// filtra a senha que deve possuir 7 caracteres
export const seteDigitos = (senha) => {
  return senha?.length >= 7
}
//filtro se possui o @ no email
export const verificaArroba = (email) => {
  return email?.includes("@")
}

//filtro de cpf
export const validaCPF = (cpf) => {
  var Soma = 0
  var Resto

  var strCPF = String(cpf).replace(/[^\d]/g, '')

  // limpando o parâmetro cpf removendo caracteres
  console.log(strCPF, strCPF.length);
  if (strCPF.length !== 11) return false;

  // verificando se o parâmetro srtCPF não repete os números

  if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ].indexOf(strCPF) !== -1)
    return false

  return true
}


export const validarSenha = (senha)=>{
  if(!seteDigitos(senha)){
      throw new Error("A senha precisa ter 7 ou mais caracteres")
  }
}

export const validarEmail = (email)=>{
  if(verificaArroba(email)){
      return email
  }else{
      throw new Error("Algo está faltando em seu email, digite corretamente.")
  }
}

export const validarCPF = (cpf) => {
  if(validaCPF (cpf)){
      return cpf
  }else{
      throw new Error("Verifique o campo do cpf")
  }
}

