import Livro from "../model/livrosModels.js";
import { criaLivro } from "../services/validacoesLivro.js";

const modelLivros = new Livro();

const livroController = {
  cadastroNovoLivro: async (req, res) => {
    const body = req.body;

    try {
      const novoLivro = await criaLivro(
        body.titulo,
        body.autor,
        body.genero,
        body.formato,
        body.valor,
        body.idioma,
        body.numeroPaginas
      );

      console.log(novoLivro)

      await modelLivros.cadastroLivro(novoLivro);

      res.json({
        msg: "Cadastro do livro realizado com sucesso",
        livro: novoLivro,
        erro: false,
      });

    } catch (error) {
      res.json({ 
        msg: error.message, 
        erro: true 
      });
    }
  },

  listarLivros: async (req, res) => {
    const todosLivros = await modelLivros.listaDeLivros();

    res.json({
      livros: todosLivros,
      erro: false,
    });
  },

  buscaLivro: async (req, res) => {
    const titulo = req.params.titulo;
    const resultadoBusca = await modelLivros.buscaLivro(titulo);

    res.json({
      titulo: resultadoBusca,
      erro: false,
    });
  },

  buscaLivroId: async (req, res) => {
    const idLivro = req.params.idLivro;
    const resultadoBusca = await modelLivros.buscaLivroId(idLivro);

    res.json({
      idLivro: resultadoBusca,
      erro: false,
    });
  },


  buscaGenero: async (req, res) => {
    const genero = req.params.cpf;
    const resultadoBusca = await modelLivros.buscaGenero(genero);

    res.json({
      genero: resultadoBusca,
      erro: false,
    });
  },

  buscaAutor: async (req, res) => {
    const autor = req.params.email;
    const resultadoBusca = await modelLivros.buscarAutorLivro(autor);

    res.json({
      autor: resultadoBusca,
      erro: false,
    });
  },

  buscaIdioma: async (req, res) => {
    const idioma = req.params.idioma;
    const resultadoBusca = await modelLivros.buscarIdiomaLivro(idioma);

    res.json({
      idioma: resultadoBusca,
      erro: false,
    });
  },

  removeLivro: async (req, res) => {
    const idLivro = req.params.idLivro;
    try {
      await modelLivros.removeLivro(idLivro);

      res.json({
        msg: "Livro deletado com sucesso",
        erro: false,
      });

    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  },

  atualizaLivro: async (req, res) => {
    const idLivro = req.params.idLivro;
    const body = req.body;
    try {
      const livroAtualizado = criaLivro(body.titulo,
        body.autor,
        body.genero,
        body.formato,
        body.valor,
        body.idioma,
        body.numeroPaginas)

      await modelLivros.atualizaLivro(idLivro, livroAtualizado);
      res.json({
        msg: "O livro foi atualizado com sucesso",
        livro: livroAtualizado,
        erro: false,
      });
    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  },

};

export default livroController;
