function escalado(){
	//scale height equal to width
    var cw = $('.child').width();
    $('.child').css({'height':cw+'px'});

    $( window ).resize(function() {
        cw = $('.child').width();
        $('.child').css({'height':cw+'px'});
    });
}

export{escalado}