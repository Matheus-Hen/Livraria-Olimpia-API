export const criaPagamento = (cliente, formaDePagamento, valor, parcelamento, status, data)=> {
    
    return {
        "cliente": cliente,
        "formaDePagamento": formaDePagamento,
        "valor": valor,
        "parcelamento": parcelamento,
        "status": status,
        "data": data
    }
    }
