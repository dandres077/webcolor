/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class claseMatSim{
  constructor() {
   
  }
  unaEc()
  {
     
       var numo = new generaEjer();
       var ec=numo.unaVariable();  //nuEjer(4);
     
       var json = {"teo":"<b>Ecuaciones con una variable</b><br><br>"+
                 "Para resolver ecuaciones con una variable, como se muestra:<br><br>"+
                 "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"+
                  "nx + b= mx + c<br>"+
                 "Pase los términos que contienen las variables a la izquierda:<br><br>"+
                 "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"+
                 "nx -mx  = c - b<br><br>"+
                 "Factor común: <br><br>"+
                  "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"+
                 "(n - m)x = c - b<br>"+
                 "<br> Despeje a x<br><br>"+
                  "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"+
                 "x = (c - b) / (n - m)",
             "acti":"Despeje la variable siguiendo los pasos"+
                     " indicados: " +ec,   
             "pasos":["Pase los términos que tengan variables al lado izquierdo del signo igual y"+
                      " los que no tengan variable al lado derecho.  Recuerde cambiar los signos.",
                     "Sume los términos semejantes",
                     "Despeje la variable (Si el sistema no tiene solución escriba NF,"+
                             " si la variable no tiene coeficiente numérico vuelva a escribir la respuesta.)."],
        datos:function(){
                         
              var oro = new resuelveEcuacion();
              
               var meu = oro.solUnaVariable(ec);//oro.organizaEcua(ec);
               return  meu;
       }
     };  //json
    return json;
  }//Una 
  dosEc ()
   {
          var ecu;
    var json ={"teo":"<b>Ecuaciones simultáneas</b><br><br>"+
           " Dos o más ecuaciones son simultáneas cuando tienen "+
       " la misma solución. Aquí se explican dos métodos para resolverlas. Dé clic"+
       " sobre alguno de los dos botones para estudiar el método respectivo<br><br>"+
       "<input type ='button' value='Método de sustitución' id='sus'>"+
        "<input type ='button' value='Método de eliminación' id='eli'>",
       "sustitucion":"<b>Método de sustitución</b><br><br>"+
               " Para resolver un sistema de ecuaciones por sustitución "+
       " se procede de la siguiente manera:"+
       "Si se tiene  el sistema de ecuaciones:<br><br>"+
       "a<span class = 'x'>x</span> + b<span class ='y'>y</span> = c <br><br>"+
       "d<span class = 'x'>x</span> + e<span class ='y'>y</span> = f<br><br>"+
       "Se despeja la variable x:"+
       " x = -b/a y + c/a<br><br>"+
       "Se reemplaza en la segunda ecuación: "+
       "d(-b/a y + c) + ey = f<br><br>"+
       " Se multiplica el paréntesis: "+
       " -bd / a y + dc + ey = g"+
       "Se pasan los términos con variables al lado izquierdo y los números al lado derecho."+
       " <br>-bd / a y + ey = f + dc<br><br>"+
       " Si  k = -bd / a + e; g = f +dc  entonces: "+
       " ky = g<br><br>"+
       " Despejando a y: "+
       " y= g / k "+
       " Se reemplaza el valor de y en el primer paso: "+
       " x = -b/a ( g / k) + c"+
       "Se hacen las operaciones y es el valor de la variable x.",
       "eliminacion":"Si tiene el sistema de ecuaciones:<br><br>"+
                  "ax + by = c <br><br>"+
                  "dx + ey = f<br><br>"+
                  "Para eliminar una variable se construye la fracción d / a y se simplifca"+
                  "cuando sea posible; Despues, multiplique la primera ecuación por el numerador (q)"+
                  " de la fracción y la segunda ecuación por el denominador multipliacado por -1"+
                  " (-w);  "+
                  " luego, sume los resultados.<br><br>"+
                   "q(ax + by = c) <br><br>"+
                   "-w(dx + ey = f)<br><br>"+
                   "Al hacer las operaciones, el resultado es:<br><br>"+
                   " -we y = qc - wf<br><br>Luego procede como el caso de sustitución.",
       "acti":"<br><br> <b>Actividad de aprendizaje</b> <br><br>"+
               "Resuelva el siguiente sistema de ecuaciones:<br>"+
               "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "+
               "#ec0<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #ec1<br><br>",
        "acti2":"<br><br> <b>Actividad de aprendizaje</b> <br><br>"+
               "Resuelva el siguiente sistema de ecuaciones:<br>"+
               "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "+
               "#ec0<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #ec1<br><br>",
      datos:function()
      {
        
           var ejo = new generaEjer();
           
           var ec = ejo.masDeUnaVariable(2, 2);
           
           var sol = new soluSimul();
           
          var rem2=  sol.despejeUna(ec);
          
         
          var rem3 = rem2.split("=");
          var rem = "("+rem3[1]+")";
          var remi = sol.reemEcua(rem, ec[1], "x" );
          
                  
          //*********************+ Multiplicación ****************
          var nui =remi.indexOf(")");
          var nu = remi.substring(0,nui+1);
           var nu2 = remi.substring(nui+1);
           
           var pp = nu2.substring(0,1);
           if(pp ==="+")
           {
               nu2 = nu2.substring(1);
           }
           var xo =  new resuelveEcuacion();;
         var xi=  xo.despejaUnaVar(nu2); //ecuacionDespejada(ec);
         
          //var rem = "("+rem3[1]+")";
          var remso = sol.reemEcua("("+xi[1]+")", rem2, "y" );
                                  
          var proo = new multiplicaTerms();
          var pro = proo.display(nu);
          
          var pp = nu2.substring(0,1);
          
          var sig ="+";
          if(pp ==="-")
          {
              sig = "";
          }
        
          var sums =pro+sig+nu2;
                     
          var soli = sol.organizaEcua(sums);
           
           var resp =new Array(4);
           resp[0] = new Array(1);
           resp[1] = new Array(1);
           resp[2] = new Array(1);
           resp[3] = new Array(2);
            resp[4] = new Array(2);
             resp[5] = new Array(2);
           
           resp[0][0] = rem2;
           resp[1][0] = remi;
           resp[2][0] = sums;
           resp[3] = soli[0];
          // resp[3][1] = soli[1];
            resp[4] = soli[1];
           resp[5] = soli[2];
           ecu = ec;
           
            return resp;
      },
      ejer:function()
      {
         return ecu; 
      },
      elimi:function()
      {
           var ejo = new generaEjer();
           
           var ec = ejo.masDeUnaVariable(2, 2);
          //   ec = ["4x+7y=99","2x+3y=45"];
           ecu =ec;
           
         
          // $("#desa").append("Este ecu = "+ecu);
            var xo =  new resuelveEcuacion();
            
           var sol =  xo.porEliminacion(ec); 
        
           return sol;
      },
       "pasos":[["Despeje a x de la primera ecuación, utilice la fórmula <br><br>ax + by = c"+
                  " <br><br>Despejando a x:<br><br>"+
               "x = -b/a + c/a<br><br>",
               "La variable que despejó, Reemplácela en la segunda ecuación<br><br>",
               "Realice la multiplicación.",
               "Escriba la variables al lado izquierdo, cambiando el signo de los términos que vengan"+
                " de la derecha.  Los números al lado derecho, cambiando el signo de los que vengan"+
                " del lado izquierdo.",
                "Sume los términos semejantes.",
                "Despeje la variable.",
               "Reemplace el valor de y",
               " Realice las operaciones."],
               ["Forme la fracción con los términos numéricos de las dos primeras ecuaciones",
               "Multiplique la primera ecuación por el denominador y la segunda por el negativo"+
                   " del numerador",
                " Realice el producto",
               "Haga la suma",
                "Despeje la variable y."]] 
};//json
return json;

};//dosEc
tres()
{
    var numo = new generaEjer();//generaEjercicios(3);
    var ec=numo.masDeUnaVariable(3,3);//numo.displayEc(); 
    
    alert("ec = "+ec);
    var json ={"teo":"<b>Ecuaciones simultáneas con tres variables</b><br><br>"+
           " Para solucionar un sistema de ecuaciones con tres variables por "+
       " eliminación se toman las ecuaciones (1) y (2) y se elimina una variabe. "+
       " Luego se toman las ecuaciones (1) y (3) y se elimina la misma variable<br><br>"+
       " que se eliminó anteriormente.  Con estos dos resultados se procede como en el"+
       " anteriormente estudiado",
       ejer: function(){
         return ec;
       },
       proc: function()
       {
          
         var soliso = new soluSimul();
         var solis = soliso.resuelveTres(ec);
      
         return solis;
       }
   };
   return json;
}//tres

 
}//Main
