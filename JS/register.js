class Registro{

    static usuario;

    constructor(nombre, email, password){
        this._nombre = nombre;
        this._email= email;
        this._password = password;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email=email;
    }

    get password(){
        return this._password;
    }
    set password(password){
        this._password=password;
    }

    registrar(){
        Registro.usuario = new Registro(this._nombre, this._email, this._password);
    }

}
