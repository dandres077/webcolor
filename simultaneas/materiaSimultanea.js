/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function materiaSimultanea(sub)
{
   var json;
  
   switch(sub)
   {
       case 0:
       {
          unaEc();
           break;
       }
       case 1:
       {
         dosEc();
           break;
       }
   }
       
   function unaEc()
   {
    
     var numo = new generaEjercicios(1);
      
     var ec=numo.displayEc();  //nuEjer(4);
  
   json = {"teo":"<b>Ecuaciones con una variable</b><br><br>"+
                 "nx + b = mx + c<br>"+
                 "nx -mx  = c - b<br>"+
                 "n - m)x = c - b<br>"+
                 "x = (c - b) / (n - m)>",
             "acti":"Despeje la variable siguiendo los pasos"+
                     " indicados: " +ec,                 
     datos:function(){
         
       
           var meuo= new resuelveEcuacion();
           
          
           var meu =meuo.unaVariable(ec);
         
           return  meu;
       },
       "pasos":"<br><br>Escriba las variables al lado izquierdo y los números al lado derecho"+
               " del signo igual, cuando cambie término de lado, cámbiele el signo"
     };  //json
    
   }//unaEc
   
  function dosEc ()
   {
             
    var json ={"teo":"<b>Ecuaciones simultáneas</b><br><br>"+
           " Dos o más ecuaciones son simultáneas cuando tienen "+
       " la misma solución.<br><br>"+
       "<b>Eliminación por igualación</b><br><br>"+
        "Para resolver un sistema de ecuaciones por igualación se aplica el principio:"+
       " <br><br>Si X=B y X=C, entonces: B = C",
       "acti":"<br><br> <b>Actividad de aprendizaje</b> <br><br>"+
               "Resuelva el siguiente sistema de ecuaciones:<br><br>",
      datos:function()
      {
           var numo = new generaEjercicios(2);
           var ec=numo.displayEc(); 
          // var sis =[ec[0],ec[1]];
          
     var x=   ecuacionDespejada(ec);
             
            return x;
      },
     
      "pasos":["Despeje a x de las ecuaciones, para cada una utilice la fórmula <br><br>ax + by = c"+
                  " <br><br>Despejando a x:<br><br>,"+
               "x = 1/a(c-by)<br><br>",
               "Multiplique en ambos lados<br><br>",
               "Escriba la variables al lado izquierdo, cambiando el signo de los términos que estén"+
                " a la derecha.  Los números al lado derecho, cambiando el signo de los que vengan"+
                " del lado izquierdo."] 
};//json

alert("*********** datos = "+json.datos());

//return json;

};//dosEc
 
 return json;
}//main