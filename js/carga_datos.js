$(function llamar_juegos(){
 //Pido los datos   
    var endpoint_juegos = "http://localhost:3000/juegos";
    
    $.ajax({

        type: "GET",
        url: endpoint_juegos,
        success: procesar_juegos

    });
    

});

function procesar_juegos(datos) {
    datos.forEach(crear_articulo);
    //Ejecuta la función una vez por cada elemento del array
    
}
function crear_articulo(juego) { 
    //creas articulo
    var $article = $("<article>");
    $article.addClass("col-lg-4 .col-md-5 col-sm-12 col-12 articulo");
    var $imagen = $("<img>").appendTo($article);
    var $nombre = $("<h2>").appendTo($article);
    var $plataforma = $("<small>").appendTo($article);
    var $info = $("<p>").appendTo($article);
    var $juegos = $("section#juegos");
    var $comprar = $("<button>").text("Comprar por $"+juego.precio).appendTo($article);
    $info.text(juego.descripcion);
    $comprar.attr("data-id",juego.id);
    $comprar.attr("class","btn btn-secondary");
   $imagen.attr("src","img/"+juego.coverimg);
    $nombre.text(juego.nombre);
    $juegos.append($article);
    
} 

    
