function criarAdmin(){

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const admin = {

usuario:"admin",
senha:"1234",
tipo:"admin"

};

if(!usuarios.find(u=>u.usuario==="admin")){

usuarios.push(admin);
localStorage.setItem("usuarios",JSON.stringify(usuarios));

}

}

criarAdmin();
