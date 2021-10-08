 //-------------------------------------------------------------
document.write("<br/>")  // CONDICION EN UNA VARIABLE
//-------------------------------------------------------------

age = 23

var isAdult = (age > 18) ? 'Old enough' : 'Too young'
/* funciona como un           true           false
   condicional if */

document.write(isAdult)

//-------------------------------------------------------------
document.write("<br/>")  // SWITCH
//-------------------------------------------------------------

var day = 2

switch (day) {
  case 1:
    document.write("Monday")
    break

  case 2:
    document.write("Tuesday")
    break

  case 3:
    document.write("Wednesday")
    break

  default:
    document.write("Another day")
}

//-------------------------------------------------------------
document.write("<br/>")  // FOR
//-------------------------------------------------------------


for (i=1; i<=5; i++) {
    document.write(i + "<br />")
}


document.write("<br/>")


// el primer argumento puede ser omitido si la variable ya se ha declarado
var i = 1;
for (; i<=5; i++) {
   document.write(i + "<br />")
}


document.write("<br/>")


// se puede agregar otro argumento
for (i=1, text=""; i<=5; i++) {
    text = i;
    document.write(i + text + "<br />");
}


//-------------------------------------------------------------
document.write("<br/>")  // BREAK Y CONTINUE
//-------------------------------------------------------------


for (i = 0; i <= 10; i++) {
    if (i == 5) {
      break; 
    }
    document.write(i + "<br />");
}
// 'break' finaliza en bucle


document.write("<br/>")


for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  document.write(i + "<br />");
}
// 'continue' solo finaliza la vuelta actual pero continua el bucle


//-------------------------------------------------------------
//  MENSAJES DE ALERTA
//-------------------------------------------------------------

/*
ALERT
- solo muestra el mensaje y un boton de [OK]


    alert('Hello\nHow are you?');



PROMPT
- muestra un mensaje y un espacio para recibir un input
- el segundo parametro muestra un valor por defecto en el input


    var user = prompt('Please enter your name', 'Your name here');



CONFIRM BOX
- muestra un mensaje y dos botones [OK] [Cancel]
- se programan 2 opciones, una para cada boton


    var result = confirm("Do you really want to leave this page?");
    if (result == true) {
    alert("Thanks for visiting");
    }
    else {
    alert("Thanks for staying with us");
    }



*/

//-------------------------------------------------------------
document.write("<br/>")  // OBJETOS
//-------------------------------------------------------------

var p = {
    name: "John", age: 31, 
    favColor: "green", height: 183
}


/* 
se puede acceder a la propiedad de un pbjeto de 2 maneras:

    objectName.propertyName

    objectName['propertyName']

*/


// crear la clase
function person(name, age, color) {
    this.name = name
    this.age = age
    this.favColor = color
}

// crear nuevos objetos
var p1 = new person("John", 42, "green")
var p2 = new person("Amy", 21, "red")

document.write(p1.age + "<br>")
document.write(p2.name + "<br>")


// tambien se pueden insanciar obetos directamente:
var John = {
    name: "John",
    age: 25
}
  var James = {
    name: "James",
    age: 21
}

// se puede agregar un método en un objeto que sea una función
function animal(name) {
    this.name = name;
    this.changeType = function (type) {
        this.name = type;
    }
}

var p = new animal('cat');
p.changeType('dog');

document.write(p.name);
// ahora p.name es igual a "dog"

// la funcion también puede estar fuera del objeto
function person(name, age) {
    this.name= name
    this.age = age
    this.yearOfBirth = bornYear; // (se llama a una funcion externa)
}
function bornYear() {
    return 2016 - this.age
}

/* 

'this' hace referencia al objeto
al igual que 'self' en Python

las funciones dentro de un objeto se llaman 'métodos'

*/

//-------------------------------------------------------------
document.write("<br/>")  // LISTAS (ARRAYS)
//-------------------------------------------------------------

// se puede declarar de dos formas
var courses = new Array("HTML", "CSS", "JS")
var courses = ["HTML", "CSS", "Js"]; 

// para agregar o modificar elementos
courses[3] = 'php'

document.write(courses)

//

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];

// concatenar
var courses = c1.concat(c2);

document.write(courses)

//
document.write("<br/>")
//

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);

//-------------------------------------------------------------
document.write("<br/>")  // MATEMATICAS
//-------------------------------------------------------------


document.write("<br> https://api.sololearn.com/DownloadFile?id=2767 <br>")
document.write(     "https://api.sololearn.com/DownloadFile?id=2769 <br>")


//-------------------------------------------------------------
document.write("<br/>")  // TIEMPO
//-------------------------------------------------------------

/*
function myAlert() {
  alert("Hi");
}
setInterval(myAlert, 10000);
*/

//cada 10 segundos (10000ms) se reproduce la accion


//

var d = new Date();
//esto almacena la fecha actual

document.write(d)

/*tambien se puede elegir una fecha:

  FORMATOS DE FECHA:

  new Date(milliseconds)
  new Date(dateString)
  new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);


document.write('<br><br>' + d1 + '<br>' + d2 + '<br>' + d3 + '<br>')

document.write('<br> Obtener solo una parte de la fecha: https://api.sololearn.com/DownloadFile?id=2772')


/* 

CRONOMETRO:

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

*/

