/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function plantilla()
{
     //$("#mea").empty();
     // document.getElementById("mea").innerHTML ="";
      
    $("#desa").empty();
   $("body").append("<div id = 'desa'>") ;
    $("#desa").css({"width":"60em",
                     "height":"30em",
                     "border":"1em", 
                     "border-style":"dotted",
                     "margin-left":"16em",
                     "position":"absolute",
                     "top":"2em"});
}
function colorLetra()
{
     $(".y").css({"color":"red"});
     $(".x").css({"color":"green"});
     $(".b").css({"color":"blue"});
     $(".m").css({"color":"orange"});
     $(".y1").css({"color":"#ff9999"});
     $(".x1").css({"color":"#99ff99"});
       
        $(".y2").css({"color":"#ff5555"});
  $(".x2").css({"color":"#99ff22"});
    // color:#99ff99                       #ff6699
}