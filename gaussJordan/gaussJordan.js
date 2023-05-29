/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class Jordan{
   
     gaussJordan()
   {
      plantilla();
       var teo = new Gauss();
      
        var ecos= teo.gauss();
        var ec = ecos.solu;
        var teo = ecos.teo;
        var pasos = ecos.paso;
        $("#desa").append(teo);
        
         $("#boit5").empty();
            $("#desa").append("<div id ='boit5'>");
           $("#boit5").append("<div id ='bon5'><span id ='ote5'>Actividad de aprendizaje</span>");
           $("#ote5").css({"color":"white"});
            $("#bon5").css({"background":"gray"});
               
           $("#bon5").click(function(){
               alert("Hola");
              this.actividadAprendizaje();
              
           });
        
        
   }//gaussJordan
   actividadAprendizaje()
        {
          alert("Hola 2");
           plantilla();
              var teo = new Gauss();
      
        var ecos= teo.gauss();
        var ec = ecos.solu;
        var teo = ecos.teo;
        var pasos = ecos.paso;
           
             $("#desa").append("<br><br><b>Actividad de aprendizaje</b><br><br>"+
                          "Dado el sistema de ecuaciones<br><br>");
        for(var k=0;k<ec.length;k++)
        {
           for(var j=0;j<ec[k].length;j++)
           {
             $("#desa").append(ec[k][j]);
           }
            $("#desa").append("<br>");
       
      }
    
      $("#desa").append("<br>"+ecos.actividad);        
    var rt=[];
    rt[0] ="";
    var sot =[];   
     var num = ecos.ma;
                            
           
            var i =parseInt(pasos[0][1]);
            var j =parseInt(pasos[0][0]);
         
          var caj =new Array (num.length);
           for(var x=0;x<num.length;x++)
           {
               caj[x] = new Array(num[x].length);
           }
         
           for(var x=0;x<num.length;x++)
           {
              for(var y=0; y <num[x].length;y++)
              {
                 
                  if (isNaN(i))
                  {
                      if(x ===(j-1))
                      {
                           //alert("j = "+j+ " num[x][y]= "+num[x][y]);
                           caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = ''>"; 
                      }
                      else
                      {
                           caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = '"+num[x][y]+"'>";
                      }
                  }//is<nan
                  
              else
              { 
                  if(x===(i-1) || x ===(j-1))
                  {
                      caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = ''>"; 
                     
                       //$("#desa").append();
                  }
                  else
                  {
                        caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = '"+num[x][y]+"'>";
                
                  }
                 // alert("i = "+i+ " j = "+j+ " caj["+x+"]["+y+"] "+caj[x][y]);
                }
                // $("#desa").append(num[x][y]); 
              }
            // $("#desa").append("<br>"); 
          }
        
       $("#desa").append("<div id ='link'>");
         $("#desa").append("<div id ='recht'>");
         
        
            for(var x=0;x<caj.length;x++)
           {
              for(var y=0; y <caj[x].length;y++)
              {
                                  
                 $("#recht").append(caj[x][y]); 
              }
             $("#recht").append("<br>"); 
          }
          $("#link").append("<br><br>"+ecos.men); 
          $(".filCol").css({"width":"3em"});  
           $("#recht").css({"position":"absolute","left":"33em"});
         
         $(".filCol").keypress(function(e){
             if(e.keyCode ===13)
             {
                 var atr = $(this).attr("id");
                 var op = atr.split("_");
                 var k= op[0].substring(1);
                 var c = op[1];
                  var sis =num[k][c].toString(); //caw[inic].toString();
                   var user =$("#"+atr).val();
                   if(sis ===user)
                   {
                        alert(num[k][c]+" atributo de caja = "+atr);
                   }
                   else
                   {
                        alert(" No es la respuesta correcta. "+num[k][c]);
                   }
                
                // alert("#"+atr).append();
             }
             
         });
        
         var botO = new  botValidacion("id"+0,0);
            var bot = botO.crearBot(); 
            $("#desa").append(bot);
            boton (num,0,botO);
        }
       
  
}
function gaussJordan()
   {
      this.teor = function()
      {
          plantilla();
         var teo = new Gauss();
      
        var ecos= teo.gauss();
        var ec = ecos.solu;
        var teo = ecos.teo;
        var pasos = ecos.paso;
        $("#desa").append(teo);
        
         $("#boit5").empty();
            $("#desa").append("<div id ='boit5'>");
           $("#boit5").append("<div id ='bon5'><span id ='ote5'>Actividad de aprendizaje</span>");
           $("#ote5").css({"color":"white"});
            $("#bon5").css({"background":"gray"});
               
           $("#bon5").click(function(){
               
              actividadAprendizaje();
           }); 
      };
     
     
        
       function  actividadAprendizaje()
        {
            plantilla();
              var teo = new Gauss();
      
        var ecos= teo.gauss();
        var ec = ecos.solu;
        var teo = ecos.teo;
        var pasos = ecos.paso;
           
             $("#desa").append("<br><br><b>Actividad de aprendizaje</b><br><br>"+
                          "Dado el sistema de ecuaciones<br><br>");
        for(var k=0;k<ec.length;k++)
        {
           for(var j=0;j<ec[k].length;j++)
           {
             $("#desa").append(ec[k][j]);
           }
            $("#desa").append("<br>");
       
      }
    
      $("#desa").append("<br>"+ecos.actividad);        
    var rt=[];
    rt[0] ="";
    var sot =[];   
     var num = ecos.ma;
                            
           
            var i =parseInt(pasos[0][1]);
            var j =parseInt(pasos[0][0]);
         
          var caj =new Array (num.length);
           for(var x=0;x<num.length;x++)
           {
               caj[x] = new Array(num[x].length);
           }
         
           for(var x=0;x<num.length;x++)
           {
              for(var y=0; y <num[x].length;y++)
              {
                 
                  if (isNaN(i))
                  {
                      if(x ===(j-1))
                      {
                           //alert("j = "+j+ " num[x][y]= "+num[x][y]);
                           caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = ''>"; 
                      }
                      else
                      {
                           caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = '"+num[x][y]+"'>";
                      }
                  }//is<nan
                  
              else
              { 
                  if(x===(i-1) || x ===(j-1))
                  {
                      caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = ''>"; 
                     
                       //$("#desa").append();
                  }
                  else
                  {
                        caj[x][y]="<input type ='text', id ='h"+x+"_"+y+"' class ='filCol'"+
                                     " value = '"+num[x][y]+"'>";
                
                  }
                 // alert("i = "+i+ " j = "+j+ " caj["+x+"]["+y+"] "+caj[x][y]);
                }
                // $("#desa").append(num[x][y]); 
              }
            // $("#desa").append("<br>"); 
          }
        
       $("#desa").append("<div id ='link'>");
         $("#desa").append("<div id ='recht'>");
         
        
            for(var x=0;x<caj.length;x++)
           {
              for(var y=0; y <caj[x].length;y++)
              {
                                  
                 $("#recht").append(caj[x][y]); 
              }
             $("#recht").append("<br>"); 
          }
          $("#link").append("<br><br>"+ecos.men); 
          $(".filCol").css({"width":"3em"});  
           $("#recht").css({"position":"absolute","left":"33em"});
         
         $(".filCol").keypress(function(e){
             if(e.keyCode ===13)
             {
                 var atr = $(this).attr("id");
                 var op = atr.split("_");
                 var k= op[0].substring(1);
                 var c = op[1];
                  var sis =num[k][c].toString(); //caw[inic].toString();
                   var user =$("#"+atr).val();
                   if(sis ===user)
                   {
                        alert(num[k][c]+" atributo de caja = "+atr);
                   }
                   else
                   {
                        alert(" No es la respuesta correcta. "+num[k][c]);
                   }
                
                // alert("#"+atr).append();
             }
             
         });
         //  var botO = new  botValidacion("id"+tour,tour);
         //   botO.botFilaConst(mate[tour],lid,(mate.length-1),tour);
           
       /*  $("#botones").empty();
         $("#desa").append("<div id ='botones'>");
           $("#botones").append("<input type ='button' id ='bot' value ='Pulse para hacer otra actividad'>");
         $("#bot").click(function(){
             
            
         });*/
         var botO = new  botValidacion("id"+0,0);
            var bot = botO.crearBot(); 
            $("#desa").append(bot);
            boton (num,0,botO);
        }
        
        this.acto = function()
        {
            actividadAprendizaje();
        };
       
   }//gaussJordan
  
  function boton (mate, tour, botO)
  {
      
     
        
        //botO.bidi(mate);
       $("#id"+0).click(function(){
      
     var er =  botO.bidi(mate);
      
    if(er ===1)
       {
           
           var joro = new gaussJordan();
           
            
           
            $("#reta").empty(); 
           //k++;
           tour =0;
           $("#desa").append("<div id ='botones'>");
           
            $("#boit").empty();
              $("#botones").append("<div id='boit'>");
             
            //$("#recht"+tour).append("<div id ='boit'>");
           $("#boit").append("Muy bien<br><div id ='bon'><span id ='ote'>Pulse para hacer otro ejercicio</span>");
           $("#ote").css({"color":"white"});
            $("#bon").css({"background":"gray"});
                    
           $("#bon").click(function(){
           
             joro.acto();
            // actividadAprendizaje();
               //func(mate);
               
           });
         
       }
       else
       {
           alert("Se presentaron errores. Coloque el curso sobre las cajas de textos con fondo"+
                   " y corrija los errores.");
       }
   });//botón
    
  };