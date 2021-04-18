function menu(){     
        var ele = $('#burger');
        if(ele.hasClass('fa-bars')){
            ele.removeClass('fa-bars').addClass('fa-times')
        }
        else{
            ele.addClass('fa-bars').removeClass('fa-times')
        }
        //animated with jQuery
	    var navToggler = $(".nav-toggler") 
	    var target = $(navToggler).data("target");
	    $(target).animate({
	    	height: "toggle",
	    });
    }

export {menu}