//____________________________________________________________________________________________________________________________________________
// ATRIBUTOS & CONTENIDO

// -------------------- INTRODUCCION --------------------

/* 

FUNCION

jQuery se usa para seleccionar elementos 'query' de HTML y realizar ACCIONES sobre ellos

___

SINTAXIS BASICA

    - $            :   para acceder a jQuery
    - (seleccion)  :   para encontrar elementos HTML
    - funcion()    :   para relizar las acciones 

___

EJEMPLOS

    $('p').hide()       :  esconde los elementos de tipo 'p'
    $('.demo').hide()   :  esconde los elementos de la clase 'demo'
    $('#demo').show()   :  muestra el elemento con id 'demo'


*/


// PARA INICIAR JQUERY
window.onload = function(){      // se ejecuta cuando toda la pagina se carga completamente
    // código jQuery
}

$(document).ready(function(){    // se ejecuta cuando se termina de leer el codigo HTML
    //código jQuery
})

// se puede simplificar en:

$(function(){
    //acá va el código de jQuery
})



$(function(){
    $('#start').html('Go!')   // igual a 'innerHTML'
})


// ----------------------- SELECTORES -----------------------


$('div.menu')    //  todos los 'div' de la clase 'menu'
$('p:first')     //  el primer elemento 'p'
$('h1, p')       //  todos los 'h1' y todos los 'p'
$('div p')       //  los 'p' dentro de 'div'
$('*')           //  todos los elementos


// ------------------ ATRIBUTOS Y CONTENIDO ------------------

/*

para seleccionar un atributo:           $('nombre').attr('atributo')
para eliminar un atributo:              $('nombre').removeAttr('atributo')

algunos ejemplos de atributos:
    - href     - src
    - id       - class
    - style    - border
    
    
para acceder a todo el contenido:       $('nombre').html(*)         esto devuelve el contenido tal cual está escrito en html
para acceder solo el texto:             $('nombre').text(*)
para acceder al valor:                  $('nombre').val()           por ejemplo el valor de un input

    *puede incliur un parametro, para moidifcarlo


MAS INFO:
https://api.sololearn.com/DownloadFile?id=3119

*/


// -------------------- AGREGAR CONTENIDO --------------------

/*

estos metodos agregan contenido sin eliminar el original:

    append()     
    prepend()     
    after()
    before()

*/

$('#p1').append(' append')
$('#p2').prepend('prepend ')

$('#p1').before('<i>Before</i>')
$('#p2').after('<b>After</b>')


$(function(){
    var txt = $('<p></p>').text('Hi')   // se crea una variable de tipo '<p></p>' (párrafo de html) que contiene el texto 'Hi'
    $('#p2').after(txt)
})




//____________________________________________________________________________________________________________________________________________
// MANIPULAR CSS


// ----------------- AGREGAR Y ELIMINAR CLASES -----------------

$('#div1').addClass('blue')
$('#div1').removeClass('red')



$('#btn1').click(function(){
    $('#div2').toggleClass('red')  // toggle  :  si existe la elimina, sino la agrega
})



// -------------------- PROPIEDADES DE CSS --------------------

$('#div3').css('background-color', 'lightcoral')                    // 1 valor
$('#div4').css({'background-color':'yellowgreen', 'color':'blue'})  // varios valores
               //esta sintaxis se llama JSON


// ----------------------- DIMENSIONES -----------------------

$('#div5').css('background-color', 'red')
$('#div5').width(100)  // en px
$('#div5').height(100)  // en px


$(function() {
    var txt = "";
    txt += "width: " + $("#div6").width() + " ";
    txt += "height: " + $("#div6").height() + "<br/>";
    txt += "innerWidth: " + $("#div6").innerWidth() + "  ";
    txt += "innerHeight: " + $("#div6").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("#div6").outerWidth() + "  ";
    txt += "outerHeight: " + $("#div6").outerHeight();
      
    $("#div6").html(txt);
});


//____________________________________________________________________________________________________________________________________________
// MANIPULAR DOM

/*
Sobre el DOM:
"
    An ancestor is a parent, grandparent, great-grandparent, and so on.
    A descendant is a child, grandchild, great-grandchild, and so on.
    Siblings share the same parent.
"
*/

var e = $('#p01').parent()
e.css('border', '2px solid green')

// más metodos:  https://api.sololearn.com/DownloadFile?id=3044


var eq = $('div').eq(2)  
// selecciona un elemento de una seleccion multiple segun su index
// en este caso selecciona el 3° de todos los 'div'

$('a').eq(0).empty()   // vacía el primer link
$('a').eq(0).remove()  // elimina el primer link



//____________________________________________________________________________________________________________________________________________
// EVENTOS

// método usando Javascript puro:
var x = document.getElementById("demo");
x.onclick = function () {
    x.innerHTML = Date();
}

