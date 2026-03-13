function cadastrar(){

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let usuario = document.getElementById("cadUser").value
let senha = document.getElementById("cadSenha").value

let existe = usuarios.find(u => u.usuario === usuario)

if(existe){

alert("Usuário já existe")
return

}

usuarios.push({

usuario:usuario,
senha:senha

})

localStorage.setItem("usuarios",JSON.stringify(usuarios))

alert("Cadastro realizado")

window.location.href="login.html"

}



function login(){

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let usuario = document.getElementById("loginUser").value
let senha = document.getElementById("loginSenha").value

let encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha)

if(encontrado){

localStorage.setItem("usuarioLogado",usuario)

window.location.href="perfil.html"

}else{

alert("Login inválido")

}

}



function mostrarUsuario(){

let usuario = localStorage.getItem("usuarioLogado")

if(usuario){

document.getElementById("nomeUsuario").innerText = "Usuário: "+usuario

}

}



function logout(){

localStorage.removeItem("usuarioLogado")

window.location.href="login.html"

}
