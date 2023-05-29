/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function puntoPendiente()
{
    var tet = materia(1);
    
    var teo = tet.teo;
    
   
     
   
    plantilla();
    
  
    
     $("#desa").append(teo);
     colorLetra();
     
      $("#boit2").empty();
            $("#desa").append("<div id ='boit2'>");
           $("#boit2").append("<div id ='bon2'><span id ='ote2'>Actividad de aprendizaje</span>");
           $("#ote2").css({"color":"white"});
            $("#bon2").css({"background":"gray"});
                    
           $("#bon2").click(function(){
               actividad();
           });
     
}

function actividad()
{

   
     plantilla();
       
    
     var tet = materia(1);
   
      var teo = tet.Actividad;
      
      
      var dat = tet.datos();
      
      var dat3 = teo.replace("#x1",dat[0]);
      var dat2 = dat3.replace("#y1",dat[1]);
      teo= dat2.replace("#m",dat[2]);
     
      $("#desa").append(teo+"<br><br>");
      
      var sol = tet.solucion(dat);
      
     
      var pasos = tet.pasos;
      
      var cajo = new caja();
      
      var caj = cajo.datos2(sol, "b");
      
       
      var tab ="<table>";
      
      tab = tab + "<tr>";
      tab = tab+ "<td>"+pasos+"</td>";
      tab = tab + "<td>"+sol[0][0]+" "+sol[0][1]+" "+sol[0][2]+"</td>"+"</tr>"+"</table>";
      
       caj[0][0] = "<span class = 'x1'>x<sub>1</sub></span> = "+caj[0][0]+ "<br>";
       caj[0][1] = "<span class = 'y1'>y<sub>1</sub></span> = "+caj[0][1]+ "<br>";
       caj[0][2] = "<span class = 'm'>m</span> = "+caj[0][2]+ "<br><br>";
       caj[1][0] = "Reemplace (mire el lado izquierdo): "+caj[1][0]+ "<br>";
       caj[2][0] = "Escriba la ecuación: "+caj[2][0]+ "<br><br>";
   
    var vx ="<input type ='text' value='x' class ='v'>";
    var vy ="<input type ='text' value='y' class ='v'>";
    
         
         caj[3][0] = vx+vy+"<br>"+caj[3][0];
         caj[3][1] =caj[3][1]+"<br>";

         //  caj[3][2] =   caj[3][1] =    caj[3][3] = 
       var ret = tet.reto();
         
               
          validaPunPen(0, sol, 0, caj, actividad, "b", ret,"",pasos);
          
           // $(".filCol").css({"width":"8em"});
            $(".v").css({"width":"4em"});
          $("#link").css({"width":"30em"});
          $("#recht").css({"width":"30em"});
          
          $(".x1").css({"color":"green"});
          $(".y1").css({"color":"red"});
          $(".m").css({"color":"orange"});
          
         
          
         
}

function grafica(sol)
{
       var pu= reemplazoEcuacion(sol[2][0],-100);
          
                   
           var punt =[-100, pu];
        
       pu= reemplazoEcuacion(sol[2][0],100);
        
       var punt2 =[100, pu];
       
        pu= reemplazoEcuacion(sol[2][0],0);
       
       var punt3 =[0,pu];
       
         
            pu= reemplazoEcuacion(sol[2][0],20);
            
         var punt4 =[sol[3][2],0];//
        
       
          
           canvas(punt, punt2, sol[2][0],punt3, punt4);
          
       
       
}

