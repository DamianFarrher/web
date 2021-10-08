//    #####     #          #####      #####     #     #    #######     #####      #####     #     #                                                                             
//    #    #    #         #     #    #     #    #  #             #    #     #    #     #    #  #                                                                   
//    #####     #         #######    #          ##               #    #######    #          ##                                                                        
//    #    #    #         #     #    #          # #              #    #     #    #          # #                                                                          
//    #    #    #         #     #    #     #    #   #      #     #    #     #    #     #    #   #                                                          
//    #####     ######    #     #     #####     #     #     #####     #     #     #####     #     #                                                                       


//--------------------------------VARIABLES--------------------------------

var cartas_del_mazo = [
    [true, true, true, true],   // A
    [true, true, true, true],   // 2
    [true, true, true, true],   // 3
    [true, true, true, true],   // 4
    [true, true, true, true],   // 5
    [true, true, true, true],   // 6
    [true, true, true, true],   // 7
    [true, true, true, true],   // 8
    [true, true, true, true],   // 9
    [true, true, true, true],   // 10
    [true, true, true, true],   // J
    [true, true, true, true],   // Q
    [true, true, true, true],   // K
]


// en la funcion 'entrar()'
var jugadores = []
var btn_manager = document.querySelector('#game_manager')
var player1 = document.querySelector('#player1')
var player2 = document.querySelector('#player2')
var player3 = document.querySelector('#player3')
var player4 = document.querySelector('#player4')

var botones_entrar = ['player4', 'player3', 'player2']
var botones_menos = ['p4-menos', 'p3-menos', 'p2-menos']
var botones_mas = ['p4-mas', 'p3-mas', 'p2-mas']
var inputs = ['nombre-player4', 'nombre-player3', 'nombre-player2']



// en la funcion 'pedir()'
var carta_elegida
var numero
var color

var turno_num = 0
var turno_div



// en la funcion 'sumar_numeros()'
var puntos_dealer = []
var puntos_jug1 = []
var puntos_jug2 = []
var puntos_jug3 = []
var puntos_jug4 = []

var array_puntos_jugadores = [puntos_jug1, puntos_jug2, puntos_jug3, puntos_jug4, puntos_dealer]

var suma_puntos_dealer = 0
var suma_puntos_jug1 = 0
var suma_puntos_jug2 = 0
var suma_puntos_jug3 = 0
var suma_puntos_jug4 = 0

var array_suma_puntos_jugadores = [0, 0]

var valor_carta

var array_span_puntos = ['p1-result']

var jug_q_tiene_21 = 10


var nombre_p1 = ''
var nombre_p2 = ''
var nombre_p3 = ''
var nombre_p4 = ''



//--------------------------------FUNCIONES--------------------------------

const borrar_jugador_de_array = (arr, item) => arr.splice(arr.indexOf(item),1)

