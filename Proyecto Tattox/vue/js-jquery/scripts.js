
$(document).ready(function() {
    
    /*Not animated function
    const button = document.getElementById("burger").addEventListener('click', () => {
        //constante menu es el elemento con id menu, manipulamos las clases del mismo y agrega o quita la clase hidden para ocultarlo
        const menu = document.getElementById("menu").classList.toggle("hidden");
    })
    */
    //animated with jQuery
    $(".nav-toggler").each(function(_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click",function() {
            $(target).animate({
                height: "toggle",
            });
        });
    });

    //animated logo
    $("#logo").on({     
        mouseout:  function() { $('#logo').css('background-image', 'url(./img/logo_1.png)'); },
        mouseover: function() { $('#logo').css('background-image', 'url(./img/logo_4.png)'); },
    });

    $("#burger").click(function(){     
        var ele = $('#burger');
        if(ele.hasClass('fa-bars')){
            ele.removeClass('fa-bars').addClass('fa-times')
        }
        else{
            ele.addClass('fa-bars').removeClass('fa-times')
        }
    });

})


