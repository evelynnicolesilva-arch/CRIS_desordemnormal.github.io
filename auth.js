// CADASTRAR USUÁRIO
function cadastrar(){

let usuario = document.getElementById("cadUser").value;
let senha = document.getElementById("cadSenha").value;

if(usuario === "" || senha === ""){
alert("Preencha todos os campos");
return;
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let existe = usuarios.find(u => u.usuario === usuario);

if(existe){
alert("Usuário já existe");
return;
}

usuarios.push({
usuario: usuario,
senha: senha
});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("Cadastro realizado com sucesso!");

window.location.href = "login.html";

}



// LOGIN
function login(){

let usuario = document.getElementById("loginUser").value;
let senha = document.getElementById("loginSenha").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

if(encontrado){

localStorage.setItem("usuarioLogado", usuario);

window.location.href = "perfil.html";

}else{

alert("Usuário ou senha incorretos");

}

}



// MOSTRAR USUÁRIO NO PERFIL
function mostrarUsuario(){

let usuario = localStorage.getItem("usuarioLogado");

if(usuario){
document.getElementById("nomeUsuario").innerText = "Usuário: " + usuario;
}

}



// LOGOUT
function logout(){

localStorage.removeItem("usuarioLogado");

window.location.href = "login.html";

}
