import livroController from "../Controller/livrosController.js";

const routerLivros = (app)=> {

    app.get('/livros', livroController.listarLivros)
    app.get('/livro/titulo/:titulo', livroController.buscarTituloLivro)
    app.get('/livro/genero/:genero', livroController.buscarGeneroLivro)
    app.get('/livro/autor/:autor', livroController.buscarAutorLivro)
    app.get('/livro/idioma/:idioma', livroController.buscarIdiomaLivro)
    app.post('/livro/cadastroLivro/:cadastroLivro', livroController.cadastrarLivro)
    app.delete('/livro/removerLivro/:removerLivro', livroController.removerLivro)
    //app.put - atualizar valor (?)
    //app.patch - verificar no estoque (?)
}

export default routerLivros;