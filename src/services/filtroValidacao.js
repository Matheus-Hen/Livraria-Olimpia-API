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

  // Com a multiplicação pelo posicionamento do caractere dos nove primeiros dígitos do CPF para calcular a variável

  // for (let i = 1; i <= 9; i++) {
  //   Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  //   Resto = (Soma * 10) % 11
  // }
  // if ((Resto == 10) || (Resto == 11))
  //   Resto = 0

  // if (Resto != parseInt(strCPF.substring(9, 10)))
  //   return false

  // Soma = 0

  // for (let i = 1; i <= 10; i++){}
  //   Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

  // Resto = (Soma * 10) % 11

  // if ((Resto == 10) || (Resto == 11))
  //   Resto = 0

  // if (Resto != parseInt(strCPF.substring(10, 11)))
  //   return false

  return true
}
