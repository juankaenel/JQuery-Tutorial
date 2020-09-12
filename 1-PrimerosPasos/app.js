$(document).ready(function(){
//$('h1').html('Nuevo titulo'); // document.querySelector('h1').innerHTML = 'Nuevo titulo con js puro';
//$('.titulo').html('Nuevo titulo desde clase'); //document.querySelector('.titulo').innerHTML = 'Nuevo titulo desde clase con js puro';
//$('#idh1').html('Nuevo titulo desde id'); //document.querySelector('#idh1').innerHTML = 'Nuevo titulo desde id con js puro';

//$('.container h1').html('cambio de nombres de todos los h1 de container');
//$('.container h1:first').html('cambio de nombres de todos los h1 de container'); //solo accede al primer h1 del container
//$('.container h1:last').html('cambio de nombres de todos los h1 de container'); //solo accede al primer h1 del container

//$('#idh1').addClass('text-danger');
/*$('#idh1').removeClass('display-4');


$('#contenido').append('<h1>Contenido al final</h1>'); //añade elemento al final
$('#contenido').prepend('<h1>Contenido al inicio</h1>'); //añade elemento al inicio

$('.color-azul').css('color', 'blue'); 
$('.color-azul').css({color:'azul',background:'salmon', padding:'20px'});

//$('.color-azul').remove(); //elimina el elemento
$('.color-azul').hide(); //hide oculta el elemento

$('img').attr('src', 'https://getbootstrap.com/docs/4.5/assets/img/bootstrap-icons.png');
$('img:last').attr('width', '500px');
*/

/*Segunda parte - Eventos*/
/*
let parrafo  = $('#resultado p') //manipulo el parrafo de resultado(id)

$('.btn-primary').click(function () { //cuando haga click en el boton...
    parrafo.addClass('display-4');
});

$('.btn-danger').click(function () { //cuando haga click en el boton...
    parrafo.removeClass('display-4');
});

$('.btn-secondary').click(function () { //agrega y quita clases
    parrafo.toggleClass('display-4');
});

//keyup
//Declarar variables reutilizables
var input = $("#nombre");
var contenido = $("#contenido");

//Evento keyup
input.keyup(function() {
  console.log(input.val()); //verificamos en consola
  contenido.html(input.val()); //agregamos en contenido

  //Podemos verificar si está vacio el input
  if (input.val() === "") {
    contenido.html("Estoy esperando...");
  }
  });


$('#formulario').submit(function (e) { 
    e.preventDefault();
    
    let nombre = $('#nombre').val(); //nos devuelve lo que escribio el usuario en el input
    console.log(nombre);

});



    let ocultar = $('#ocultar');
    let mostrar = $('#mostrar');
    let toggle = $('#toggle');
    let elemento = $('#elemento');

    ocultar.click(function () {
        elemento.hide(1000);
    });
    mostrar.click(function() {
        elemento.show(1000);
    });

    toggle.click(function() {
        elemento.toggle(1000);
    });
    */

    let resultado = $('#resultado');

    $('.btn-primary').click(function () {
        resultado.animate({ //parametros,velocidad y callback
            left:'20px',
            opacity:'0.5',
            height:'+=150px',
            width:'+=250',
        },3000,function() { //callback -> funcion que se ejecuta cuando termina la principal
        resultado.animate({
                right:'-20px',
                bottom:'20px',
                opacity:'1',
                height:'-=150px',
                width:'-=150px'
            },2000)
        });

    });
    
});



