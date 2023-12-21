 function submenu(){
                //animated with jQuery
        var navToggler = $(".profile-toggler") 
        var target = $(navToggler).data("target");
        $(target).animate({
            height: "toggle",
        });
 }

  function submenup(){
        //animated with jQuery
        var navToggler = $("#prueba") 
        var target = $(navToggler).data("target");
        $(target).animate({
            height: "toggle",
        });
 }


export{submenu,submenup}