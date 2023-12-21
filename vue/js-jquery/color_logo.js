 //animated logo
    function logo(){$("#logo").on({     
        mouseout:  function() { $('#logo').css('background-image', 'url(./img/logo_1.png)'); },
        mouseover: function() { $('#logo').css('background-image', 'url(./img/logo_4.png)'); },
    });
    }

   export{logo}