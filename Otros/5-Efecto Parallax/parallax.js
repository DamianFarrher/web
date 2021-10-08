$(document).ready(function(){

    // esto hace que si la pantala es muy chica, 
    // el fondo no se achica
    if ($(window).width() < 1250){
        $('body').css({
            'background-size':'initial'
        })
    }


    // EFECTO PARALLAX
    $(window).scroll(function(){
        let barra = $(window).scrollTop()
        let posicion = (barra * -0.1)

        $('body').css({
            'background-position':`0 ${posicion}px`
        })
        
    })

})