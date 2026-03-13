function cadastrar(){

let usuario = document.getElementById("usuarioCadastro").value
let senha = document.getElementById("senhaCadastro").value

if(usuario === "" || senha === ""){
alert("Preencha todos os campos")
return
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let usuarioExistente = usuarios.find(u => u.usuario === usuario)

if(usuarioExistente){
alert("Usuário já existe")
return
}

usuarios.push({
usuario: usuario,
senha: senha
})

localStorage.setItem("usuarios", JSON.stringify(usuarios))

alert("Conta criada com sucesso!")

window.location.href = "login.html"

}



function login(){

let usuario = document.getElementById("usuarioLogin").value
let senha = document.getElementById("senhaLogin").value

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let usuarioValido = usuarios.find(u => u.usuario === usuario && u.senha === senha)

if(usuarioValido){

localStorage.setItem("usuarioLogado", usuario)

window.location.href = "perfil.html"

}else{

alert("Usuário ou senha incorretos")

}

}



function mostrarUsuario(){

let usuario = localStorage.getItem("usuarioLogado")

if(usuario){

document.getElementById("usuarioLogado").innerText = "Usuário logado: " + usuario

}else{

window.location.href = "login.html"

}

}



function logout(){

localStorage.removeItem("usuarioLogado")

window.location.href = "login.html"

}