function entrar(bot){
   
    //se elimina el boton de entrar del jugador que lo toco
    bot.remove()

    btn_manager.innerHTML = 'Repartir'
    btn_manager.removeAttribute('disabled')
    btn_manager.setAttribute('class', 'btn btn-primary btn-lg btn-block')

    //entra jugador 1
    if (bot.getAttribute('id')==='player1') {
        jugadores.push("#p1-box")
        
        document.getElementById('p1-menos').remove()
        document.getElementById('p1-mas').remove()

        if (document.getElementById('nombre-player1') != null){
            nombre_p1 = document.getElementById('nombre-player1').value
            if (nombre_p1=='')  nombre_p1 = 'Player 1'
            document.getElementById('p1-h4').innerHTML = nombre_p1 + ' : <span id="p1-result">0</span>'
        }
        
    }
    //entra jugador 2
    else if (bot.getAttribute('id')==='player2') {
        jugadores.push("#p2-box")
        array_span_puntos.push('p2-result')
        array_suma_puntos_jugadores.push(0)

        borrar_jugador_de_array(botones_entrar, 'player2')
        borrar_jugador_de_array(botones_mas, 'p2-mas')
        borrar_jugador_de_array(botones_menos, 'p2-menos')
        borrar_jugador_de_array(inputs, 'nombre-player2')


        document.getElementById('p2-menos').remove()
        document.getElementById('p2-mas').remove()

        if (document.getElementById('nombre-player2') != null){
            nombre_p2 = document.getElementById('nombre-player2').value
            if (nombre_p2=='')  nombre_p2 = 'Player 2'
            document.getElementById('p2-h4').innerHTML = nombre_p2 + ' : <span id="p2-result">0</span>'
        }
    }
    //entra jugador 3
    else if (bot.getAttribute('id')==='player3') {
        jugadores.push("#p3-box")
        array_span_puntos.push('p3-result')
        array_suma_puntos_jugadores.push(0)

        borrar_jugador_de_array(botones_entrar, 'player3')
        borrar_jugador_de_array(botones_mas, 'p3-mas')
        borrar_jugador_de_array(botones_menos, 'p3-menos')
        borrar_jugador_de_array(inputs, 'nombre-player3')


        document.getElementById('p3-menos').remove()
        document.getElementById('p3-mas').remove()

        if (document.getElementById('nombre-player3') != null){
            nombre_p3 = document.getElementById('nombre-player3').value
            if (nombre_p3=='')  nombre_p3 = 'Player 3'
            document.getElementById('p3-h4').innerHTML = nombre_p3 + ' : <span id="p3-result">0</span>'
        }
    }
    //entra jugador 4
    else if (bot.getAttribute('id')==='player4'){
        jugadores.push("#p4-box")
        array_span_puntos.push('p4-result')
        array_suma_puntos_jugadores.push(0)

        borrar_jugador_de_array(botones_entrar, 'player4')
        borrar_jugador_de_array(botones_mas, 'p4-mas')
        borrar_jugador_de_array(botones_menos, 'p4-menos')
        borrar_jugador_de_array(inputs, 'nombre-player4') 


        document.getElementById('p4-menos').remove()
        document.getElementById('p4-mas').remove()

        if (document.getElementById('nombre-player4') != null){
            nombre_p4 = document.getElementById('nombre-player4').value
            if (nombre_p4=='')  nombre_p4 = 'Player 4'
            document.getElementById('p4-h4').innerHTML = nombre_p4 + ' : <span id="p4-result">0</span>'
        }
    }
    
}


function random_card(){
    while (true){
        numero = Math.floor(Math.random() * 13)
        color = Math.floor(Math.random() * 4)
        
        if (cartas_del_mazo[numero][color] != null){
            cartas_del_mazo[numero][color] = null
            carta_elegida = (numero + 1) + '' + (color + 1)

            
            return `img/cartas/${carta_elegida}.png`
        }
    }
}


function empezar_juego(){
    console.log('juego iniciado')
    console.log(document.getElementById('p2-mas'))

    array_span_puntos.push('dealer-result')
    
    if (botones_entrar != []){
        for (let i=0; i<botones_entrar.length; i++) {
            document.getElementById(botones_entrar[i]).setAttribute('class', 'btn btn-outline-danger')
            document.getElementById(botones_entrar[i]).setAttribute('disabled', '')
            document.getElementById(botones_entrar[i]).innerHTML = 'no está jugando'
        }
        if(botones_menos != []) for (let i=0; i<botones_menos.length; i++) document.getElementById(botones_menos[i]).remove()
        if(botones_mas != []) for (let i=0; i<botones_mas.length; i++) document.getElementById(botones_mas[i]).remove()
        if(inputs != []) for (let i=0; i<inputs.length; i++) document.getElementById(inputs[i]).remove()
    }

    //configuracion del boton btn_manager
    btn_manager.setAttribute('class', 'btn btn-outline-danger btn-lg btn-block')
    btn_manager.setAttribute('onclick', 'reiniciar_partida()')
    btn_manager.innerHTML = 'Reiniciar'

    //configuracion de los botones de juego
    document.getElementById('bt-pedir').removeAttribute('disabled')
    document.getElementById('bt-pedir').setAttribute('class', 'btn btn-info')
    document.getElementById('bt-pasar').removeAttribute('disabled')
    document.getElementById('bt-pasar').setAttribute('class', 'btn btn-danger')


    //se reparten las cartas a todos los jugadores activos
    for (let i=0; i < jugadores.length; i++){
        pedir(jugadores[i], i)
        pedir(jugadores[i], i)
    }
    //una carta al dealer
    pedir('#dealer-box', jugadores.length)

    //comienza el primer turno
    turno_num = 0
    turno_div = jugadores[0]

    revisar_igual_a_21()
}

