$(".ui-items-select-mapa-contacto-sedes li").click(function(){
    $("#label-sede").html($(this).html().trim());      

    var location = $(this).data("location");
    if(typeof location === 'string' ) {
        var loc = location.split(",", 2);
        lat = loc[0];
        lng = loc[1];
        refreshMap(lat, lng);
    }
});

$(".ui-item-select-mapa-contacto-sedes").click(function(){
    $(".ui-items-select-mapa-contacto-sedes").slideToggle();
});

$(".ui-items-select-mapa-contacto-sedes li").click(function(){
    $(".ui-items-select-mapa-contacto-sedes").slideUp();
});



