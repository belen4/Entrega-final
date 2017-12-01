$(function inicio(){
$("#bton").on("click", validar); //dispara la funcion
})
  var $alerta = $("#alerta");
     var $div = $("<div>");
  

  function validarContra(){
 var contra1 = document.getElementById('c1').value;
var contra2 = document.getElementById('c2').value;
    if(contra1 != contra2){
   alertaRoja();
$div.text("Las contraseñas no son iguales, revisa!")
return false
    }
    else { 
        alert("son iguales");
        return true
}
  }




function alertaRoja(){
        $div.appendTo($alerta);
        $div.attr("class","alert alert-danger");
}


function validarEmail(event){
    var correo = document.getElementById('correo').value;
    console.log("entra")
    var users = 'http://localhost:3000/users'
     $.ajax({
                type: "GET",
                data: {email: correo},
                url: users,
                success: validar_email });

    if(validar_email ==false){
        return false
    }
    else{
 return true
    }
         
}



function validar_email (datos) {
        if (datos.length > 0)
        { //si hay datos
            alertaRoja();
$div.text("Ese email ya esta, revisa!");
              validarEmail = false;
              
      }
        else{ //si no hay
            validarEmail = true 
        }

            }
            

function validar(event){
 event.preventDefault();

if(validarContra || validar_email == false){
       $div.appendTo($alerta);
       alertaRoja();
       $div.text("No se pudo, intenta leer las sugerencias");
       event.preventDefault();}
else{  
       CreaUsuario();
       document.getElementById("alerta").innerHTML = '';
       $div.appendTo($alerta);
       $div.attr("class","alert alert-success");
       $div.text("Good job! Ya se ha creado su usuario");
}
}

function CreaUsuario(event){
var contra1 = document.getElementById('c1').value;
var correo = document.getElementById('correo').value;
var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var newSletter = document.getElementsByName("2").value;
var genero =  document.getElementsByName("1").value;
var contraO = contra1.toLowerCase();

var person = {
            'email': correo,
            'name': nombre,
            'apellido': apellido,
            'password': contraO,
           'sexo': genero,
    'newsletter': newSletter,
             'carrito':'{}'
        };


    var endpoint_usuarios = "http://localhost:3000/users";
    //envias los datos
    $.ajax({
        data:person,
        type: "POST",
        dataType:"json",
        url: endpoint_usuarios
    });
}
 
