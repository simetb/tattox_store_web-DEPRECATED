
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
            //stop scrolling when modal is open
            const body = document.body;
            body.classList.toggle('fixed');
            //here we add the animation
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

    //change profile pic
    $("#pic-frame").on({
        mouseout:  function() { $('#change-pic').addClass('hidden') },
        mouseover: function() { $('#change-pic').removeClass('hidden'),$('#change-pic').addClass('flex')},
        
    });

    //change profile name
    $('#name').on({
        mouseout: function () { $('#edit-name').addClass('hidden') },
        mouseover: function () { $('#edit-name').removeClass('hidden') }
    });

    //change bio
    $('#bio').on({
        mouseout: function () { $('#edit-bio').addClass('hidden') },
        mouseover: function () { $('#edit-bio').removeClass('hidden') }
    });

    //change social media
    $('#facebook-container').on({
        mouseout: function () { $('#edit-facebook').addClass('hidden') },
        mouseover: function () { $('#edit-facebook').removeClass('hidden') }
    });
    $('#instagram-container').on({
        mouseout: function () { $('#edit-instagram').addClass('hidden') },
        mouseover: function () { $('#edit-instagram').removeClass('hidden') }
    });
    $('#twitter-container').on({
        mouseout: function () { $('#edit-twitter').addClass('hidden') },
        mouseover: function () { $('#edit-twitter').removeClass('hidden') }
    });
    
    //delete publication icon show
    $('.post').on({
        mouseout: function () { $('#delete-icon').addClass('hidden') },
        mouseover: function () { $('#delete-icon').removeClass('hidden') }
    });

    //scale height equal to width
    
    var cw = $('.child').width();
    $('.child').css({'height':cw+'px'});

    $( window ).resize(function() {
        cw = $('.child').width();
        $('.child').css({'height':cw+'px'});
    });

    //scale post and profile img height equal to width

    var cw = $('.postImg').width();
    $('.postImg').css({'height':cw+'px'});

    $( window ).resize(function() {
        cw = $('.postImg').width();
        $('.postImg').css({'height':cw+'px'});
    });

    var pw = $('.postPic').width();
    $('.postPic').css({'height':pw+'px'});

    $( window ).resize(function() {
        pw = $('.postPic').width();
        $('.postPic').css({'height':pw+'px'});
    });


    //VIEW POST

    $('.post').click( function () {
        document.getElementById('viewPost').classList.remove('hidden');
        document.getElementById('viewPost').classList.add('flex');
        let mw = $('.postPic').width();
        $('.postPic').css({'height':mw+'px'})
    });

    //post icons actions
    $('#comment-icon').click(function () {
        $('#comment-input').focus();
    });

    $('#like-icon').click(function () {
        if($('#like-icon').hasClass('far')){
            $('#like-icon').removeClass('far').addClass('fas');
        }else{
            $('#like-icon').removeClass('fas').addClass('far'); 
        }
    });

    $('#back-icon').click(function () {
        document.getElementById('viewPost').classList.remove('flex');
        document.getElementById('viewPost').classList.add('hidden');
    });

    //open and close delete post modal 
    $('#delete-icon').click(function () {
        document.getElementById('deletePostConfirm').classList.remove('hidden');
        document.getElementById('deletePostConfirm').classList.add('flex');
    });
    $('#confirm-delete-post').click(function () {
        document.getElementById('deletePostConfirm').classList.remove('flex');
        document.getElementById('deletePostConfirm').classList.add('hidden');
        return true;
    });
    $('#cancel-delete-post').click(function () {
        document.getElementById('deletePostConfirm').classList.remove('flex');
        document.getElementById('deletePostConfirm').classList.add('hidden');
        return false;
    });
    
});
    

