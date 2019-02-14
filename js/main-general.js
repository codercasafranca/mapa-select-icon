// SCROLL HEADER APARECE/DESAPARECE
var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
   // console.log(st);
   if (st > lastScrollTop){
       document.getElementById("header_top").style.top = "-100%";
   } else {
      document.getElementById("header_top").style.top = "0";
   }
   lastScrollTop = st;
}, false);

// APARICION DE ELEMENTOS MENU
$(document).ready(function(){
  var itemsMenu = $('.ui-box-header-top nav ul li');

  itemsMenu.each(function(index){
      setTimeout(() => {
          $(this).addClass('mostrar')
      }, 300 * index);
  });
});


ScrollReveal().reveal('.ui-box-banner-interno .ui-bg', {
    delay: 100,
    opacity:0,
    duration: 2000,
    scale: 1.1,
    reset: false,   
});

ScrollReveal().reveal('.ui-box-banner-interno .ui-box-rocas', {
    delay: 200,
    origin:'bottom',
    distance:'100%',
    opacity:0,
    duration: 2000,
    scale: 1,
    reset: false,   
});

ScrollReveal().reveal('.ui-box-banner-interno .ui-txt span', {
    delay: 300,
    origin:'top',
    distance:'30%',
    opacity:0,
    duration: 2000,
    scale: 1,
    reset: false,   
});

ScrollReveal().reveal('.ui-box-item-marca-home', {
    delay: 40,
    duration: 1500,    
    opacity:0,
    reset: false,
    scale:0,
});


$('.owl-carousel.marcas-home').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText: ["<img src='img/icon-left-marca-home.svg'>","<img src='img/icon-right-marca-home.svg'>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})

// INPUT FILE 
function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

// ABRIR CON UN CLICK EL MENU MOVIL 
$(document).ready(function(){
  $('.ui-box-icon-menu-movil').click(function(){
    $('.ui-box-menu-movil').addClass('mostrar');
  })
});

// CERRAR CON UN CLICK EL MENU MOVIL
$(document).ready(function(){
  $('.ui-box-logotipo-icon-movil .ui-icon').click(function(){
    $('.ui-box-menu-movil').removeClass('mostrar');
  })
});