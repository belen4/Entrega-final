 var lista_removida = document.getElementById("list");
    var lista_removida1 = document.getElementById("list1");
    var ingresar = document.getElementById("ingresar");
    var registrar = document.getElementById("registrar");

    function clic() {
      event.preventDefault();
      var btn = $('#botn');
      btn.on("click", validar);
    }

    var $alerta = $("#alerta1"),
        var $div = $("<div>"),

    function validar(event) {
      var correouser = document.getElementById('correo1');
      var passworduser = document.getElementById('password1');
      $.get('http://localhost:3000/users', { email: correouser.value, password: passworduser.value }, function (datos) {
       
        if (datos.length > 0) {
            //eliminas los hijos porque hay datos
          lista_removida1.removeChild(registrar);
          lista_removida.removeChild(ingresar);
          var $nombre = $("<a>").appendTo(lista_removida);
          $nombre.text(correouser.value);
           $div.appendTo($alerta);
$div.attr("class","alert alert-success");
$div.text("Se registro correctamente");
    //se guarda en el sessionStorange
          window.sessionStorage.setItem("usuario", JSON.stringify(datos[0]));
        }
        else {
       
           $div.appendTo($alerta);
$div.attr("class","alert alert-danger");
$div.text("Ese usuario no existe");

        }
      });
    }


    