/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function menuGauss()
{
      var mea ="<ul><li id ='s_0' class ='mei'>OperacionesFilas</li>"+
            "<li class ='mei' id='s_1'>MatrizCuadrada</li>"+
            "<li class ='mei' id='s_2'>MasFilas</li>"+
            "<li class ='mei' id='s_3'>MasColumnas</li></ul>";
    
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
            var joro = new gaussJordan();
          
           joro.teor();
            
       };
       func[1] = function()
       {
           
           cuadrado();
       };
        func[2] = function()
       {
           ecuacionConDosPuntos();
       };
        func[3] = function()
       {
           masColu();
       };
       
       func[op[1]]();
    });
    
     $("li").css({"list-style-type":"none"});
}
