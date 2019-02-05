/*Asignar el evento click:
            *input(listaGeneral) => crearJuegoLista
            *input(listaAnual) => asignarListaYear
            */
           $(function(){
            $("input[name='listaGeneral']").on("click", crearJuegoLista);
            $("input[name='listaAnual']").on("click", asignarListaYear);
           });
      
            /*
            *Recorre el array asociativo juegos y crea un nuevo elemento de la lista
            * en el div de Listado de juegos general.
            * Asocia a ese elemento de la lista (li) el año del juego usando $.fn.data
            */
            function crearJuegoLista(){
              var juegos = {
                'Days Gone':'2018',
                'Far Cry 5':'2018',
                'Monster Hunter: World':'2018',
                'Assassins Creed Origins':'2017',
                'Horizon Zero Dawn':'2017',
                'Destiny 2':'2017',
                'Dark Souls III':'2016',
                'Final Fantasy XV':'2016'
              };
              //tu código empieza aquí
             for(var nombre in juegos){
               $("<li>").data("year", juegos[nombre]).text(nombre).appendTo($("ul:first"));
             }
             //$("<li>").data("year", juegos[nombre]).text(nombre).appendTo($("ul:first"));
             //$.data()
             //$("ul").eq(0).append($("<li>").text(nombre+": "+juegos[nombre]));

            }
      
            /*
            *Recorre la lista general y consultando la información guardada en data
            * de los elementos crea un nuevo elemento en la lista del año que toque
            */
            function asignarListaYear(){

                $("li").each(function(index){
                  if($(this).data("year")=="2016"){
                    $("<li>").text($(this).text()).appendTo($("span:contains('2016')").parent().parent().find("ul"));
                  }
                  if($(this).data("year")=="2017"){
                    $("<li>").text($(this).text()).appendTo($("span:contains('2017')").parent().parent().find('ul'));
                  }
                  if($(this).data("year")=="2018"){
                    $("<li>").text($(this).text()).appendTo($("span:contains('2018)").parent().parent().find("ul"));
                  }
                });
              }