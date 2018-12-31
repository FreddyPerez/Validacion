var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];

var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

Window.onload = iniciar; 




function Validar_Todo(){


if(validarNombre() && validarApellido() && validarCedula() && validarTelefono() && validarTarjeta() && validarFecha() && validarCheck() )
{
    return true;
} else return false;

}

function iniciar() {
    document.getElementById("Enviar").addEventListener('click',validar,false);
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        alert ("El campo no puede ser vacio");  
        return false;
    }

  else 


  if(String(elemento.value).length <= 3)
{

    alert ("debe digitar mas de tres caracteres");  
    return false;

}


    return true;
}

function validarApellido() {
    var elemento = document.getElementById("apellido");
    if (elemento.value == "") {
        alert ("El campo no puede ser vacio");  
        return false;
    }
    return true;
}

function validarCedula() {
    var elemento = document.getElementById("cedula");
    if (isNan(elemento.value)) {
    alert("El campo cedula tiene que ser numerico");
    return false;
        
    }

return true;
}

function validarTelefono() {
   var elemento = document.getElementById("telefono");
   if (isNan(elemento.value)) {
       alert("El campo telefono tiene que ser numerico");
       return false;
       
   }
   return true;
}

function validarTarjeta() {
    var elemento = document.getElementById("tarjeta");
    if (isNan(elemento.value)) {
        alert("El campo tarjeta tiene que ser numerico");
        return false;
        
    }
    return true;
 }

function validarFecha() {
   var dia = document.getElementById("dia").value;
   var mes = document.getElementById("mes").value;
   var ano = document.getElementById("ano").value;

   var fecha = new Date(ano, mes, dia);
if (isNaN(fecha)){
   alert("Los campos de la fecha son incorrectos");
   return false;
}
return true;
}

function validarCheck() {
   var campoCheck = document.getElementById("mayor");
   if (!campoCheck.checked) {
       alert("Debes ser mayor de edad");
       return false
   }
   return true;
}

function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        {
            return true;
        }
    }else{
        e.preventDefault();
        return false;
    }
    
}

function error(elemento) {
elemento.className = "error";
elemento.focus();    
}
/*
function limpiarError(elemento) {
    elemento.className = "";
    
}*/