var suma = 0

function sumar_puntos(turno___num, valor=numero+1){

    switch (valor){
        case 0:
            break
        case 1:
            array_puntos_jugadores[turno___num].push(11)
            break
        case 11:
            array_puntos_jugadores[turno___num].push(10)
            break
        case 12:
            array_puntos_jugadores[turno___num].push(10)
            break
        case 13:
            array_puntos_jugadores[turno___num].push(10)
            break
        default:
            array_puntos_jugadores[turno___num].push(valor)
    }


    // se suman los puntos del jugador
    suma=0
    array_puntos_jugadores[turno___num].forEach(element => { suma += element })
    array_suma_puntos_jugadores[turno___num] = suma

    if (suma==21){
        jug_q_tiene_21 = turno___num
        document.getElementById(array_span_puntos[turno___num]).setAttribute('class', 'gold')
    } 

    // puntos en pantalla
    document.getElementById(array_span_puntos[turno___num]).innerHTML = array_suma_puntos_jugadores[turno___num]
}


function pasa_los_21(turno___num){
    let index_de_11 = array_puntos_jugadores[turno___num].indexOf(11)

    if (index_de_11 != -1) {
        array_puntos_jugadores[turno___num].splice(index_de_11, 1, 1)
        sumar_puntos(turno___num, 0)
    }
    else{
        document.getElementById('bt-pedir').setAttribute('disabled', '')
        document.getElementById('bt-pedir').setAttribute('class', 'btn btn-outline-light')

        document.getElementById(array_span_puntos[turno___num]).setAttribute('class', 'red')
    }
}


function revisar_igual_a_21(){
    if (jug_q_tiene_21 == turno_num) {
        document.getElementById('bt-pedir').setAttribute('disabled', '')
        document.getElementById('bt-pedir').setAttribute('class', 'btn btn-outline-light')
    }
}

//------------------- JUGADAS

function pedir(turno=turno_div, turno__num=turno_num){
    //se crea la imagen de la carta
    let cardImage = document.createElement('img')
    cardImage.src = random_card()
    document.querySelector(turno).appendChild(cardImage)

    sumar_puntos(turno__num)

    array_puntos_jugadores[turno__num]

    if (suma>21) pasa_los_21(turno__num)

    revisar_igual_a_21()
}


function pasar(){
    document.getElementById('bt-pedir').removeAttribute('disabled')
    document.getElementById('bt-pedir').setAttribute('class', 'btn btn-info')

    if (turno_num < jugadores.length-1){    
        turno_num++
        turno_div = jugadores[turno_num]
    } else {
        turno_dealer()
    }

    revisar_igual_a_21()
}

function doblar(){
}

function dividir(){
}

function seguro(){
}


function turno_dealer(){

    // desactiva los botones
    document.getElementById('bt-pedir').setAttribute('disabled', '')
    document.getElementById('bt-pedir').setAttribute('class', 'btn btn-outline-light')
    document.getElementById('bt-pasar').setAttribute('disabled', '')
    document.getElementById('bt-pasar').setAttribute('class', 'btn btn-outline-light')
    document.getElementById('bt-doblar').setAttribute('disabled', '')
    document.getElementById('bt-doblar').setAttribute('class', 'btn btn-outline-light')
    document.getElementById('bt-dividir').setAttribute('disabled', '')
    document.getElementById('bt-dividir').setAttribute('class', 'btn btn-outline-light')
    document.getElementById('bt-seguro').setAttribute('disabled', '')
    document.getElementById('bt-seguro').setAttribute('class', 'btn btn-outline-light')

    jugadores.push('#dealer-box')
    turno_num++
    turno_div = '#dealer-box'

    while (true){
        if (array_suma_puntos_jugadores[turno_num]<17){
            pedir()
        } 
        else break
    }

    suma_puntos_dealer = array_suma_puntos_jugadores[turno_num]

    final_ronda()
}