// usando jQuery
$("#demo").click(function() {
    $("#demo").html(Date());
});


/*
EVENTOS MÁS COMUNES

- Mouse Events:
click       occurs when an element is clicked.
dblclick    occurs when an element is double-clicked.
mouseenter  occurs when the mouse pointer is over (enters) the selected element.
mouseleave  occurs when the mouse pointer leaves the selected element.
mouseover   occurs when the mouse pointer is over the selected element.

- Keyboard Events:
keydown     occurs when a keyboard key is pressed down.
keyup       occurs when a keyboard key is released.

- Form Events:
submit      occurs when a form is submitted.
change      occurs when the value of an element has been changed.
focus       occurs when an element gets focus.
blur        occurs when an element loses focus.

- Document Events:
ready       occurs when the DOM has been loaded.
resize      occurs when the browser window changes size.
scroll      occurs when the user scrolls in the specified element.
*/

function getVal() {
    $("#msg").html($("#name").val());
}

$("#name").keyup(getVal);
$("#name").keydown(getVal);
// cuando se presione y cuando se suelte una tecla, se obtiene el texto del input

// en vez de escribir lo de ariba podemos abreviarlo en:
$('#name').on({
    'keyup': getVal, 
    'keydown': getVal
})

$('#name').off('click')
// se elimina el evento en 'click'


// ----------------------- OBJETO DE EVENTO -----------------------

/*
algunas funciones:

- pageX, pageY        the mouse position (X & Y coordinates) at the time the event occurred, relative to the top left of the page.
- type                the type of the event (e.g. "click").
- which               the button or key that was pressed.
- data                any data that was passed in when the event was bound.
- target              the DOM element that initiated the event.
- preventDefault()    prevent the default action of the event (e.g., following a link).
- stopPropagation()   Stop the event from bubbling up to other elements.
*/

$( "a" ).click(function(event) {
    alert(`X: ${event.pageX}\nY: ${event.pageY}`);      // posicion X e Y del mouse
    event.preventDefault();  // la accion predeterminada no se ejecuta 
});


$('div').trigger('click')  
// trigger realiza esa accion 
// en este caso los 'div' se clickean solos una vez


// ----------------------- TO-DO LIST -----------------------

$(function(){
    $('#add').on('click', function(){
        var val = $('#el').val()
        if (val!==''){
            var elem = $('<li style="list-style: none;"></li>').text(val)       // crea el elemento con el texto
            $(elem).prepend('<button class="rem">x</button>  ')                 // crea el boton para borrar el elemento
            $('#mylist').append(elem)                                           // agrega el elemento a la lista
            $('#el').val('')                                                    // vacía el input
            $('.rem').on('click', function(){
                $(this).parent().remove()
            })
        }
    })
})



//____________________________________________________________________________________________________________________________________________
// EFECTOS


$(function() {
    //  hide() / show() / toggle() 
    $("#hide-show").click(function() {
        $(this).children().toggle(500);  // tiempo en ms
    });

    // fadeIn() / fadeOut() / fadeToggle()
    $("#fade-in-out").click(function() {
        $(this).children().fadeToggle(500);
    });
    /* fadeTo()
    toma 2 parametros = tiempo (en ms) y opacidad (entre 1 y 0) */

    // slideUp() / slideDown() / slideToggle()
    $('#slide-up-down').click(function(){
        $(this).children().slideToggle(500);
    })
});



$('#DIV').on('click', function(){
    $('#DIV #div1').fadeToggle(500)
    $('#DIV #div2').toggle(500)
    $('#DIV #div3').slideToggle(500)
})


// --------------- animate() ---------------

$('#anim').click(function(){
    $(this).animate({paddingLeft :'150px', width:'-=190px'}, 1000) 
    $(this).off('click')
})

/*
al usar JSON {k1:v1, k2:v2} hay q usar camelCase:

    en vez de 'padding-left' usar: 'paddingLeft'

*/


// si hay varias animaciones se reproduce una después de la otra
var div = $("#div-");
div.click(function(){
    div.animate({opacity: 1});
    div.animate({height:'+=100px'}, 500);
    div.animate({height:'-=100px', top: '+=100px'}, 500);
    div.animate({width:'+=1000'}, 750);
    div.animate({width:'-=1000', left: '+=1000px'}, 750);
    div.animate({height:'+=100px', top: '-=100px'}, 500);
    div.animate({height:'-=100px'}, 500);
    div.animate({width:'+=1000', left: '-=1000px'}, 750);
    div.animate({width:'-=1000'}, 750);
    div.animate({opacity: 0.5});
})



/*  Remember, to manipulate the position of elements, 
    you need to set the CSS position property of the element to relative, fixed, or absolute.   
*/



// --------------- drop-down menu ---------------

$('#submenu').slideToggle(0)

$('#item').click(function(){
    $('#submenu').slideToggle(500)
})
