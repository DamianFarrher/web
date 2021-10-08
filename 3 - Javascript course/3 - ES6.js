//-------------------------------VARIABLES-------------------------------

// Hay 3 formas de declarar variables:

var a = 10
const b = 'hello'
let c = true;

/* 
'var' tiene alcance global, los otros alcance mas cerrado: dentro de un loop o una funcion
'let' y 'const' tienen el mismo alcance, pero 'const' es inmutable (no se puede modificar)
*/

//-----------------------------CONCATENACION-----------------------------


let name = 'David'
let msg

msg = 'Welcome' + name
//Esta expresion puede reemplazarse con:
msg = `Welcome ${name}`
//Para usar esta funcion se deben colocar `` (no funciona con '' ni con "")

console.log(msg)


//-------------------------------BUCLE FOR-------------------------------

let array = [1,2,3]
for (let i=0; i<array.length; i++){
    console.log(i)
}

let obj = {a:1, b:2, c:3}
for (let i in obj){         // 'in' solo funciona correctamente en objetos, no en arrays
    console.log(i)
}

let list = ['x', 'y', 'z']
for(let i of list){         // Para recorrer arrays usar 'of'
    console.log(i)
}

for(let i of 'Hello'){      // 'of' sirve tambien para strings
    console.log(i)
}


//-------------------------------FUNCIONES-------------------------------

//En vez de:
function add(x,y){
    var sum = x+y
    console.log(sum)
}

//se puede simplificar en:
const addd = (x,y) => {
    let sum = x+y
    console.log(sum)
}

//-------------

//Esta nueva forma se puede usar para funciones cortas, de una sola linea, por ejemplo:
const greet = x => 'Welcome' + x  //reemplaza  a 'return'
const x = () => alert('hi')

//-------------

//otro ejemplo:
//  En vez de:
var arr1 = [2, 3, 7, 8]
arr1.forEach(function(el){
    console.log('arr1: ' + el*2)
})

//  se puede hacer:
const arr2 = [2, 3, 7, 8]
arr2.forEach(v => {
    console.log('arr2: ' + v*2)
})


//--------------------------------OBJETOS--------------------------------

let tree = {
    height:10,
    color:'green',
    grow(){
        this.height += 2
    }
}
tree.grow()
console.log('Tree height: ' + tree.height)


//------------------------COMPUTED PROPERTY NAMES------------------------

let prop = 'name'
let id = '1234'
let mobile = '08923'

let user = {
    [prop]:'Jack',
    [`user_${id}`]:`${mobile}`
}

console.log('User: ' + user)


//----------------------------ASIGNAR OBJETOS----------------------------


let person = {
    name:'Jack',
    age:18,
    sex:'male'
}

let newPerson = Object.assign({}, person)  
/* 
si en vez de usar este método se asigna directamente al objeto...
    
    let newPerson = person

...al modificar 'newPerson' también lo hará 'person'.
En cambio con este método son dos objetos diferentes
*/

newPerson.name = 'Bob'
console.log('person:', person.name , '| newPerson:', newPerson.name)


//tambien se puede construir un objeto usando varios objetos ya fabricados
//si se repiten parametros se tomara en cuenta solo el último valor del mismo

let student = {
    name:'Bob',
    age:21,
    xp:'2'
}

let newStudent = Object.assign({}, person, student)
console.log(newStudent)

//los {} pueden colocarse en caualquier lugar y pueden tener valores, ejemplo:
let student_2 = Object.assign(person, student, {name:'George', age:25})  
console.log(student_2)


//---------------------------DESESCTRUCTURACIÓN--------------------------

let array123 = [1,2,3]
let [one, two, three] = array123
//esto crea 3 variables y le asigna su respextiva valor segun su posicion en el array

//también se puede desestructurar un array devuelto por una función:
let array132 = () => { return [1,3,2] }
let [fisrt, , second] = array132();
//al dejar un espacio vacio, ese valor del array se salta

console.log('one:',one,'| two:',two,'| three:',three,'| first:',fisrt,' | second:',second)