function validaPunPen(tour, mate, k, caj, func, lid, ret,sig,retIsq)
{
  
    
           
            // $("#boit").empty();
              // $("#desa").append("<div id ='marco"+tour+"'>")   ;         
   $("#desa").append("<table><tr><td><div id ='link"+tour+
                           "'></td><td><div id ='recht"+tour+"'></td></tr></table>");
                   $("#desa").append("<div id ='botones'>");
           //border-style
           // $("#marco"+tour).css({"border-style":"dashed"});
            $("#link"+tour).append(retIsq[tour]);
          
             $(".x1").css({"color":"green"});
          $(".y1").css({"color":"red"});
          $(".m").css({"color":"orange"});
           $(".b").css({"color":"blue"});
             var j=0;
              for(var i=0;i<mate[tour].length;i++)    
              {
                $("#recht"+tour).append(caj[tour][i]) ; 
                j++;
              
              }
           
                $(".filCol").css({"width":sig+"em"});
                  $(".tem").css({"width":sig+"em"});
            $("#recht"+tour).append("<br>") ;
                      
              // $("#recht"+tour).append("<div id ='boit'>");
          
        
         var botO = new  botValidacion("id"+tour,tour);
           var bot = botO.crearBot(); 
            $("#botones").empty();
             $("#botones").append(bot);
           $("#link"+tour).css({"width":"30em", "border-right":"1px solid orange"});
           $("#recht"+tour).css({"width":"30em"});
             $("#botones").css({"position":"absolute", 
                                 "top":$("#desa").height(),
                                  "border":"1px solid orange"});
     $("#id"+tour).click(function(){
       
       botO.botFilaConst(mate[tour],lid,(mate.length-1),tour);
         var ale =botO.error();
         
                     
         if(ale ===0)
         {
              var res =botO.respuestas();
              var remal="";
                $("#reta").empty(); 
                  var reta ="<div id = 'reta'>";
                    $("#recht"+tour).append(reta);
                  for (var t=0;t<res.length;t++)
                  {
                    remal = remal +""+ret[tour][res[t]].malo;
                  }
                
                 // $("#reta").append(remal);
             // alert("ale = "+ale+" men  = "+ botO.respuestas());
         }
         
        alert("Por fuera tour = "+tour+"  mate.length-1 "+(mate.length-1)+ " ale "+ale);
       if(ale === 1)
       {
            $("#reta").empty(); 
            tour++;
           
            validaPunPen(tour, mate, k, caj, func, lid, ret,sig,retIsq);
            
           
       }
       
       else if(ale ===2)
       {
          
            var tust= tour.toString();
            var mast= (mate.length-1).toString();
             if(tust ===mast)
            {
             
                $("#desa").append("<input type = 'button' id='graf' value='Presiones para ver gráfica'>");
                $("#graf").click(function(){
                    grafica(mate);;
                });
            }
            $("#reta").empty(); 
           k++;
           tour =0;
           
            $("#boit").empty();
              $("#botones").append("<div id='boit'>");
             
            //$("#recht"+tour).append("<div id ='boit'>");
           $("#boit").append("<div id ='bon'><span id ='ote'>Pulse para hacer otro ejercicio</span>");
           $("#ote").css({"color":"white"});
            $("#bon").css({"background":"gray"});
                    
           $("#bon").click(function(){
           
            
               func(mate);
               
           });
         
       }
   });//botón
               
      $(".filCol").keypress(function(e){
               if(e.keyCode ===13) 
               {
                  
                   var atr = $(this).attr("id");
                  
                   var inic = atr.substring(1);
                   var ij = inic.split("_");
                   
                   var i = parseInt(ij[0]);
                   var j = parseInt(ij[1]);
                   
                   
                   var sis =mate[i][j]; //caw[inic].toString();
                   var user =$("#"+atr).val();
                   var nu =parseInt(inic);
                   
                   $("#reta").empty(); 
                  var reta ="<div id = 'reta'>";
                  
                  $("#recht"+tour).append(reta);
                  
                  var color =["orange"," gray", "blue", "red", "green","maroon","purple","olive"];
                  
                  var co = Math.floor(Math.random()*9);
                  
                  $("#reta").css({"border":color[co],"border-style":"dotted","margin-left":"10px"});
                 // element.style["margin-left"] = "10px";
              
                   
                   if(sis.toString() ===user)
                   {
                         $("#reta").append(ret[i][j].bueno);
                   }
                   else
                   {
                       
                         $("#reta").append(ret[i][j].malo);
                      
                   }
                  
                   
               }//13
               // $(".filCol").css({"width":"1.8em"});
            });//$(".filClo")
          
                       
}//validar
  
  

