function editDescripcion(){
	$('#bio').on({
        mouseout: function () { $('#edit-bio').addClass('hidden') },
        mouseover: function () { $('#edit-bio').removeClass('hidden') }
    });
}


function editFoto(){
    $("#pic-frame").on({
        mouseout:  function() { $('#change-pic').addClass('hidden') },
        mouseover: function() { $('#change-pic').removeClass('hidden'),$('#change-pic').addClass('flex')},
        
    });
}


function frameEditFoto(){
	$("#pic-frame").on({
        mouseout:  function() { $('#change-pic').addClass('hidden') },
        mouseover: function() { $('#change-pic').removeClass('hidden'),$('#change-pic').addClass('flex')},
        
    });
}

export{editDescripcion,editFoto,frameEditFoto}