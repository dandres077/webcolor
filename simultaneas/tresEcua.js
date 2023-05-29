/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function tresEcua()
{
   
   plantilla();
   var teorias = new claseMatSim();
   
  
    
    var teos = teorias.tres();
     
      $("#desa").append(teos.teo);
  
    $("#boit3").empty();
            $("#desa").append("<div id ='boit3'>");
           $("#boit3").append("<div id ='bon3'><span id ='ote3'>Actividad de aprendizaje</span>");
           $("#ote3").css({"color":"white"});
            $("#bon3").css({"background":"gray"});
                    
           $("#bon3").click(function(){
              trea();
           });
 
   
}
function trea()
{
     plantilla();
   var teorias = new claseMatSim();
     var teos = teorias.tres();
     
     alert("teos = "+teos);
 
    var ec = teos.ejer();
      var ec = teos.ejer();
       var proc = teos.proc();
       
       var cajo = new caja();
       
       var caj = cajo.datos2(proc,"e");
       
       caj[0][0] = caj[0][0]+"(";
       caj[0][1] =  caj[0][1]+")"+"<br><br>";
       caj[0][2] =  caj[0][2]+"(";
       caj[0][3] =  caj[0][3]+")"+"<br><br>";
    
    var ecus ="";
    
    for(var t=0;t<ec.length;t++)
    {
        ecus=ecus+ec[t]+"<br><br>";
    }
     $("#desa").append("Resuelva el siguiente sistema de ecuaciones<br><br> "+ecus);
      $("#desa").append("Resultaos<br><br> "+proc);
      
      valida(0, proc, 0, caj, trea, "e", "","","");
    
    // alert("proc = "+proc);
     
    
}