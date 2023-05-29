/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function valida(tour, mate, k, caj, func, lid, ret,sig,retIsq)
{     
   $("#desa").append("<table><tr><td><div id ='link"+tour+
                           "'></td><td><div id ='recht"+tour+"'></td></tr></table>");
                   $("#desa").append("<div id ='botones'>");
              $("#link"+tour).append(retIsq[tour]);
       
       
             var j=0;
              for(var i=0;i<mate[tour].length;i++)    
              {
                $("#recht"+tour).append(caj[tour][i]) ; 
                j++;
              
              }
             colorLetra();
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
        
       if(ale === 1)
       {
            $("#reta").empty(); 
            tour++;
            valida(tour, mate, k, caj, func, lid, ret,sig,retIsq);
           
       }
       else if(ale ===2)
       {
           
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
  
  

