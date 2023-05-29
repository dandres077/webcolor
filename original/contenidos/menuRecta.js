/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function menuRecta()
{
   
   
    var mea ="<ul><li id ='r_0' class ='mei'>Pendiente</li>"+
            "<li class ='mei' id='r_1'>EcuacionPuntoPendiente</li>"+
            "<li class ='mei' id='r_2'>EcuaciónDosPuntos</li>"+
            "<li class ='mei' id='r_3'>Paralelas y perpendiculares</li></ul>";
    
     $("#mea").empty();
    var op;
   $("#men").append("<div id ='mea'>");
  
 
    $("#mea").append(mea);
    $(".mei").css({"background":"gray", "width":"11.5em",
                   "color":"#ccffcc"});
    
    $("li.mei").css({"display":"block"});
    
    var func = [];
    $(".mei").click(function(){
      
       var at = $(this).attr("id");
       
       op = at.split("_");
      
       func[0] = function()
       {
           recta();
            
       };
       func[1] = function()
       {
           
           puntoPendiente();
       };
        func[2] = function()
       {
           ecuacionConDosPuntos();
       };
        func[3] = function()
       {
           paralelaPerpendicular();
       };
       
       func[op[1]]();
    });
    
     $("li").css({"list-style-type":"none"}); 
  
    $(".mei").hover(function(){
  $(this).css("background-color", "orange");
  }, function(){
  $(this).css("background-color", "grey");
});


    return 0;
    
 /*  $("li").hover(function(){
  $(this).css("background-color", "orange");
  }, function(){
  $(this).css("background-color", "grey");
});*/
}
