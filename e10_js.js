$(function(){
    $('button[name=btnMostrar]').click(mostar);
    $('button[name=btnOcultar]').click(ocultar);
    $('button[name=btnAparecer]').click(aparecer);
    $('button[name=btnDesvanecer]').click(desvanecer);
    $('button[name=btnDeslizarMostrar]').click(mostarDeslizando);
    $('button[name=btnDeslizarOcultar]').click(ocultarDeslizando);
  });

    function mostar(){
        $("p").show(function(){
            alert("Muestra el elemento");
        });

    }

    function ocultar(){
        $("p").hide(function(){
            alert("oculta el elemento");
        });

    }

    function aparecer(){
        $("p").fadeIn(function(){
            alert("el elemento aparece");
        });
    }

    function desvanecer(){
        $("p").fadeOut(function(){
            alert("el elemento desaparece");
        });
    }

    function mostarDeslizando(){
        $("p").show("slow", function(){
            alert("muestra Deslizando");
        });
    }

    function ocultarDeslizando(){
        $("p").slideUp(function(){
            alert("oculta Deslizando")
        });
    }