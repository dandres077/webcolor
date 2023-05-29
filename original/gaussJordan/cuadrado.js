/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function cuadrado()
{

    var dato = new Gauss();
    var dat = dato.cuadradas();

    plantilla();

    $("#desa").append(dat.teo);
    $("#boit5").empty();
    $("#desa").append("<div id ='boit5'>");
    $("#boit5").append("<div id ='bon5'><span id ='ote5'>Actividad de aprendizaje</span>");
    $("#ote5").css({"color": "white"});
    $("#bon5").css({"background": "gray"});

    $("#bon5").click(function () {
        cuadro();
    });
}

function cuadro()
{
    var dato = new Gauss();
    var dat = dato.cuadradas();
    plantilla();

    var ec = dat.sistema;
    var num = dat.num;
     var num2 = dat.num;
   
    var b = dat.b;
    var tablas = dat.tablas;
       
    for (var x = 0; x < ec.length; x++)
    {
         num[x][num.length] = b[x];
       
    }
   
    $("#desa").append("Resuelva el siguiente sistema de ecuaciones: <br><br>");
    for (var x = 0; x < ec.length; x++)
    {

        for (var y = 0; y < ec[x].length; y++)
        {
            $("#desa").append(" " + ec[x][y]);
        }
        $("#desa").append("<br>");
    }
     
    
  $(".te").css({"width":"2.8em"});
  var k=0;
  var cajo = new caja();
 // var caj = cajo.datos2(tablas[k],"g");
  
     var trii = cajo.cajaTri(tablas, "g");
     
   
     
     //trii[0][0][0] =trii[0][0][0];
   
  for (var y = 0; y < trii.length; y++)
        {
            trii[y][trii.length] = "&#9474;"+trii[y][trii.length];
        }
        var tour =0;
         $("#desa").append("<table><tr><td><div id ='link"+
                           "'></td><td><div id ='recht"+"'></td></tr></table>");
       $("#link").css({"width":"30em", "border-right":"1px solid orange"});
           $("#recht").css({"width":"30em", "position":"absolute","left":"30em"});
            // $("#recht").append("<b>Matriz ampliada</b><br><br> ");
                     var oro = dat.ordi;
    var tab=0;
  valGa(0,oro,tablas, 0, trii, cuadro, "g", "","3.3",dat.pasos,tab);
   
   $(".filCol").css({"width":"2.5em"});
  
}
function valGa(tour,oro, mates, k, caji, func, lid, ret,sig,retIsq, tab)
{
    //tab: Distancia entre tablas
  var mate = mates[k];
  var caj = caji[k];
 
    var tou = oro[k][tour];
  
     var botO = new  botValidacion("id"+tour,tour);
           var bot = botO.crearBot(); 
           
             $("#boit").empty();
             
             $("#recht").append("<div id = 'recht"+k+tou+"'>");
              $("#link").append("<div id = 'link"+k+tou+"'>");
              
           // $("#link"+k+tou).append(retIsq[tour]+"Fila "+(tou+1)+" ");
          
             var j=0;
           
             $("#recht"+k+tou).append("&#9474;");
             
             var fi ="";
             
             $("#link"+k+tou).append("<br><br> Escriba la fila "+(tou+1));//retIsq[tour]+
            
              for(var i=0;i<caj[tou].length;i++)    
              {
                 //var j= tou[i];
                  
                 $("#recht"+k+tou).append(caj[tou][i]) ; //"<span id ='caj"+tou+"'>"+
                 //  fi = fi+"<span id ='caj"+tou+"'>"+caj[tou][i];
                 // j++;
              }
            
             // $("#recht"+tou).append(fi);
            
           //  $("#link"+k+tou).css({"position":"absolute","top":tou*2+tab+"em"}); 
              $("#recht"+k+tou).css({"position":"absolute","top":tou*2+tab+"em"});
              
            
               $("#recht"+k+tou).append("&#9474;");
              
            $("#recht"+k+tou).append("<br>") ;
            
           $("#desa").append("<div id ='boit'>");
          $("#boit").append(bot);
          
            $(".filCol").css({"width":sig+"em"});
          
           
             $("#boit").css({"position":"absolute","bottom":"-2em"});
           $(".x1").css({"color":"green"});
          $(".y1").css({"color":"red"});
          $(".m").css({"color":"orange"});
           $(".b").css({"color":"blue"});
          
     $("#id"+tour).click(function(){
     
   
       botO.botFilaConstTree(mate[tou],lid,(mate.length-1),tou,k,tour);
         var ale =botO.error();
         
              
         if(ale ===0)
         {
              var res =botO.respuestas();
              var remal="";
                $("#reta").empty(); 
                  var reta ="<div id = 'reta'>";
                    $("#recht"+k+tou).append(reta);
                  for (var t=0;t<res.length;t++)
                  {
                    remal = remal +""+ret[tour][res[t]].malo;
                  }
               
         }
        
       if(ale === 1)
       {
            $("#reta").empty(); 
            tour++;
            valGa(tour,oro, mates, k, caji, func, lid, ret,sig,retIsq,tab);
           // valida(tour, mate, k, caj, func, lid, ret,sig,retIsq);
           
       }
       else if(ale ===2)
       {
           
            $("#reta").empty(); 
           k++;
          
           tour =0;
            $("#boit").empty();
            $("#desa").append("<div id ='boit'>");
           $("#boit").append("<div id ='bon'><span id ='ote'>Pulse para hacer otra tabla</span>");
           $("#ote").css({"color":"white"});
            $("#bon").css({"background":"gray"});
                    
           $("#bon").click(function(){
           
            if(k <mates.length)
            {
               
                   var an =  parseInt(mate.length)*3;
                 
                $("#recht").append("<span id ='tabla"+k+"'>Tabla "+k+ "</span>");
                tab=an*k;
                
                   $("#tabla"+k).css({"position":"absolute","top":tab-2+"em"});
                 
                 valGa(tour, oro, mates, k, caji, func, lid, ret,sig,retIsq, tab); 
                  
            }
            else
            {
                
                func();
            }
               
               
           });
         
       }
   });//botón
               
      $(".filCol").keypress(function(e){
               if(e.keyCode ===13) 
               {
                  
                   var atr = $(this).attr("id");
                  
                   var inic = atr.substring(1);
                   var ij = inic.split("_");
                   
                   var k = parseInt(ij[1]);
                   var i = parseInt(ij[2]);
                    var j = parseInt(ij[3]);
                   
                   
                   var sis =mate[tou][j]; //caw[inic].toString();
                   alert("sis = "+sis);
                   var user =$("#"+atr).val();
                   var nu =parseInt(inic);
                   
                   $("#reta").empty(); 
                  var reta ="<div id = 'reta'>";
                  
                  $("#recht"+tou).append(reta);
                  
                  var color =["orange"," gray", "blue", "red", "green","maroon","purple","olive"];
                  
                  var co = Math.floor(Math.random()*9);
                  
                  $("#reta").css({"border":color[co],"border-style":"dotted","margin-left":"10px"});
                 // element.style["margin-left"] = "10px";
              
                   
                   if(sis.toString() ===user)
                   {
                         $("#reta").append(ret[tou][j].bueno);
                   }
                   else
                   {
                       
                         $("#reta").append(ret[tou][j].malo);
                      
                   }
                  
                   
               }//13
               // $(".filCol").css({"width":"1.8em"});
            });//$(".filClo")
          
                       
}//validar
 
