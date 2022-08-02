// import  bd from '../database/bd.js'

import dao from "../DAO/livrosDAO.js"


class Livro {
    constructor (idLivro, titulo, autor, genero, formato, valor, idioma, numeroPaginas){
        this.idLivro = idLivro 
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.formato = formato
        this.valor = valor
        this.idioma = idioma
        this.numeroPaginas = numeroPaginas
    }

    cadastroLivro = async (livro) =>{
        return await dao.cadastrarLivro(livro)
    }

    listaDeLivros = async () => {
        return await dao.listarLivros()
    }
    
    buscaLivro =  async (titulo) =>{
        return await dao.buscaLivro(titulo)
    }
    
    buscaLivroId =  async (idLivro) =>{
        return await dao.buscaLivroId(idLivro)
    }

    buscaGenero =  async (genero) =>{
        return await dao.buscaGenero(genero)
    }

    buscaAutor =  async (autor) =>{
        return await dao.buscaAutor(autor)
    }

    buscaIdioma =  async (idioma) =>{
        return await dao.buscaIdioma(idioma)
    }

    /*buscaEditora =  async (idioma) =>{
        return await dao.buscarEditora(idioma)
        // Adicionar um tratamento de erro para idioma não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.
    }*/

    removeLivro = async (idLivro) =>{
        return await dao.removeLivro(idLivro)
        // Adionar tratamento caso o livro já não exista na lista. 
    }

    atualizaLivro = async (idLivro, novoDado) => {
        const livroAtual = await this.buscaLivroId(idLivro)

        if (livroAtual) {
            const livroAtualizado = {
                "titulo": novoDado.titulo || livroAtual.titulo,
                "autor": novoDado.autor || livroAtual.autor,
                "genero": novoDado.genero || livroAtual.genero,
                "formato": novoDado.formato || livroAtual.formato,
                "valor": novoDado.valor || livroAtual.valor,
                "idioma": novoDado.idioma || livroAtual.idioma,
                "numeroPaginas": novoDado.numeroPaginas || livroAtual.numeroPaginas,
                
            }
            return await dao.atualizaLivro(idLivro, livroAtualizado)
        } else {
            throw new Error("O livro não foi encontrado")
        }

    }

}

export default Livro