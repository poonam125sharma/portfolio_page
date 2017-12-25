$(document).ready(function(e){
    // e.preventDefault();
    // $(".js_fa").effect('bounce', {times:10}, 500);
    $('.right-ul, .short-desc').effect('slide',2000);
    $('.para').hide();
    $('.small-img').mouseenter(function(){
        $(this).children('div').addClass('img-desc');
        $(".para", this).show(0);
    }).mouseleave(function(){
        $(this).children('div').removeClass('img-desc');
        $(this).find(".para").hide(0);
    });
});

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.js_fa', { 
    duration: 2000,
    mobile: true,
    reset:true
 });
 sr.reveal('#about', { 
    duration: 2000,
    mobile: true,
    reset:true
 });
 sr.reveal('footer', { 
    duration: 2000,
    origin: 'top',
    distance: '20px',
    mobile: true,
    reset:true
 });
 sr.reveal('#portfolio > .row', { 
    duration: 2000,
    origin: 'bottom',
    distance: '20px',
    mobile: true,
    reset:true
 });
 sr.reveal('header > .container', { 
    duration: 2000,
    origin: 'bottom',
    distance: '20px',
    mobile: true,
    reset:true
 });

