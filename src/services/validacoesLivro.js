export const criaLivro = (titulo, autor, genero, formato, valor, idioma, numeroPaginas) => {

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