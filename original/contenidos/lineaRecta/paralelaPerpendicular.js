/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function paralelaPerpendicular()
{
   
     var tet = materia(3);
    
    var teo = tet.teo;
    
   
    plantilla();
    
  
    
     $("#desa").append(teo);
      $("#boit3").empty();
            $("#desa").append("<div id ='boit3'>");
           $("#boit3").append("<div id ='bon3'><span id ='ote3'>Actividad de aprendizaje</span>");
           $("#ote3").css({"color":"white"});
            $("#bon3").css({"background":"gray"});
                    
           $("#bon3").click(function(){
               actividad14();
           });
}
function actividad14()
{
     plantilla();
     var tet = materia(3);
     var opc = tet.opciones;
     var reto = tet.retro;
     var cor = tet.correctas;
     var conte = tet.contenido;
     var i=0;     
     var ret = reto[i].split("*");
     $("#desa").append(conte[i]+"<br><br>"+opc[i]);
     valida();
     function valida()
     {
         $(".pmu").click(function(){
         
         var atr = $(this).attr("value");
          if(atr.toString()===cor[i].toString())
         {
               i++;
               if(i===3)
               {
                    paralelaPer(tet);
                  
               }
               
              $("#desa").append(conte[i]+"<br><br>"+opc[i]);
             valida();
         }
         
         
     });
     }
     
    
     
}

 function paralelaPer()
     {
         plantilla();
          var tet = materia(3);
         var mate = tet.solvente;
         $("#desa").append(tet.contenido2+ " <br><br> solución = "+tet.solvente); 
         
         var cajo = new caja();
         
         var caj = cajo.datos2(mate,"p");
         valida(0, mate, 0, caj, paralelaPer, "p", "","3em","");
         
     }