
let x = 0

function mazo(){
    img = document.createElement('img')
    img.src = 'img/cartas/11.png'
    img.style = `transform: translate(${x}%, 0);`

    document.getElementById('p1').appendChild(img)

    x += 5
}


var turno = 0


var btn_mas = '<button>+</button><br>'
var btn_menos = '<button>-</button><br>'
var apuesta = '<span>1000</span><br>'

document.getElementById('ap1').innerHTML = btn_mas + apuesta + btn_menos


class Player {
    
}
