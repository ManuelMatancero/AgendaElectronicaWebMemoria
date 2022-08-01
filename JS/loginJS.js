

const registros=[
    new Registro('admin', 'admin', 'admin'),
    new Registro('maria', 'maria@gmail.com', '123456'),
    new Registro('perla', 'perla@gmail.com', '123456')
];

function cargar(){
    console.log(registros);
}

function ingresar(){
    let forma = document.forms['ingresarForm'];
    let nombre = forma['nombre'];
    let email = forma['email'];
    let pwd = forma['pwd'];
console.log(registros);
let encontrado = true;
    for(let i = 0; i< registros.length ; i++){
        if(email.value== registros[i].email && pwd.value == registros[i].password){
            window.open('home.html');
        }else{
            encontrado = false;
        }
    }
    if(encontrado==false){
        alert('El usuario o la contrasena son incorrectos');
    }
}

