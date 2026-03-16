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
function login(){

let usuario = document.getElementById("usuarioLogin").value
let senha = document.getElementById("senhaLogin").value
let msg = document.getElementById("msgLogin")

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha)

if(encontrado){

localStorage.setItem("usuarioLogado",usuario)

msg.innerText = "Login realizado!"

}else{

msg.innerText = "Usuário ou senha incorretos"

}

}
