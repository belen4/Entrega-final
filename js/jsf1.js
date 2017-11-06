var contraseña1 = document.getElementsById('c1').value;
var contraseña2 = document.getElementsById('c2').value;
function validar(){
    if(contraseña1 != contraseña2){
     alert('no son iguales');
    }
}
var correo = document.getElementById('correo').value;
var nombre = document.getElementsByName('nombre').value;
var apellido = document.getElementById('apellido').value;

 function(){
        var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');
        var validarNombre = function(){
            if(formulario.getElementById('nombre').value == 0){
                alert('completa el campo nombre');
            }
        }
        var validar = function(){
            validarNombre();
        }
        formulario.addEventListener("submit", validar);
    }