//alert show and hide
function showAlert(title = 'Alert', msg = 'Description about the alert modal'){
    document.getElementById('title-alert').innerHTML = title;
    document.getElementById('msg-alert').innerHTML = msg;
    if(document.getElementById('alert').classList.contains('hidden')){
        document.getElementById('alert').classList.remove('hidden');
        document.getElementById('alert').classList.add('flex');
    }
    if(document.getElementById('alert').classList.contains('animate-hide_slide')){
        document.getElementById('alert').classList.remove('animate-hide_slide');
    }
    setTimeout(function(){
        document.getElementById('alert').classList.add('animate-hide_slide');
    },5000)
}

const hideAlert = document.getElementById('hideAlert').addEventListener('click' , () => {
    document.getElementById('alert').classList.add('animate-hide_slide');
});

//Confirm Show and get true or close(cancel)
function showConfirm(title = 'Confirm', msg = 'Description about the confirm modal'){
    document.getElementById('confirm-title').innerHTML = title;
    document.getElementById('confirm-description').innerHTML = msg;
    document.getElementById('confirm').classList.remove('hidden');
    document.getElementById('confirm').classList.add('flex');
}


const confirmButton = document.getElementById('confirm-button').addEventListener('click', () => {
    document.getElementById('confirm').classList.add('hidden');
    document.getElementById('confirm').classList.remove('flex');
    return true;
});

const cancelButton = document.getElementById('cancel-button').addEventListener('click', () => {
    document.getElementById('confirm').classList.add('hidden');
    document.getElementById('confirm').classList.remove('flex');
    return false;
});

//show and hide post and preview image magic
document.querySelector('#createNewPost').addEventListener('click', () => {
    document.getElementById('newPost').classList.remove('hidden');
    document.getElementById('newPost').classList.add('flex');
    let pw = $('.postImg2').width();
    $('.postImg2').css({'height':pw+'px'});
});

const defaultBtn = document.querySelector("#image-input");
const customBtn = document.querySelector("#custom-btn");
const img = document.getElementById("img-post");
const cancelBtn = document.querySelector("#cancel-btn");
const fileName = document.querySelector("#file-name");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
customBtn.addEventListener('click', () => {
    defaultBtn.click();
});
defaultBtn.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            cancelBtn.classList.remove('hidden')
            fileName.classList.remove('hidden')
        }
        cancelBtn.addEventListener("click", function(){
            img.src = "";
            cancelBtn.classList.add('hidden');
            fileName.classList.add('hidden');
        });
        reader.readAsDataURL(file);
    }
    if(defaultBtn.value){
        let valueStore = defaultBtn.value.match(regExp);
        fileName.textContent = valueStore;
    }
});

const confirmPost = document.getElementById('confirm-post').addEventListener('click', () => {
    document.getElementById('newPost').classList.add('hidden');
    document.getElementById('newPost').classList.remove('flex');
    img.src = "";
    cancelBtn.classList.add('hidden');
    fileName.classList.add('hidden');
    return true;
});

const cancelPost = document.getElementById('cancel-post').addEventListener('click', () => {
    document.getElementById('newPost').classList.add('hidden');
    document.getElementById('newPost').classList.remove('flex');
    img.src = "";
    cancelBtn.classList.add('hidden');
    fileName.classList.add('hidden');
    return false;
});

//edit social media links
//facebook
const showSMFacebook = document.querySelector('#edit-facebook').addEventListener('click', () => {
    document.getElementById('socialMediaEdit').classList.add('flex');
    document.getElementById('socialMediaEdit').classList.remove('hidden');
    document.getElementById('input-facebook').focus();
});
//instagram
const showSMInstagram = document.querySelector('#edit-instagram').addEventListener('click', () => {
    document.getElementById('socialMediaEdit').classList.add('flex');
    document.getElementById('socialMediaEdit').classList.remove('hidden');
    document.getElementById('input-instagram').focus();
});
//twitter
const showSMTwitter = document.querySelector('#edit-twitter').addEventListener('click', () => {
    document.getElementById('socialMediaEdit').classList.add('flex');
    document.getElementById('socialMediaEdit').classList.remove('hidden');
    document.getElementById('input-twitter').focus();
});
//closeButtons
const confirmSM = document.getElementById('confirm-media-btn').addEventListener('click', () => {
    document.getElementById('socialMediaEdit').classList.add('hidden');
    document.getElementById('socialMediaEdit').classList.remove('flex');
    document.querySelector('#input-facebook').value = ""
    document.querySelector('#input-instagram').value = ""
    document.querySelector('#input-twitter').value = ""
    return true;
});

