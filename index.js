// Capturo elementos del DOM; declaro variables cons 
const display = document.querySelector('.display');
const buttonNum = document.getElementsByClassName('button');

//Creo otra cons para convertir el HTMLcolection a Array
const buttonNumArray = Array.from(buttonNum);

//Iteramos por nuestro array de botones
buttonNumArray.forEach( (button) => {

// a cada boton le agrego un listener
    button.addEventListener('click', () => {
        pinpad(button, display);
    })
});


// Agregando eventos a los botones
// declaro funciones
function pinpad(button, display) {
    switch (button.innerHTML) {
        case '❌':
            borrar(display);
            break;

        case '✅':
            validar(display);
            break;

        default:
            actualizar(display, button);
            break;

    }
}

function validar(display) { 

    var c=2345;
     if(document.getElementsByClassName('display').value == c)
     alert ('¿Cuanto efectivo desea?');
     else
     alert ('Contraseña incorrecta');

}

function actualizar(display, button){
   if(display.innerHTML == 0) {
    display.innerHTML = '';
   } 
   display.innerHTML = display.innerHTML + button.innerHTML;
}


function borrar(display) {
    display.innerHTML = '';
} 

//contraseña

 // creación de boton
const ojos = document.createElement('button'); 
ojos.type = 'button'; 
ojos.innerText = '👀'; 
//inserta dentro de la estructura DOM
document.body.appendChild(ojos); 
//agregar evento al boton del tipo click
ojos.addEventListener('click', function() {

    console.log(this);
})

//ocultar contraseña

function mostrarContrasena(){
    var tipo = document.getElementsByClassName("display");
    if(tipo.type == "text"){
        tipo.type = "password";
    //}else{
        //tipo.type = "password";
    }
}

//boton validar no dispo si menos de 4 caracteres

let input = document.querySelector("display");
//let buttonOK = document.querySelector("button");

//buttonOK.disabled = true; //boton deshabilitado por defecto

//input.addEventListener("change", activo);

//function activo() {
    //if (document.querySelector("display").value === '4') {
        //button.disabled = true; //button no disponible
    //} else {
        //button.disabled = false; //button disponible