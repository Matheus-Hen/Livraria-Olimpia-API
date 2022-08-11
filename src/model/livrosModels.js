import dao from "../DAO/livrosDAO.js"


class Livro {

    cadastroLivro = async (titulo, autor, genero, formato, valor, idioma, nPaginas) =>{
        try {
            const livro = this.criaLivro(titulo, autor, genero, formato, valor, idioma, nPaginas)
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

    atualizaLivro = async (idLivro, titulo, autor, genero, formato, valor, idioma, nPaginas) => {
        try {
            const novoDado = this.criaLivro(titulo, autor, genero, formato, valor, idioma, nPaginas)
            const livroAtual = await this.buscaLivroId(idLivro)
            if (livroAtual) {
                const livroAtualizado = {
                    "titulo": novoDado.titulo || livroAtual.dados.titulo,
                    "autor": novoDado.autor || livroAtual.dados.autor,
                    "genero": novoDado.genero || livroAtual.dados.genero,
                    "formato": novoDado.formato || livroAtual.dados.formato,
                    "valor": novoDado.valor || livroAtual.dados.valor,
                    "idioma": novoDado.idioma || livroAtual.dados.idioma,
                    "numeroPaginas": novoDado.numeroPaginas || livroAtual.dados.numeroPaginas,
                    
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

    criaLivro = (titulo, autor, genero, formato, valor, idioma, numeroPaginas) => {

        return {
            "titulo": titulo,
            "autor": autor,
            "genero": genero,
            "formato": formato, 
            "valor": valor, 
            "idioma": idioma,
            "numeroPaginas": numeroPaginas
        }
    }
}

export default Livro