const cancelSM = document.getElementById('cancel-media-btn').addEventListener('click', () => {
    document.getElementById('socialMediaEdit').classList.add('hidden');
    document.getElementById('socialMediaEdit').classList.remove('flex');
    document.querySelector('#input-facebook').value = ""
    document.querySelector('#input-instagram').value = ""
    document.querySelector('#input-twitter').value = ""
    return false;
});

//edit name and bio
//name
const showAboutName = document.querySelector('#edit-name').addEventListener('click', () => {
    document.getElementById('aboutEdit').classList.add('flex');
    document.getElementById('aboutEdit').classList.remove('hidden');
    document.getElementById('input-name').focus();
});
//bio
const showAboutBio = document.querySelector('#edit-bio').addEventListener('click', () => {
    document.getElementById('aboutEdit').classList.add('flex');
    document.getElementById('aboutEdit').classList.remove('hidden');
    document.getElementById('input-bio').focus();
});
//closeButtons
const confirmBio = document.getElementById('confirm-about-btn').addEventListener('click', () => {
    document.getElementById('aboutEdit').classList.add('hidden');
    document.getElementById('aboutEdit').classList.remove('flex');
    document.querySelector('#input-name').value = ""
    document.querySelector('#input-bio').value = ""
    return true;
});

const cancelBio = document.getElementById('cancel-about-btn').addEventListener('click', () => {
    document.getElementById('aboutEdit').classList.add('hidden');
    document.getElementById('aboutEdit').classList.remove('flex');
    document.querySelector('#input-name').value = ""
    document.querySelector('#input-bio').value = ""
    return false;
});

//show and hide profile and preview image magic
document.querySelector('#change-pic').addEventListener('click', () => {
    document.getElementById('pictureEdit').classList.remove('hidden');
    document.getElementById('pictureEdit').classList.add('flex');
    let mw = $('.postImg').width();
    $('.postImg').css({'height':mw+'px'});
});

const hiddenBtn = document.querySelector("#profile-image-input");
const picBtn = document.querySelector("#pic-btn");
picBtn.addEventListener('click', () => {
    hiddenBtn.click();
});
hiddenBtn.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        cosole.log(file)
        }
    }

const confirmProfilePic = document.getElementById('confirm-image-user').addEventListener('click', () => {
    document.getElementById('pictureEdit').classList.add('hidden');
    document.getElementById('pictureEdit').classList.remove('flex');
    profilePic.src = "";
    cancelPic.classList.add('hidden');
    picName.classList.add('hidden');
    return true;
});

const cancelProfilePic = document.getElementById('cancel-image-user').addEventListener('click', () => {
    document.getElementById('pictureEdit').classList.add('hidden');
    document.getElementById('pictureEdit').classList.remove('flex');
    profilePic.src = "";
    cancelPic.classList.add('hidden');
    picName.classList.add('hidden');
    return false;
});

//DELETE ACCOUNT SHOW and Hide and get true or close(cancel)
document.querySelector('#deleteAcc-icon').addEventListener('click',() => {
    document.getElementById('delete-acc').classList.remove('hidden');
    document.getElementById('delete-acc').classList.add('flex');
});

const cdeleteButton = document.getElementById('confirm-delete-button').addEventListener('click', () => {
    document.getElementById('delete-acc').classList.add('hidden');
    document.getElementById('delete-acc').classList.remove('flex');
    return true;
});

const deleteButton = document.getElementById('cancel-delete-button').addEventListener('click', () => {
    document.getElementById('delete-acc').classList.add('hidden');
    document.getElementById('delete-acc').classList.remove('flex');
    return false;
});


