let estado = true;
let table = document.getElementById("persona"),rIndex;
let id=0;

const personas =[
    new Persona('Manuel', 'Sarante', 'sarante4@gmail.com'),
    new Persona('Carlos', 'Cabrera', 'cabrera@gmail.com'),
    new Persona('Jirayja', 'Sanin', 'cabrera@gmail.com')

];

function mostrarPersonas(){
    console.log(personas);
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<tr >
        <td>${persona._idPersona}</td>
        <td>${persona.nombre}</td>
        <td>${persona._apellido}</td>
        <td>${persona.email}</td>
        <td><button id="botonUpdate" onclick = "updateRow()" style="cursor: pointer" >Editar</button></td>
        <td><button id="botonDelete" onclick = "deleteRow()" style="cursor: pointer" >Borrar</button></td>
        <td><button id="botonEmail" onclick = "sendEmail()" style="cursor: pointer" >Email</button></td>
        </tr>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    
    if(estado){
        const forma = document.forms['forma'];
        const nombre = forma['nombre'];
        const apellido = forma['apellido'];
        const email = forma['email'];
        if(nombre.value != '' && apellido.value != '' && email.value != '' ){
            const persona1 = new Persona(nombre.value, apellido.value, email.value);
            personas.push(persona1);
            mostrarPersonas();
        }else{
            alert('Hay campos vacios');
        }
    }else{
            personas[rIndex -1].nombre = document.getElementById("nombre").value;
            personas[rIndex -1].apellido = document.getElementById("apellido").value;
            personas[rIndex -1].email = document.getElementById("email").value;
            mostrarPersonas();
            estado = true;
            stateForm();
    }
   
   
}

function cancelar(){
    const forma = document.forms['forma'];
    forma['nombre'].value ='';
    forma['apellido'].value = '';
    forma['email'].value = '';
    estado = true;
    stateForm();
    
}

   /* This method will delete a row */
   function deleteRow(){  
   let index = (rIndex -1);
    personas.splice(index,1);
    mostrarPersonas();

}

function updateRow(){        
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            console.log(rIndex);
            id = this.cells[0].innerHTML;
            console.log(id);
            document.getElementById("nombre").value = this.cells[1].innerHTML;
            document.getElementById("apellido").value = this.cells[2].innerHTML;
            document.getElementById("email").value = this.cells[3].innerHTML;
        };
    }
    estado = false;
    stateForm();

}

function stateForm(){
    if(estado){
        document.getElementById('stateForm').innerHTML = 'Agregar';
    }else{
        document.getElementById('stateForm').innerHTML = 'Editando';
    }
}

function sendEmail(){
    window.open('mailto:test@example.com?subject=subject&body=body');
}
