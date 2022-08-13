import livroController from "../controller/livrosController.js";

const routerLivros = (app)=> {

    app.get('/livros', livroController.listarLivros)
    app.get('/livros/titulo/:titulo', livroController.buscaLivro)
    app.get('/livros/idLivro/:idLivro', livroController.buscaLivroId)
    app.get('/livros/genero/:genero', livroController.buscaGenero)
    app.get('/livros/autor/:autor', livroController.buscaAutor)
    app.get('/livros/idioma/:idioma', livroController.buscaIdioma)

    app.post('/livros', livroController.cadastroNovoLivro)

    app.delete('/livros/idLivro/:idLivro', livroController.removeLivro)

    app.put('/livros/idLivro/:idLivro', livroController.atualizaLivro)
}

export default routerLivros 