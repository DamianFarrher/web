$(document).ready(function(){
    
    $(window).scroll(function(){
        var barra = $(window).scrollTop()
        var posicion = (barra * 0.2)

        $('header').css({
            'background-position':`0 ${50+posicion}%`
        })
    })

})