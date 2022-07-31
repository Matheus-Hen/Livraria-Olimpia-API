// import  bd from '../database/bd.js'

import dao from "../DAO/livrosDAO"


class Livro {
    constructor (idLivro, titulo, autor, genero, formato, valor, idioma, numeroPaginas){
        this.idLivro = idLivro      //idProduto PK
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
        return await dao.buscarTituloLivro(titulo)
        // Adicionar um tratamento de erro para título não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.

    }

    buscaGenero =  async (genero) =>{
        return await dao.buscarGeneroLivro(genero)
        // Adicionar um tratamento de erro para genero não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.
        // Pesquisar como colocar uma lista de opções existentes para a pessoa selecionar tipo: 1. Romance, 2. Terror, 3. Literatura....(mas pode ser que fique complexo.)
    }

    buscaAutor =  async (autor) =>{
        return await dao.buscarAutorLivro(autor)
        // Adicionar um tratamento de erro para autor não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.
        // Pesquisar como colocar uma lista de opções existentes para a pessoa selecionar tipo: 1. Romance, 2. Terror, 3. Literatura....(mas pode ser que fique complexo.)
    }

    buscaIdioma =  async (idioma) =>{
        return await dao.buscarIdiomaLivro(idioma)
        // Adicionar um tratamento de erro para idioma não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.
    }

    /*buscaEditora =  async (idioma) =>{
        return await dao.buscarEditora(idioma)
        // Adicionar um tratamento de erro para idioma não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.
    }*/

    removeLivro = async (idLivro) =>{
        return await dao.removerLivro(idLivro)
        // Adionar tratamento caso o livro já não exista na lista. 
    }

    atualizaValorLivro = async(idlivro, novoValor) => {
        const valorAtual = await this.buscaLivro(idlivro)

        if (valorAtual) {
            const valorAtualizado = {
                "valor": novoValor.valor || valorAtual.valor
            }
            return await dao. atualizaValorLivro(idLivro, valorAtualizado)
        } else {
            throw new Error("O Id do livro não foi encontrado")
        }

    }

}

export default Livro