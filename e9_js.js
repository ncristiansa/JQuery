$(function(){
    $("input[name='btn']").on("click", mostrarOcultar);
   });
function mostrarOcultar(){
    $('div').toggle();
}