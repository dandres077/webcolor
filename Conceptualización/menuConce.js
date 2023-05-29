/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function menuConce()
{
      var mea ="<ul><li id ='m_0' class ='men'>Introducción</li>"+
            "<li class ='men' id='m_1'>Objetivo</li>"+
            "<li class ='men' id='m_2'>Metodología</li>"+
            "<li class ='men' id='m_3'>Prerrequisto</li></ul>";
    
     $("#mea").empty();
    var op;
   $("#men").append("<div id ='mea'>");
  
 
    $("#mea").append(mea);
    $(".men").css({"background":"gray", "width":"11.5em",
                   "color":"#ccffcc"});
    
    $("li.men").css({"display":"block"});
    
   // $("body").append("<div id ='desa'>");
   
    plantilla();
     $("#desa").css({"width":"40em"});
    var func = [];
    $(".men").click(function(){
      
       var at = $(this).attr("id");
       
       op = at.split("_");
      
       func[0] = function()
       {
           
          var intro =  conDesa();
          
          $("#desa").append(intro.intro);
         
       };
       func[op[1]]();     
    });
     
     $("li").css({"list-style-type":"none"}); 
  
    $(".mei").hover(function(){
  $(this).css("background-color", "orange");
  }, function(){
  $(this).css("background-color", "grey");
});
}

