/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function unaVar ()
{
    var teorias = new claseMatSim();
    var teos= teorias.unaEc();
   // var teos = materiaSimultanea(0);
    var teo = teos.teo;
    
  
   
    plantilla();
    
    $("#desa").append(teo);
     $("#boit2").empty();
            $("#desa").append("<div id ='boit2'>");
           $("#boit2").append("<div id ='bon2'><span id ='ote2'>Actividad de aprendizaje</span>");
           $("#ote2").css({"color":"white"});
            $("#bon2").css({"background":"gray"});
                    
           $("#bon2").click(function(){
              una();
           });
    
 }
    
    function una()
    {
        
        plantilla();
       var teorias = new claseMatSim();
    var teos= teorias.unaEc(); 
      var eje  = teos.datos();
    
    var act = teos.acti;
    var pa = teos.pasos;
 
    var cajo = new caja();
    var caj = cajo.datos2(eje, "e");
    
    caj[0][0] = act+caj[0][0];
    caj[0][1] =" = "+caj[0][1];
     caj[1][1] =" = "+caj[1][1];
      caj[2][1] =" = "+caj[2][1];
    valida(0, eje, 0, caj, una, "e", "","",pa);
    
      $("#link").css({"border-style": "dotted"});
   $("#recht").css({"border-style": "dotted"});
 }
   
