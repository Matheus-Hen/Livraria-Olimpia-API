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
};

export default Validacoes;
