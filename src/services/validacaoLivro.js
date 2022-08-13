import daoLivros from '../DAO/livrosDAO.js';

const LivrosValidacao = {
  _validaDeleteLivros: async (id, callback) => {
    const livro = await daoLivros.buscaLivroId(id);
    if (livro == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(id);
      return livro;
    }
  },
};

export default LivrosValidacao;