/*

    document.querySelector('#bt-dividir').removeAttribute('disabled')
    document.querySelector('#bt-dividir').setAttribute('class', 'btn btn-light')

    document.querySelector('#bt-plantarse').setAttribute('disabled','')
    document.querySelector('#bt-plantarse').setAttribute('class', 'btn btn-outline-light')

*/



//__________________________________________________________________________________________________________________________________

// APUESTAS

//--------------------------------VARIABLES--------------------------------

var fichas_jug1 = 100
var fichas_jug2 = 100
var fichas_jug3 = 100
var fichas_jug4 = 100


var apuesta_jug1 = 0
var apuesta_jug2 = 0
var apuesta_jug3 = 0
var apuesta_jug4 = 0


//--------------------------------FUNCIONES--------------------------------

function menos_apuesta(jug){
    btn_manager.setAttribute('onclick', 'empezar_juego()')

    if (jug == 'player1'){
        if (apuesta_jug1 > 0) {
            apuesta_jug1-=10
            document.getElementById(jug).innerHTML = apuesta_jug1

            fichas_jug1+=10
            document.getElementById('fichas-jug1').innerHTML = fichas_jug1
        }
    }
    if (jug == 'player2'){
        if (apuesta_jug2 > 0) {
            apuesta_jug2-=10
            document.getElementById(jug).innerHTML = apuesta_jug2

            fichas_jug2+=10
            document.getElementById('fichas-jug2').innerHTML = fichas_jug2
        }
    }
    if (jug == 'player3'){
        if (apuesta_jug3 > 0) {
            apuesta_jug3-=10
            document.getElementById(jug).innerHTML = apuesta_jug3

            fichas_jug3+=10
            document.getElementById('fichas-jug3').innerHTML = fichas_jug3
        }
    }
    if (jug == 'player4'){
        if (apuesta_jug4 > 0) {
            apuesta_jug4-=10
            document.getElementById(jug).innerHTML = apuesta_jug4

            fichas_jug4+=10
            document.getElementById('fichas-jug4').innerHTML = fichas_jug4
        }
    }
 
    fichas_jugadores = [fichas_jug1, fichas_jug2, fichas_jug3, fichas_jug4]
    apuestas_jugadores = [apuesta_jug1, apuesta_jug2, apuesta_jug3, apuesta_jug4]
}

function mas_apuesta(jug){
    btn_manager.setAttribute('onclick', 'empezar_juego()')

    if (jug == 'player1'){
        if (0 < fichas_jug1) {
            apuesta_jug1+=10
            document.getElementById(jug).innerHTML = apuesta_jug1

            fichas_jug1-=10
            document.getElementById('fichas-jug1').innerHTML = fichas_jug1
        }
    }
    if (jug == 'player2'){
        if (0 < fichas_jug2) {
            apuesta_jug2+=10
            document.getElementById(jug).innerHTML = apuesta_jug2

            fichas_jug2-=10
            document.getElementById('fichas-jug2').innerHTML = fichas_jug2
        }
    }
    if (jug == 'player3'){
        if (0 < fichas_jug3) {
            apuesta_jug3+=10
            document.getElementById(jug).innerHTML = apuesta_jug3

            fichas_jug3-=10
            document.getElementById('fichas-jug3').innerHTML = fichas_jug3
        }
    }
    if (jug == 'player4'){
        if (0 < fichas_jug4) {
            apuesta_jug4+=10
            document.getElementById(jug).innerHTML = apuesta_jug4

            fichas_jug4-=10
            document.getElementById('fichas-jug4').innerHTML = fichas_jug4
        }
    }

    fichas_jugadores = [fichas_jug1, fichas_jug2, fichas_jug3, fichas_jug4]
    apuestas_jugadores = [apuesta_jug1, apuesta_jug2, apuesta_jug3, apuesta_jug4]
}




