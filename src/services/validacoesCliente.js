import seteDigitos, { verificaArroba } from "./filtroDeValidacao"

//valida senha
const validaSenha = (senha)=>{
    if(!seteDigitos(senha)){
        throw new Error("A senha precisa ter 7 ou mais caracteres")
    }
}

//valida email 
const validaEmail = (email)=>{
    if(!verificaArroba(email)){
        return email
    }else{
        throw new Error("Algo está faltando em seu email, digite corretamente.")
    }
}

//valida cpf
const ValidaCPF = (cpf) => {
    if(!filtroCPF, (cpf)){
        return cpf
    }else{
        throw new Error("Verifique o campo do cpf")
    }
}
