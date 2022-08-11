import { seteDigitos, verificaArroba, validaCPF } from "./filtroValidacao.js"

export const validarSenha = (senha)=>{
    if(!seteDigitos(senha)){
        throw new Error("A senha precisa ter 7 ou mais caracteres")
    }
}

export const validarEmail = (email)=>{
    if(verificaArroba(email)){
        return email
    }else{
        throw new Error("Algo está faltando em seu email, digite corretamente.")
    }
}

export const validarCPF = (cpf) => {
    if(validaCPF (cpf)){
        return cpf
    }else{
        throw new Error("Verifique o campo do cpf")
    }
}

