/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function menuSimul()
{
   var mensi = "<li id='u_0' class ='una'>EcuaciónUnaVariable</li>" +
               "<li id='u_1' class ='una'>EcuaciónDosVariables</li>"+
                "<li id='u_2' class ='una'>EcuaciónTresVariables</li>"+
                 "<li id='u_3' class ='una'>GaussJordan</li>";
       
       $("#mea").empty();
       $("#men").append("<div id ='mea'>");
       
       
       $("#mea").append(mensi);
       
        
    //$("#mea").append("<br>"+mea);
  $("li.una").css({"display":"block"});
     $(".una").css({"background":"gray", "width":"11.5em",
                   "color":"#ccffcc"});
    $(".una").hover(function(){
  $(this).css("background-color", "orange");
  }, function(){
  $(this).css("background-color", "grey");
});

    var func=[];
    $(".una").click(function(){
        
        var atr = $(this).attr("id");
        var op= atr.split("_");
      
       func[0] = function()
       {
           unaVar();
       };
       func[1] = function()
       {
           dosEcua();
       };
       func[2] = function()
       {
           tresEcua();
       };
        func[3] = function()
       {
         
         gaussJordan();
           
       };
       
       
       func[op[1]]();
          
        
    });
       
}


class Car {
  constructor(name, year) {
    
    this.name = name;
    this.year = year;
  }
  metodo()
  {
        alert("name nuevo = "+this.name);
       return this.name ;
  }
   metodo2()
  {
        alert("name nuevo = "+this.name);
        return this.year ;
  }
  metodo3()
  {
     
       var numo = new generaEjercicios(2);
      
       var ec=numo.displayEc(); 
       
      
       
       var sis =[ec[0],ec[1]];
       return sis;
   }
}