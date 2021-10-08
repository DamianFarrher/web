// $(function options(e) {
//     var x = e.clientX
//     var y = e.clientY
//     showalert(x, y)
// })
// $(function showalert(x, y){
//     // om = document.getElementById("optionsmenu")
//     //om.style.background = "red"
//     $('#optionsmenu').css({
//         'display':'auto'
        
//     })
// })

window.onload = function(){      // se ejecuta cuando toda la pagina se carga completamente
    
    $('.button').click(function(e) {
        var x = e.clientX
        var y = e.clientY
        
        $('.options').fadeIn(100)
        $('.options').css({
            'top':y,
            'left':x
        })

        $(".close").attr("class","")  

        $(document).on("click",".close",function(){
            $('.options').fadeOut(100)
            $(".close").attr("class","")  
        })
        
        setTimeout(function () {
            $("body").addClass("close");
        }, 10);
    })
    
}