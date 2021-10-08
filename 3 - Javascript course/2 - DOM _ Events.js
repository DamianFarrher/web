// DOM = Document Object Model

/* 
document.body.innerHTML = "Some text";
    esto accede desde los objeto padres a los hijos:
    document (padre de) body

    'innerHTML' es una propiedad y es para cambiar el contenido de un de un objeto


element.childNodes      returns an array of an element's child nodes.
element.firstChild      returns the first child node of an element.
element.lastChild       returns the last child node of an element.
element.hasChildNodes   returns true if an element has any child nodes, otherwise false.
element.nextSibling     returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode      returns the parent node of an element.

*/


function show() {
    alert("Hi there");
}


var boton = document.getElementById("demo");
boton.addEventListener("click", myFunction);

function myFunction() {
    alert(Math.random());
    btn.removeEventListener("click", myFunction);
}

/*---------------------*/

var pos = 0; 
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 10);

function move() {
    if(pos >= 150) {
        clearInterval(t);
    }
    else {
        pos += 1;
        box.style.left = pos+"px";
    }
}

/*----------------------------*/

var images = [ "img1.jfif", "img2.jfif", "img3.jfif" ];
var contador = 0;

console.log(contador)

function next() {
    var slider = document.getElementById("slider");
    contador++;
    if(contador >= images.length) {
        contador = 0;
    }
    slider.src = images[contador];
}

function prev() {
    var slider = document.getElementById("slider");
    contador--;
    if(contador < 0) {
        contador = images.length-1;
    }
    slider.src = images[contador];
}
