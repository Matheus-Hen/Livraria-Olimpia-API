import { seteDigitos, verificaArroba, validaCPF } from "./filtroValidacao.js"

const validarSenha = (senha)=>{
    if(!seteDigitos(senha)){
        throw new Error("A senha precisa ter 7 ou mais caracteres")
    }
}

const validarEmail = (email)=>{
    if(verificaArroba(email)){
        return email
    }else{
        throw new Error("Algo está faltando em seu email, digite corretamente.")
    }
}

const validarCPF = (cpf) => {
    if(validaCPF (cpf)){
        return cpf
    }else{
        throw new Error("Verifique o campo do cpf")
    }
}

export const criaCliente = (nome, email, cpf, telefone, senha, cep)=> {
    validarEmail(email)
    validarSenha(senha)
    validarCPF(cpf)

    return {
        "nome": nome,
        "email": email,
        "cpf": cpf,
        "telefone": telefone,
        "senha": senha,
        "cep": cep
    }
    } 