function masColu()
{
    /*
     *   var dato = new Gauss();
    var dat = dato.cuadradas();
    plantilla();

    var ec = dat.sistema;
     */
     var dato = new Gauss();
      var dat = dato.masColumnas();
      
      var ec= dat.ecuaciones;
     
      var tablas = dat.tablas;
      
      plantilla();
      
     var num = dat.num;
      
    var b = dat.b;
    var tablas = dat.tablas;
    
    alert("en prin tablas = "+tablas);
       
   /* for (var x = 0; x < ec.length; x++)
    {
         num[x][num.length] = b[x];
       
    }*/
   
    $("#desa").append("Resuelva el siguiente sistema de ecuaciones: <br><br>");
    for (var x = 0; x < ec.length; x++)
    {

        for (var y = 0; y < ec[x].length; y++)
        {
            $("#desa").append(" " + ec[x][y]);
        }
        $("#desa").append("<br>");
    }
    $("#desa").append(" tam z = "+tablas.length+" x "+ tablas[0].length+
             " x "+tablas[0][0].length+"<br>");
     
      for(var z=0;z<tablas.length;z++)
      {
            for (var x = 0; x < tablas[z].length; x++)
            {

                for (var y = 0; y < tablas[z][x].length; y++)
                {
                    $("#desa").append(" " + tablas[z][x][y]);
                }
               $("#desa").append("<br>");
          }
           $("#desa").append("<br><br>");
      }
       
  
    
  $(".te").css({"width":"2.8em"});
  var k=0;
  var cajo = new caja();
 // var caj = cajo.datos2(tablas[k],"g");
  
     var caj= cajo.cajaTri(tablas, "h");
     
   
     
     //trii[0][0][0] =trii[0][0][0];
   
  for (var y = 0; y < caj.length; y++)
        {
            caj[y][caj.length] = "&#9474;"+caj[y][caj.length];
        }
        var tour =0;
         $("#desa").append("<table><tr><td><div id ='link"+
                           "'></td><td><div id ='recht"+"'></td></tr></table>");
       $("#link").css({"width":"30em", "border-right":"1px solid orange"});
           $("#recht").css({"width":"30em", "position":"absolute","left":"30em"});
            // $("#recht").append("<b>Matriz ampliada</b><br><br> ");
                     var oro = dat.ordi;
    var tab=0;
  valGa(0,oro,tablas, 0, caj, cuadro, "h", "","3.3",dat.pasos,tab);
   
   $(".filCol").css({"width":"2.5em"});
   
 
 
}