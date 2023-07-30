function cadastro(){
    var email = (document.getElementById("email"))
    var usuario = (document. getElementById("usuario"))
    var senha = (document. getElementById("senha"))

    if( email.value == "alice.assis@gmail.com"){
        confirm("Email valido")
    }else{
        alert("Email errado")
    }
    if( usuario.value == "Alice Lima"){
        confirm("Usuário valido")
    }else{
        alert("Usuário errado")
    }
    if( senha.value == "1234"){
        confirm("Senha valida")
    }else{
        alert("senha invalida")
    }

}