//__________________________________________________________________________________________________________________________________

// FINAL DE LA RONDA

var fichas_jugadores = [fichas_jug1, fichas_jug2, fichas_jug3, fichas_jug4]
var apuestas_jugadores = [apuesta_jug1, apuesta_jug2, apuesta_jug3, apuesta_jug4]

var cuadro_fichas_jugadores = ['fichas-jug1', 'fichas-jug2', 'fichas-jug3', 'fichas-jug4']

var msj1 = ''
var msj2 = ''
var msjcolor = ''

todos_los_jugadores = ['#p1-box', '#p2-box', '#p3-box', '#p4-box']


function gana(i){
    msj1 = 'GANASTE'
    msj2 = '+' + apuestas_jugadores[i]
    msjcolor = 'greenyellow'

    fichas_jugadores[i] += (apuestas_jugadores[i] * 2)
    document.getElementById(cuadro_fichas_jugadores[i]).innerHTML = fichas_jugadores[i]
}

function empata(i){
    msj1 = 'EMPATE'
    msj2 = ''
    msjcolor = 'white'

    fichas_jugadores[i] += apuestas_jugadores[i]
    document.getElementById(cuadro_fichas_jugadores[i]).innerHTML = fichas_jugadores[i]
}

function pierde(i){
    msj1 = 'PERDISTE'
    msj2 = '-' + apuestas_jugadores[i]
    msjcolor = 'red'
}


function final_ronda(){
    for (let i=0; i<jugadores.length-1; i++){
    
        let index = todos_los_jugadores.indexOf(jugadores[i])

        // si pasa los 21
        if (array_suma_puntos_jugadores[i] > 21){

            //pierde
            if (suma_puntos_dealer<22) pierde(index)

            //empata
            if (suma_puntos_dealer>21) empata(index)

        }
        else{

            //GANA
            if ((array_suma_puntos_jugadores[i] > suma_puntos_dealer) || (suma_puntos_dealer>21)) gana(index)
            
            //EMPATA
            else if (array_suma_puntos_jugadores[i] == suma_puntos_dealer) empata(index)

            //PIERDE
            else pierde(index)
        }
            
        var div_mensaje_final = document.createElement('div')
        div_mensaje_final.innerHTML = '<br>' + msj1 +'<br>' + msj2
        div_mensaje_final.setAttribute('style', 'color:' + msjcolor + ';')
        document.querySelector(jugadores[i]).appendChild(div_mensaje_final)
        
    }

    
}


