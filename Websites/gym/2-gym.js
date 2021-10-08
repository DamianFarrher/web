$(document).ready(function(){
    
    $(window).scroll(function(){
        var barra = $(window).scrollTop()
        var posicion = (barra * 0.2)

        $('header').css({
            'background-position':`0 ${-posicion}px`
        })

        $('#cont-3').css({
            'background-position':`0 ${750-posicion*2}px` 
        })

        /*
        if ($(window).width() < 1000){
            $('header').css({
                'background-size': '1000px'
            })
            $('#cont-3').css({
                'background-size': '1000px'
            })
        } else {
            $('header').css({
                'background-size': 'cover'
            })
            $('#cont-3').css({
                'background-size': 'cover'
            })
        }
        */

        $('#header-container').css({
            'padding':`${screen.height/2 - 125}px 0`
        })

        
    })

})