$(document).ready(function() {
    $('#nav-toggler').click(function() {
        $('#nav-menu').slideToggle();
        $('nav').toggleClass('bg-white');
        $('.brand-title').toggleClass('text-black');
        $('#nav-toggler i').toggleClass('text-black');
    });

    $(window).scroll(function() {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        if(top >= 150) {
            $('nav').addClass('bg-white animate__animated animate__fadeInDown');
            $('.brand-title').addClass('text-black');
            $('#nav-toggler i').addClass('text-black');
            $('.nav-link').addClass('text-black');
            $('#btn-signin').addClass('scrolled-btn-signin');
            $('#btn-signup').addClass('scrolled-btn-signup');
        } else {
            $('nav').removeClass('bg-white animate__animated animate__fadeInDown');
            $('.brand-title').removeClass('text-black');
            $('#nav-toggler i').removeClass('text-black');
            $('.nav-link').removeClass('text-black');
            $('#btn-signin').removeClass('scrolled-btn-signin');
            $('#btn-signup').removeClass('scrolled-btn-signup');
        }
    });
});