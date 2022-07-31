import livroController from "../Controller/livrosController.js";

const routerLivros = (app)=> {

    app.get('/livros', livroController.listarLivros)
    app.get('/livro/titulo/:titulo', livroController.buscaLivro)
    app.get('/livro/genero/:genero', livroController.buscaGenero)
    app.get('/livro/autor/:autor', livroController.buscaAutor)
    app.get('/livro/idioma/:idioma', livroController.buscaIdioma)
    app.post('/livro/cadastroLivro/:cadastroLivro', livroController.cadastroNovoLivro)
    app.delete('/livro/removerLivro/:removerLivro', livroController.deletaLivro)
    app.put('/livro/atualizarLivro/:atualizarLivro', livroController.atualizarValorLivro)
}

export default routerLivros