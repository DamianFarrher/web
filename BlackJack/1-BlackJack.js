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


function sacar_carta_del_mazo(){
    while (true){
        let a = Math.floor(Math.random() * 13)
        let b = Math.floor(Math.random() * 4)

        if (cartas_del_mazo[a][b] === true){
            cartas_del_mazo[a][b] = null        // tambien puede ser false
            return a + '' + b
        }
    }
}

console.log(cartas_del_mazo)
console.log(sacar_carta_del_mazo())