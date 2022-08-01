

function registrar(){ 
    const forma = document.forms['formaRegistro'];
    const nombre = forma['nombre'];
    const email = forma['email'];
    const pwd = forma['pwd'];
    const cpwd = forma['cpwd'];
    if(nombre.value != '' && email.value != '' && pwd.value != '' && cpwd.value != '' ){
        if(pwd.value != cpwd.value){
            alert('Las contraseñas no coinciden');
        }else{
            let user = new Registro(nombre.value, email.value, pwd.value);
            console.log(user);
            user.registrar();
            console.log(Registro.usuario);
            alert('Usuario Registrado');
            window.
            window.open('login.html');
        }
      
    }else{
        alert('Hay Campos Vacios');
    }
   


}