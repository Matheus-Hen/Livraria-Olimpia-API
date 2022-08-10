
export const criaEstoque = (idEstoque, produto, quantidade, fornecedor)=> {
    
    return {
        "idEstoque": idEstoque,
        "produto": produto,
        "quantidade": quantidade,
        "fornecedor": fornecedor,
    }
}

