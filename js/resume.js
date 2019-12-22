


$(document).ready(function(){
    $('.carousel').carousel();

    // Start MixItUp 

    $('#smsm').mixItUp();

    // navigate Smootly to links
    
    $('nav ul li a , .butt a , .startProject a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    

    // change the color of navbar 
    
    $(window).scroll(function (){
        if ($(window).scrollTop() > $('nav').innerHeight()) {
        $('.bg-light').css({ 'background-color':'#FFF','transition':'.5s all ease-in-out' });
        $('.navbar-light .navbar-nav .nav-link').css('color','#000000a8')
        } 
        if ($(window).scrollTop() == 0 && $(window).width() > 992) {
        $('.bg-light').css('background-color','transparent');
        $('.navbar-light .navbar-nav .nav-link').css('color','#FFF')
        }
    })
    
    $('#coloo').on( {
        click:function (){
            $('.bg-light').css({ 'background-color':'#FFF'});
            $('.navbar-light .navbar-nav .nav-link').css('color','#000000a8')
        }
        
    })

    // fancy boxs
    $('.btnv').fancybox();
    $('[data-fancybox="imagesport"], [data-fancybox="form"] ,[data-fancybox="sdialog"], [data-fancybox="team"],[data-fancybox="download"]').fancybox();
    
    // Start Map 
    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.12),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
    
});
