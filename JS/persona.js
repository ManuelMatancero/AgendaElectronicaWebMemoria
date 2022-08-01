class Persona{

    static contadorPersona = 0;
    constructor(nombre, apellido, email){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre= nombre;
        this._apellido=apellido;
        this._email= email;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email=email;
    }
}