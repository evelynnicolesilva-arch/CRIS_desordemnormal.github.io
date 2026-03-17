function cadastrar(){

let usuario = document.getElementById("usuarioCadastro").value;
let senha = document.getElementById("senhaCadastro").value;

if(usuario === "" || senha === ""){
document.getElementById("msgCadastro").innerText = "Preencha todos os campos";
return;
}

localStorage.setItem(usuario, senha);

document.getElementById("msgCadastro").innerText = "Conta criada com sucesso!";
}

function login(){

let usuario = document.getElementById("usuarioLogin").value;
let senha = document.getElementById("senhaLogin").value;

let senhaSalva = localStorage.getItem(usuario);

if(senhaSalva === null){
document.getElementById("msgLogin").innerText = "Usuário não encontrado";
return;
}

if(senhaSalva === senha){
document.getElementById("msgLogin").innerText = "Login realizado!";
window.location.href = "index.html";
}else{
document.getElementById("msgLogin").innerText = "Senha incorreta";
}

}
