export const criaLivro = (idLivro, titulo, autor, genero, formato, valor, idioma, numeroPaginas) => {

    return {
        "idLivro": idLivro,
        "titulo": titulo,
        "autor": autor,
        "genero": genero,
        "formato": formato, 
        "valor": valor, 
        "idioma": idioma,
        "numeroPaginas": numeroPaginas
    }
}