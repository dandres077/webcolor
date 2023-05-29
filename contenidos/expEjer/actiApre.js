/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function actiApre()
{
      /*var x1 = Math.floor(Math.random()*15);
    var y1 = Math.floor(Math.random()*90);
    var m = Math.floor(Math.random()*12);
    var sig = Math.floor(Math.random()*2);
    var sig2 = Math.floor(Math.random()*2);
    var sig3 = Math.floor(Math.random()*2);*/
   
    
    this.dosPuntos =  function()
    {
         var x1 =numeros(20);// Math.floor(Math.random()*15);
         var x2 =numeros(20);
         var y1 =numeros(20);
         var y2 =numeros(20);
         
          var sig = numeros(2);//Signo Math.floor(Math.random()*2);
          var sig2= numeros(2);
          var sig3 = numeros(2);
          var sig4 = numeros(2);
          
          if(sig ===0)
          {
              x1 = -1*x1;
          }
          if(sig2 ===0)
          {
              x2 = -1*x2;
          }
          if(sig3 ===0)
          {
              y1 = -1*y1;
          }
         if(sig4 ===0)
          {
             y2 = -1*y2;
          }
          
         
    var dat = [x1, y1, x2, y2];
  
                 
    return dat;
   
    };//dospuntos
                 
    
    function numeros(k)
    {
        var x = Math.floor(Math.random()*k);
        return x;
        
    }

}

