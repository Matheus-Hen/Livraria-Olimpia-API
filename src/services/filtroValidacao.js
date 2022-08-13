const Validacoes = {
  _validaCNPJ: (cnpj) => {
    if (cnpj) {
      if (cnpj.length < 14) {
        throw new Error('O CNPJ precisa ter 14 caracteres');
      }
    } else {
      throw new Error('Insira um CNPJ com 14 caracteres');
    }
    return cnpj;
  },

  _validaCPF: (cpf) => {
    var strCPF = String(cpf).replace(/[^\d]/g, '');
    if (cpf) {
      if (
        strCPF.length == 11 &&
        [
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
        ].indexOf(strCPF) == -1
      )
        return true;
    } else {
      throw new Error('Verifique o campo do cpf');
    }
    return true;
  },

  _validaSenha: (senha) => {
    if (senha.length >= 7) {
      return senha;
    } else {
      throw new Error('A senha precisa ter 7 ou mais caracteres');
    }
  },

  _validaEmail: (email) => {
    const carac = '@';
    if (email.includes(carac)) {
      return email;
    } else {
      throw new Error('Algo está faltando em seu email, digite corretamente.');
    }
  },
};

export default Validacoes;
