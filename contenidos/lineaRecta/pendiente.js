/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recta()
{ 
    // $("#mea").css({"display":"none"});
    
     
    var tet = materia(0);
    
    var teo = tet.teo;
    
    
    
 //  $("#mea").empty();
   
    // $("#mea").css({"display":"none"});
    plantilla();
  
    
     $("#desa").append(teo);
    
      $("#boit2").empty();
            $("#desa").append("<div id ='boit2'>");
           $("#boit2").append("<div id ='bon2'><span id ='ote2'>Actividad de aprendizaje</span>");
           $("#ote2").css({"color":"white"});
            $("#bon2").css({"background":"gray"});
               
           $("#bon2").click(function(){
                
               pendiente();
           });
    
    
   
}

function pendiente()
{
   
    plantilla();
    var tet = materia(0);
    var conte =tet.datos.length;
    
     var tour= foo(conte);
    
       var resu =new Array(1);
    
    resu[0] = new Array(1);
  
   
    //var puntos = [5,10];
    
  $("#desa").append(tet.acti[tour]);
  
     
    resu[0][0] = tet.pendiente(tet.datos[tour]);  
  
    
       
    var cajo = new caja();
  
    var caj = cajo.datos2(resu, "a");
    
  caj[0][0] = "Pendiente = "+ caj[0][0];
  
   var ret=tet.reto();
      
   valida(0, resu, 0, caj, pendiente, "a", ret,"",tet.paso);
   $("#link").css({"position":"absolute","left":"0", "top":"18em"});
     
     $("#recht").css({"position":"absolute","left":"42em", "top":"18em"}); 
      $(".filCol").css({"width":"6.8em"});
      tour++;
      
     
      $("#boit3").empty();
            $("#desa").append("<div id ='boit3'>");
           $("#boit3").append("<br><br><br><br><div id ='bon3'><span id ='ote3'>Línea recta</span>");
           $("#ote3").css({"color":"white"});
            $("#bon3").css({"background":"gray"});
                    
           $("#bon3").click(function(){
               recta();
           });
}

function foo(cont) {

    if( typeof foo.counter === 'undefined' ) {
        foo.counter = 0;
    }
    if(foo.counter===cont)
    {
        foo.counter = 0;
    }
   return  foo.counter++;
   // document.write(foo.counter+"<br />");
}