function reiniciar_partida() {
    console.log('reiniciando')

    // se restauran las pantallas
    if (jugadores.indexOf(todos_los_jugadores[0]) != -1) document.querySelector(todos_los_jugadores[0]).innerHTML = `<h4 id="p1-h4">` + nombre_p1 + ` : <span id="p1-result">0</span> </h4> <button class="btn btn-outline-danger", id="p1-menos" style="cursor: default;" onclick="menos_apuesta('player1')" >-</button> <button class="btn btn-info", id="player1" style="cursor: default;" onclick="entrar(this)" >0</button> <button class="btn btn-outline-success", id="p1-mas" style="cursor: default;" onclick="mas_apuesta('player1')" >+</button> `
    if (jugadores.indexOf(todos_los_jugadores[1]) != -1) document.querySelector(todos_los_jugadores[1]).innerHTML = `<h4 id="p2-h4">` + nombre_p2 + ` : <span id="p2-result">0</span> </h4> <button class="btn btn-outline-danger", id="p2-menos" style="cursor: default;" onclick="menos_apuesta('player2')" >-</button> <button class="btn btn-info", id="player2" style="cursor: default;" onclick="entrar(this)" >0</button> <button class="btn btn-outline-success", id="p2-mas" style="cursor: default;" onclick="mas_apuesta('player2')" >+</button> `
    if (jugadores.indexOf(todos_los_jugadores[2]) != -1) document.querySelector(todos_los_jugadores[2]).innerHTML = `<h4 id="p3-h4">` + nombre_p3 + ` : <span id="p3-result">0</span> </h4> <button class="btn btn-outline-danger", id="p3-menos" style="cursor: default;" onclick="menos_apuesta('player3')" >-</button> <button class="btn btn-info", id="player3" style="cursor: default;" onclick="entrar(this)" >0</button> <button class="btn btn-outline-success", id="p3-mas" style="cursor: default;" onclick="mas_apuesta('player3')" >+</button> `
    if (jugadores.indexOf(todos_los_jugadores[3]) != -1) document.querySelector(todos_los_jugadores[3]).innerHTML = `<h4 id="p4-h4">` + nombre_p4 + ` : <span id="p4-result">0</span> </h4> <button class="btn btn-outline-danger", id="p4-menos" style="cursor: default;" onclick="menos_apuesta('player4')" >-</button> <button class="btn btn-info", id="player4" style="cursor: default;" onclick="entrar(this)" >0</button> <button class="btn btn-outline-success", id="p4-mas" style="cursor: default;" onclick="mas_apuesta('player4')" >+</button> `
    document.querySelector("#dealer-box").innerHTML = `<h4>DELAER : <span id="dealer-result">0</span></h4>`

    // configuracion del boton principal
    btn_manager.setAttribute('onclick', 'empezar_juego()')
    btn_manager.innerHTML = 'Esperando apuestas...'

    //restaurar las varibles
    cartas_del_mazo = [[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true],[true, true, true, true], [true, true, true, true],[true, true, true, true],[true, true, true, true],]
    jugadores = []
    turno_num = 0
    turno_div = undefined
    puntos_dealer = []
    puntos_jug1 = []
    puntos_jug2 = []
    puntos_jug3 = []
    puntos_jug4 = []
    suma = 0
    suma_puntos_dealer = 0
    suma_puntos_jug1 = 0
    suma_puntos_jug2 = 0
    suma_puntos_jug3 = 0
    suma_puntos_jug4 = 0
    array_suma_puntos_jugadores = [0, 0]
    valor_carta = 0
    array_span_puntos = ['p1-result']
    jug_q_tiene_21 = 10
    apuesta_jug1 = 0
    apuesta_jug2 = 0
    apuesta_jug3 = 0
    apuesta_jug4 = 0
    fichas_jug1 = fichas_jugadores[0]
    fichas_jug2 = fichas_jugadores[1]
    fichas_jug3 = fichas_jugadores[2]
    fichas_jug4 = fichas_jugadores[3]

    botones_entrar = ['player4', 'player3', 'player2']
    botones_menos = []
    if (document.getElementById('p4-menos')!=null) botones_menos.push('p4-menos')
    if (document.getElementById('p3-menos')!=null) botones_menos.push('p3-menos')
    if (document.getElementById('p2-menos')!=null) botones_menos.push('p2-menos')
    botones_mas = []
    if (document.getElementById('p4-mas')!=null) botones_menos.push('p4-mas')
    if (document.getElementById('p3-mas')!=null) botones_menos.push('p3-mas')
    if (document.getElementById('p2-mas')!=null) botones_menos.push('p2-mas')
}




//------------------------------------------------------------------------------------------------------//
//-----------------------------------------                   ------------------------------------------//
//-----------------------------------------     QUE FALTA     ------------------------------------------//
//-----------------------------------------      AGREGAR      ------------------------------------------//
//-----------------------------------------                   ------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                                                                                      //
//                                                                                                      //
//    (   )     Reiniciar ronda                                                                         //
//                                                                                                      //
//    ( X )     Arreglar boton de apuestas                                                              //   
//                  Que se pueda apostar sin seguir un orden para que cuando...                         //
//                  ...alguien se quede sin fichas los demás puedan seguir jugando                      //
//                                                                                                      //
//    (   )     [ OPCIONAL ] Que se eliminen los espacios de los jugadores que no jueguen               //
//                                                                                                      //
//                                                                                                      //
//------------------------------------------------------------------------------------------------------//


