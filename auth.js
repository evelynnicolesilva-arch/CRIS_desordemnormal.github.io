function cadastrar(){

let usuario = document.getElementById("usuarioCadastro").value
let senha = document.getElementById("senhaCadastro").value
let msg = document.getElementById("msgCadastro")

if(!usuario || !senha){

msg.innerText = "Preencha todos os campos"
return

}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let existe = usuarios.find(u => u.usuario === usuario)

if(existe){

msg.innerText = "Usuário já existe"
return

}

usuarios.push({

usuario:usuario,
senha:senha

})

localStorage.setItem("usuarios",JSON.stringify(usuarios))

msg.innerText = "Conta criada com sucesso!"

}
