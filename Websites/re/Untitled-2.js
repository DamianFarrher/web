$(document).ready(function(){

    $(window).scroll(function(){
        var barra = $(window).scrollTop()
        var posicion = (barra)

        $('#fondo-de-inicio').css({
            'background-position':`0 ${200+posicion}%`
        })

        /*
        $('#fondo-de-inicio input').css({
            'margin-top':`${300 + posicion/2}px`
        })
        */
    })

})