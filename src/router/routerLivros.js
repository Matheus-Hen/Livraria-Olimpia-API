import livroController from "../Controller/livrosController.js";

const routerLivros = (app)=> {

    app.get('/livros', livroController.listarLivros)
    app.get('/livro/titulo/:titulo', livroController.buscaLivro)
    app.get('/livro/idLivro/:idLivro', livroController.buscaLivroId)
    app.get('/livro/genero/:genero', livroController.buscaGenero)
    app.get('/livro/autor/:autor', livroController.buscaAutor)
    app.get('/livro/idioma/:idioma', livroController.buscaIdioma)

    app.post('/livro/cadastroLivro', livroController.cadastroNovoLivro)

    app.delete('/livro/idLivro/:idLivro', livroController.removeLivro)

    app.put('/livro/livro/:idLivro', livroController.atualizaLivro)
}

export default routerLivros 