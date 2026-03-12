function criarAdminPadrao(){

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const admin = {

usuario:"admin",

senha:"1234",

tipo:"admin"

};

let existeAdmin = usuarios.find(u=>u.usuario==="admin");

if(!existeAdmin){

usuarios.push(admin);

localStorage.setItem("usuarios",JSON.stringify(usuarios));

}

}

criarAdminPadrao();



function cadastrarUsuario(){

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuario = document.getElementById("usuario").value;

let senha = document.getElementById("senha").value;

let novoUsuario = {

usuario:usuario,

senha:senha,

tipo:"usuario"

};

usuarios.push(novoUsuario);

localStorage.setItem("usuarios",JSON.stringify(usuarios));

alert("Usuário cadastrado!");

}



function loginUsuario(){

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuario = document.getElementById("usuario").value;

let senha = document.getElementById("senha").value;

let encontrado = usuarios.find(

u=>u.usuario===usuario && u.senha===senha

);

if(encontrado){

localStorage.setItem("usuarioLogado",JSON.stringify(encontrado));

if(encontrado.tipo==="admin"){

window.location.href="admin.html";

}else{

window.location.href="index.html";

}

}else{

alert("Usuário ou senha incorretos");

}

}



function verificarAdmin(){

let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if(!usuarioLogado || usuarioLogado.tipo!=="admin"){

alert("Acesso negado");

window.location.href="index.html";

}

}



function logout(){

localStorage.removeItem("usuarioLogado");

window.location.href="login.html";

}
