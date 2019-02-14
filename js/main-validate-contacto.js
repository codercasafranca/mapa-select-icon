/*============================
      FORM CONTACTENOS
 ============================*/
function openConfirmamosDatosContactoEnvio() {
    document.getElementById('confirmamos_contacto_form_enviado').style.display = "block";  
}

$(document).ready(function () {
    $.validator.setDefaults({
        submitHandler: function() {
            openConfirmamosDatosContactoEnvio();
            return true;
        }
    });

    $("#form_contactanos").validate({
        rules: {

            nombres: "required",
            apellidos: "required",              
            ruc: {
                required: true,
                number: true,
            },
            direccion: "required",
            email: {
                required: true,
                email: true,
            },           
            tel: {
                required: true,
                number: true,
            },            
            mensaje: "required",
        },

        messages: {
            nombres: "Ingresa tus Nombres",
            apellidos: "Ingresa tus Apellidos",            
            ruc: {
                required: "Ingresa tu N° de RUC",
                number: "Formato no válido",
            },
            direccion: "Ingresa tu Dirección",
            email: {
                email: "Formato no válido",
                required: "Ingresa tu Email",
            },           
            tel: {
                required: "Ingresa tu N° de Teléfono",
                number: "Formato no válido",
            },            
            mensaje: "Ingresa el contenido correspondiente",
        }
    });
});

function closeConfirmamosDatosContactoEnvio(){
  document.getElementById("confirmamos_contacto_form_enviado").style="display:none;"
}