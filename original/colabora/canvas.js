/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function canvas(x,y, so,b,cm)
{
    var can = '<canvas id="myCanvas" width="400" height="400" style="border:1px solid #000000;">';
    
    $("#desa").append(can);
    var c = document.getElementById("myCanvas");
              var ctx = c.getContext("2d");
              
              var ta = $("#myCanvas").width();
              
             
              var tam = ta/2;
              
              //Línea vertical
              
               var ta2 = $("#myCanvas").height();
               var tam2 = ta2/2;
              ctx.moveTo(tam, 0);
              ctx.lineTo(tam, ta2);
              
               // Línea horizontal
              var tac = tam2/2;
                ctx.moveTo(0, tam2);
                ctx.lineTo(ta, tam2);
                
                ctx.font = "8px Arial";
                ctx.fillText("0, 0", tam, tam2+10);    
                
                //Extremo de la línea
                
                var fac=1.5;
                var x1 = tam + x[0]*fac;
                var y1 =  tam2- x[1]*fac;
                
               var x2 = tam + y[0]*fac;
               var y2 = tam2 - y[1]*fac ;
               
                ctx.font = "20px Arial";
               
                ctx.fillText(so, 250,50);   
                              
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);   //punto recibido
                
                 var x3 = tam + b[0]*fac;
                 var y3 = tam2 - b[1]*fac ;
              
                 
                 var y4 = tam2 - cm[1] ;
                 
                 
                 
                   ctx.font = "12px Arial";
                    ctx.fillStyle = "red";
                 
                   var tc =b[1].toString();//b[0].toString()+", "+
                     var tc2 =cm[0].toString();
               
                ctx.fillText(tc, x3-10,y3);
                    alert("cm0 = "+cm[0]);
                 var cm0 =cm[0];
                 cm0 =fracDecimal(cm0);
                
                cm0 = 1.7*cm0;
                 var x4 = parseInt(tam) + parseInt(cm0);
                 
                 alert("x4 = "+x4+ " cm0= "+cm0+ " y4 = "+y4);
                 
                  ctx.fillStyle = "green";
                             
                  ctx.fillText(tc2, x4,200);  
                 
                 
                 // var x2 = tam + y[0];
              // var y2 = tam2 - y[1] ;
                ctx.stroke();
}//

function fracDecimal(fraDec)
{
   var frast =fraDec.toString();
    var sle = frast.indexOf("/");
     var dis;
    if(sle !==-1)
    {
       var sl = fraDec.split("/");
       var slSt = parseInt(sl[0]);
       var slSt2 = parseInt(sl[1]);
   
       dis = slSt/slSt2;
       dis = Math.floor(dis);
    }
    else
    {
       
        dis=parseInt(fraDec);
    }
   
  
    return dis;
    
}
