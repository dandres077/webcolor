/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function dosEcua()
{
     
  //var termo= new resuelveEcuacion();

   plantilla();
 var teorias = new claseMatSim();
    
    var teos = teorias.dosEc();
    
   
 
    $("#desa").append(teos.teo);
    
    $("#sus").click(function(){
         dos();
    });
    $("#eli").click(function(){
         nacionTeo();
    });
    
  /*   */
   }//funciton
   
   function dos()
   {
       
      plantilla();
 
    var teorias = new claseMatSim();
    
    var teos = teorias.dosEc();
   
 
       $("#desa").append(teos.sustitucion);
         colorLetra();
       $("#boit2").empty();
            $("#desa").append("<div id ='boit2'>");
           $("#boit2").append("<div id ='bon2'><span id ='ote2'>Actividad de aprendizaje</span>");
           $("#ote2").css({"color":"white"});
            $("#bon2").css({"background":"gray"});
                    
           $("#bon2").click(function(){
             does();
           });
   
    
   // var teos = teorias.dosEc();
        
}

function does()
{
    plantilla();
     var teorias = new claseMatSim();
   
    var teos = teorias.dosEc();
    
    
      var term = teos.datos();
      
      var ecua =teos.ejer();
      var acti =teos.acti;
      
      var acti2 = acti.replace("#ec0",ecua[0]);
       acti = acti2.replace("#ec1",ecua[1]);
      
          
    $("#desa").append(acti);
    
 
    
   var cajo = new caja();
    
    var caj = cajo.datos2(term,"d");
    caj[0][0]= "Despeje la variable x:  "+caj[0][0];
    caj[0][1]= " "+caj[0][1];
    
   //  caj[1][0]= caj[1][0];
     caj[2][0]= "<br><br>"+caj[2][0];
     caj[3][1]= " = "+caj[3][1];
      caj[4][1]= " = "+caj[4][1];
     caj[5][1]= " = "+caj[5][1]+ " = ";
   
  valida(0, term, 0, caj, does, "d", "","",teos.pasos[0]);  //ret, sig,retIsq
  
  $("#link").css({"border-style": "dotted"});
   $("#recht").css({"border-style": "dotted"});
    
 
}

function nacionTeo()
{
   
     plantilla();
  
    var teorias = new claseMatSim();
    
    var teos = teorias.dosEc();
 
       $("#desa").append(teos.eliminacion);
       $("#boit2").empty();
            $("#desa").append("<div id ='boit2'>");
           $("#boit2").append("<div id ='bon2'><span id ='ote2'>Actividad de aprendizaje</span>");
           $("#ote2").css({"color":"white"});
            $("#bon2").css({"background":"gray"});
                    
           $("#bon2").click(function(){
             nationActi();
           });
   
}

function nationActi()
{
    plantilla();
    var teorias = new claseMatSim();
    var teos = teorias.dosEc();
    
    
      var ecua= teos.elimi();
   
      var acti =teos.acti2;
      
    
     // var acti2 = acti.replace("#ec0",ecua[0]);
   //   acti = acti2.replace("#ec1",ecua[1]);
         
       var ec = teos.ejer();   
   // $("#desa").append(acti);
    var ecs ="";
    
    for(var x=0;x<ec.length;x++)
    {
        ecs = ecs + ec[x]+ "<br>";
    }
     $("#desa").append("<br><br>Resuelva el siguiente sistema de ecuaciones:<br><br> "+ecs);
    
      var cajo = new caja();
    
    var caj = cajo.datos2(ecua,"e");
    caj[0][0]= "Escriba la fracción:  "+caj[0][0]+" = ";
       
     caj[1][0]= caj[1][0]+ "(";
     caj[1][1]= caj[1][1]+" = ";
    caj[1][2]= caj[1][2]+")";
    caj[1][3]= caj[1][3]+ "(";
     caj[1][4]= caj[1][4]+ "=";
      caj[1][5]= caj[1][5]+ ")";
       caj[2][0]= caj[2][0]+ "=";
      caj[2][1]= caj[2][1]+ "<br><br>";
       caj[2][2]= caj[2][2]+ "=";
      caj[2][3]= caj[2][3]+ "<br><br>";
   
  valida(0, ecua, 0, caj, nationActi, "e", "","10",teos.pasos[1]);  //ret, sig,retIsq
  
  $("#link").css({"border-style": "dotted"});
   $("#recht").css({"border-style": "dotted"});
  
    
}