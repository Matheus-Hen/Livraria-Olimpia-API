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
        try {
            const data = await dao.cadastrarLivro(livro)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    listaDeLivros = async () => {
        try {
            const data = await dao.listarLivros()
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }
    
    buscaLivro =  async (titulo) =>{
        try {
            const data = await dao.buscaLivro(titulo)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Livro de título ${titulo} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }
    
    buscaLivroId =  async (idLivro) =>{
        try {
            const data = await dao.buscaLivroId(idLivro)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Livro de ID ${idLivro} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }

    buscaGenero =  async (genero) =>{
        try {
            const data = await dao.buscaGenero(genero)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Livro de genero ${genero} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }

    buscaAutor =  async (autor) =>{
        try {
            const data = await dao.buscaAutor(autor)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Livros de autor(a) ${autor} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }

    buscaIdioma =  async (idioma) =>{
        try {
            const data = await dao.buscaIdioma(idioma)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Livro de idioma ${idioma} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }

    /*buscaEditora =  async (idioma) =>{
        return await dao.buscarEditora(idioma)
        // Adicionar um tratamento de erro para idioma não encontrado.
        // Adicionar um tratamento para buscar por parte (% da busca) do texto e ignorar letras maísculas e minúsculas.
    }*/

    removeLivro = async (idLivro) =>{
        try {
            const data = await dao.removeLivro(idLivro)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Livro de ID ${idLivro} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }

    atualizaLivro = async (idLivro, novoDado) => {
        try {
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
                const data = await dao.atualizaLivro(idLivro, livroAtualizado)
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                throw new Error("O livro não foi encontrado")
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }

    }

}

export default Livro