// se puede desestructurar un objeto (pero la variable debe tener el nombre de la llave del objeto)    ***
// se puede desestructurar usando variables ya asignadas

//(ejemplo aplicando los 2 casos)
let aa,bb
({aa,bb} = {aa:'Hello', bb:'Jack'})

console.log(aa, bb)

// *** para poder cambiar el nombre:
var o = {h:42, s:true}
var {h:foo, s:bar} = o  //de esta manera 'h' se transforma en 'foo' y 's' en 'bar'

console.log('foo:',foo)

//-------------

const user1 = {
    name: 'David',
    age: 28,
    id: 1234
}

let newUser = Object.assign ({},
    {name, age} = user1,
    {id:9999}
)

console.log(user1, newUser)


//-----------------------------REST & SPREAD-----------------------------

var dateFields = [1970,0,1]
var date = new Date(...dateFields)
//lo que hace es seleccionar los datos del array para usarlo para el formato de la fecha
console.log(date)

let newArr = ['three', 'four']
let numbers = ['one', 'two', ...newArr, 'five']  
//en este caso en vez de incluir el array incluye todos los elementos del mismo
console.log(numbers)


const obj1 = {foo:'bar', x:42}
const obj2 = {foo:'baz', y:5}

const clonedObj = {...obj1}
const mergedObj = {...obj1, ...obj2}

console.log(clonedObj, mergedObj)


//--------------------------------CLASES---------------------------------

class Rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
    }

    get area() {                    // 'get' para llamar a otro método dentro de la clase
        return this.calcArea()
    }

    calcArea() {
        return this.height * this.width
    }
}

const square = new Rectangle(5, 5)
const poster = new Rectangle(2, 3)

console.log(square.area, poster.area)


//-------------


class Point {
    constructor(x, y) {
        this.x = x
        this.y = y 
    }

    static distance(a, b){              // 'static' se lo llama llamando al nombre de la clase, no de la instancia ***
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.hypot(dx, dy)
    }
}

const p1 = new Point(7, 2)
const p2 = new Point(3, 8)

console.log(Point.distance(p1, p2))     // *** se llama con el nombre de la clase, y de argumento se pasan las instancias


//-------------


class Animal {
    constructor (name) {
        this.name = name
    }

    speak(){
        console.log(this.name, 'makes a noise.')
    }
}

class Dog extends Animal {                  // hijo de la clase Animal (hereda todos sus métodos)
    speak(){
        super.speak()                       // 'super' para llamar al método de la clase padre
        console.log(this.name, 'barks.')
    }
}

let dog = new Dog('Rex')
dog.speak()


//----------------------------------MAP----------------------------------

let map1 = new Map([['k1','v1'],['k2','v2']])

//tambien se puede usar 'set' 
let map2 = new Map()
map2.set('k1','v1').set('k2','v2').set('k3','v3')

/*
METODOS 

set(key, value)     Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key)            Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key)            Returns true if a specified key exists in the map and false otherwise.
delete(key)         Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear()             Removes all key/value pairs from map.
keys()              Returns an Iterator of keys in the map for each element.
values()            Returns an Iterator of values in the map for each element.
entries()           Returns an Iterator of array[key, value] in the map for each element.
*/

console.log(map1.size)
console.log(map2.get('k1'))
console.log(map2.has('k2'))
for (let kv of map2.entries()) console.log(kv[0], ':', kv[1])


//----------------------------------SET----------------------------------
// elimina los valores dulpicados

let set1 = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1])
console.log(set1.size)

/*
METODOS

add(value)      Adds a new element with the given value to the Set.
delete(value)   Deletes a specified value from the set.
has(value)      Returns true if a specified value exists in the set and false otherwise.
clear()         Clears the set.
values()        Returns an Iterator of values in the set.
*/

let set2 = new Set()
set2.add(5).add(9).add(59).add(9).add(1).add(9).add(5).add(1)  // solo van a quedar: 5 9 59 1
console.log(set2.has(9))
for (let v of set2.values()) console.log(v)