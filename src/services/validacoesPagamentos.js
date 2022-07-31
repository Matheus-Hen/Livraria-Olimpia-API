export const criaPagamento = (status, formaDePagamento, data, valor, parcelamento, cliente)=> {
    
    return {
        "status": status,
        "formaDePagamento": formaDePagamento,
        "data": data,
        "valor": valor,
        "parcelamento": parcelamento,
        "cliente": cliente
    }
    }
