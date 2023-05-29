/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function materia(tema)
{
    var json;
    
    switch (tema)
    {
        case 0:
        {
            rectas();
            break;
        }
        case 1:
        {
            puntoPend();
            break;
        }
         case 2:
        {
            ecDosPuntos();
            break;
        }
        case 3:
        {
            paraPer();
            break;
        }
    }
    
    function rectas()
    {
        json ={"teo":"<br><br><b>Rectas</b><br><br>\n" +
"" +
"Para hablar de línea recta es necesario conocer el concepto de inclinación.  "+
" En las figuras que se muestran aparecen situaciones en donde se pueden ver varias inclinaciones"+
" o pendientes.\n" +
" La fórmula para su cálculo es:<br><br> \n" +
"                      pendiente=(desplazamiento vertical)/(desplazamiento horizontal )="+
 "(y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub> )=  ∆y / ∆x "+
  "<br><br><img src = 'img/carroSubiendo.jpg'>+<br><br>",
   "acti":["Dada la figura determine la pendiente de la parte del techo que se muestra:<br><br>"+
                "<img src = 'img/casa.png'> <br><b>",
                "Determine la inclinación del arbol <br><br><img src = 'img/mico.jpg'>+<br><br>",
            "Determine la pendiente de la figura:<br><br> "+
                    "<img src = 'img/plano2.png'> <br><b>.",
            "Determine la inclnación de la figura <br><br> "+
                    "<img src = 'img/rectaPlano.png'> <br><b>"],
   "datos":[[5,10],[5,2],[5, 7],[4,7]],
    "paso":["Aplique la fórmula de la pendiente: ", 
             " Recuerde la fórmula de la pendiente."+
                "Mire en la gráfica el desplazamiento en <span id='y'>y = ∆y</span>, y en el"+
                "desplazamiento en <span id='x'>x=∆x</span>.",
               " Observe en la figura a <span id='y'>y = ∆y</span> y <span id='y'>x = ∆x</span>"
            ],
    reto:function()
    {
        var ret = new Array(4);
        ret[0] = new Array(1);
        ret[1] = new Array(1);
        ret[2] = new Array(1);
        ret[3] = new Array(1);
        ret[0][0] = {"bueno":"Perfecto, ese es el valor de la pendiente",
                     "malo":"Recuerde:<br><img src = img/xy.png>"+
                             "<br><br>Nota: Simplifique la fracción"            
        };
          ret[1][0] = {"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"Mire en la gráfica el desplazamiento en <span id='y'>y = ∆y</span>, y en el"+
                "desplazamiento en <span id='x'>x=∆x</span>."+
              "<br><br>Nota: Simplifique la fracción"};
                     
        ret[2][0]  ={"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"Mire en la gráfica el desplazamiento en <span id='y'>y = ∆y</span>, y en el"+
                "desplazamiento en <span>x=∆x</span>."};
    
         ret[3][0]  ={"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"¿Cuántas particiones tiene y? ¿Cuántas particiones tiene x?"+
                      "."};
            
        
        return ret;
    },
   pendiente:function(datos)
   {
       var fracc = new fraccionarios();
       var nu = datos[0].toString();
       var de = datos[1].toString();
       var inv = fracc.invMulti(de);
       var di = fracc.multiFrac(nu,inv);
       return di;
   }
 };//recta

  
}//rectas   color:#99ff99

function puntoPend()
{
    json = {"teo":"<br><b>Ecuación punto pendiente</b><br><br>"+
                "La ecuación de la línea recta tiene la forma:"+
                "<br><br> <span class ='y'>y</span> =<span class ='m'> m</span>"+
                "<span class ='x'>x</span> + <span class ='b'>b</span><br><br>"+
                "Los ejercicios y problemas se resuelven identificando o calculando la "+
                "<span class ='b'>b</span> y la <span class ='m'>m</span>,"+
                " donde la <span class ='b'>b</span> es el punto de corte de la recta sobre"+
                " el eje <b>y</b>, y la "+
                " <span class ='m'><b>m</b></span> es la pendiente.<br><br>"+
             " La ecuación punto pendiente consiste en dado el  un punto (<span class='x1'>x<sub>1</sub>"+
             "</span>, <span class ='y1'>y<sub>1</sub></span>) y la pendiente <span id ='m'>m</span>,"+
             " obtener una ecuación de la recta "+
             " a partir de: <br><br>"+
              " <span class ='y'>y</span> - <span class ='y1'>y<sub>1 </sub></span> = "+
             "<span class = 'm'>m</span> (<span class = 'x'>x</span> -"+
                           " <span class = 'x1'>x<sub>1</sub></span>)"+
             " <br><br>Para hallar la solución se debe identificar el punto <span class ='y1'>y"+
             "<sub>1</sub></span> y "+
              "<span class ='x1'>x<sub>1</sub></span> y luego remplazarlos"+
             " en la fórmula.  Se hace las operaciones algebraicas y finalmente, se"+
             " obtiene la solución"+
             " <br><br>Para hacer la gráfica de la ecuación, la ecuación se iguala a 0"+ 
             "  y el valor obtenido  es el corte en <span class='x'>x</span>."+
            " <br><br> <span class='m'>m</span> <span class='x'>x</span>+ <span class='b'>b</span>=0"+
            " <br> <span class='x'>x</span> = -<span class='b'>b</span> / <span class='m'>m</span>",
            "Actividad":"<b>Actividad de aprendizaje</b><br><br>"+
                    "Dado el punto (#x1, #y1) y la pendiente con valor de #m, halle la ecuación"+
                    " de la recta.",
             datos:function punPen(){
                 
                 var x1 = Math.floor(Math.random()*15);
                 var y1 = Math.floor(Math.random()*90);
                 var m = Math.floor(Math.random()*12);
                 var sig = Math.floor(Math.random()*2);
                 var sig2 = Math.floor(Math.random()*2);
                 var sig3 = Math.floor(Math.random()*2);
                 
                 var signo =[];
                 signo[0]=1;
                 signo[1]=1;
                 signo[2]=1;
                 if(sig ===0)
                 {
                     signo[0]=-1;
                 }
                 if(sig2 ===0)
                 {
                     signo[1]=-1;
                 }
                 if(sig3 ===0)
                 {
                     signo[2]=-1;
                 }
                 
                 x1 = signo[0]*x1;
                  y1 = signo[1]*y1;
                   m = signo[2]*m;
                
                var dat = [x1, y1, m];
                 
                 return dat;
             },//datos
             "pasos":["Relacione la expresión general con el punto dado:<br>(<span class ='x1'>"+
                         "x<sub>1</sub></span>, <span class ='y1'>y<sub>1</sub></span>), "+
                         " y la pendiente <span class ='m'>m</span>",
                 "<br><br>Establezca una correspondencia entre a fórmula y la actividad de aprendizaje:"+
              "<br><br>y- <span class = 'y1'>y<sub>1</sub></span>=<span class ='m'>m</span>"+
                   "(x- <span class ='x1'>x<sub>1</sub></span>)",
                   "<br><br>Reemplace en la fórmula "+
               "y=<span class ='m'>m</span>x+<span class='b'>b</span><br>"+
                "<span class='b'>b</span>= - <span class ='m'>m</span> <span>x<sub>1</sub></span>+<span class ='y1'>"+
                       "y<sub>1</sub></span>",
                  "<br><br>Para hacer la tabla para graficar la ecuación utilice los punto x=0; y=b"+
                   " y el otro punto x = - <span class ='b'>b</span> / <span class ='m'>m</span>; y=0"],
              solucion:function(dat){
                  var solo = new material();
                  
                  var sol = solo.solucion(dat);
                  
                  return sol;
                  
                 
              },
        reto:function()
        {
      
        var ret = new Array(4);
        ret[0] = new Array(3);
        ret[1] = new Array(1);
        ret[2] = new Array(1);
        ret[3] = new Array(2);
        
        ret[0][0] = {"bueno":"Perfecto, estableció bien la relación.",
                     "malo":"Tuvo errores, guíese por lo colores."};
                 
        ret[0][1] = {"bueno":"Muy bien, identificó correctamente el valor.",
                     "malo":"No hizo bien el reemplazo, guíese por lo colores." }; 
        ret[0][2] = {"bueno":"Excelente, el valor está bien escrito.",
                     "malo":"Revise, se presentaron errores. Establezc la relación"+
                             " con base en los colores.  Aplique la fórmula:<br><br>"+
                         " y - <span class ='y1'>y<sub>1</sub></span> = <span class ='m'>m</span>(x - "+
                         "<span class ='x1'>x<sub>1</sub></span>) "}; 
        
          ret[1][0] = {"bueno":"Perfecto, el reemplazo está bien hecho",
                      "malo":"Tuvo errores, guíese por los colores. Revise los signos,"+
                " Recuerde que (-)(-) = +;  (-1)(+); (+)(-) = - y (+)(+) = +"};
                     
        ret[2][0]  ={"bueno":"Muy bien, esa es la ecuación de la recta",
                      "malo":"Se produjeron errores.  Mire al lado izquierdo la ecuación de la recta"+
                ", el ejericicio consiste en identificar la fórmula en el ejercicio dado.  Guíese por"+
                 " los colores."};
    
         ret[3][0]  ={"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"¿Cuántas particiones tiene y? ¿Cuántas particiones tiene x?"+
                      "."};
          ret[3][1]  ={"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"¿Cuántas particiones tiene y? ¿Cuántas particiones tiene x?"+
                      "."};
          
        ret[3][2]  ={"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"¿Cuántas particiones tiene y? ¿Cuántas particiones tiene x?"+
                      "."};
          
       ret[3][3]  ={"bueno":"Perfecto, ese es el valor de la pendiente",
                      "malo":"¿Cuántas particiones tiene y? ¿Cuántas particiones tiene x?"+
                      "."};
          
            
        
        return ret;
    }
  };
}
 function ecDosPuntos()
 {
     
       var dato = new  material();//actiApre();               
               var dat = dato.dosPuntos();
               //dat = [2,3, 2,8];
                 
               var ej = dato.experto(dat);
              
     json ={"teo":"<b>Ecuación de una recta utilizando dos puntos</b><br><br>"+
            "Cuando se dan dos puntos, (<span class ='x1'>x<sub>1</sub></span>,"+
            "<span class ='y1'>y<sub>1</sub></span>) y"+
            "(<span class ='x2'>x<sub>2</sub></span>,<span class ='y2'>y<sub>2</sub></span>),"+
            " para hallar la pendiente se utiliza la fórmula: <br><br>"+
            " m =(y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub> )<br><br>"+
            " Luego se aplica la fórmula del punto pendiente: <br><br>"+
             "y - y<sub>1 </sub>= m (x - x<sub>1</sub>)"+
             "<br><br>Si el valor de x se repite la ecuación es: y = <span class ='x1'>x<sub>1</sub></span>",
              "actividad":"<br><br> <b>Actividad de aprendizaje</b> <br><br>"+
                    "Dado los  puntos ("+dat[0]+","+dat[1]+") y  ("+dat[2]+","+ dat[3]+
                   " ) halle la ecuación"+
                    " de la recta.",
            "pasos":["Reemplace en la ecuación <span class='m'>m</span>= "+
                    "<span class='y2'>(y<sub>2</sub></span> - <span class='y1'>y<sub>1</sub>)</span>/"+
                     "<span class='x2'>(x<sub>2</sub></span> - <span class='x1'>x<sub>1</sub></span>)",
                     "Escriba el valor de  m",
                      "Reemplace  el valor del punto 1, <span class='y'>y</span> - "+
                     "<span class='y1'>y<sub>1</sub></span>= <span class='m'>m</span>"+
                      "(<span class='x'>x</span> -  <span class='x1'>x<sub>1</sub></span>)",
                     "Escriba la ecuación y = mx + b. <br><br>No se olvide de hallar el valor de b."],
            tutor: function(){
             
           
               return ej;
            }//tutor
          }; //json
 }//ecDosPuntos()
 
 function paraPer()
 {
     var actAp = new material();
      var pape = ["paralela", "perpendicular"];
     
     var pe = Math.floor(Math.random()*2);
      var x1 = Math.floor(Math.random()*15);
      var y1 = Math.floor(Math.random()*90);
     
    
     var frac = new fraccionarios();
         
     var act = actAp.punPen();
  
      var inv = frac.invMulti(act[2].toString());
     if(pe ===1)
     {
          var mul = frac.multiFrac("-1",inv.toString());
          act[2] = mul;
     }
     var ejer = actAp.solucion(act);
     
     var act2 =[x1, y1,act[2]];
     
     //+++++++++++++++++++++++  Datos de la solución+++++++++++++++++++++++++++
     
     var jer = actAp.solucion(act2);
     
    var solo = new Array(2);
    solo[0] = new Array(1);
    solo[0][0] = jer[1][0];
     solo[1] = new Array(1);
      solo[1][0] = jer[2][0];
     
     json ={"teo":"<b>Paralelas y perpendiculares</b><br><br>"+
             " Dos rectas son paralelas si tienen la misma pendiente.<br><br>"+
             " m<sub>2</sub>=m<sub>1</sub><br><br>"+
             "Dos rectas son perpendiculares si la pendiente de una es el negativo del inverso "+
             " multiplicativo de la pendiente de la otra.<br><br>"+
             " m<sub>2</sub>= -1 / m<sub>1</sub> ",
             "contenido":["Determine cuál de las opciones contiene rectas paralelas",
              "Señale cuál de las opciones contiene rectas que son perpendiculares",
              "De las opciones, determine las rectas que no son ni perpendiculares, ni paralelas."],
            "correctas":[1, 2,3],
               "opciones" : ["a. y = 2x - 1; y = -2x+5."+
                     "<input type = 'radio' name ='rad' value ='0' class ='pmu'><br>"+
             "b. y = 3x + 1; y = 3x - 7."+
              "<input type = 'radio' name ='rad' value ='1' class ='pmu'><br>"+
             "c. y = 5x - 6; y = -1 1/5 +6."+
              "<input type = 'radio' name ='rad' value ='2' class ='pmu'><br>"+
             "d. y = 2x - 2; y = -9x - x"+
              "<input type = 'radio' name ='rad' value ='3' class ='pmu'><br>",
              "a. y = 1/7 x - 6; y = 7x + 9."+
                     "<input type = 'radio' name ='rad' value ='0' class ='pmu'><br>"+
             "b. y = 3/4 x - 1; y = 4/3 x - 1."+
              "<input type = 'radio' name ='rad' value ='1' class ='pmu'><br>"+
             "c. y = -1/2 x + 7; y = 2x  +3."+
              "<input type = 'radio' name ='rad' value ='2' class ='pmu'><br>"+
             "d. y = 2x - 2; y = -9x - 2"+
              "<input type = 'radio' name ='rad' value ='3' class ='pmu'><br>",
               "a. y = 1/7 x - 6; y = -7x + 9."+
                     "<input type = 'radio' name ='rad' value ='0' class ='pmu'><br>"+
             "b. y = -3/4 x - 1; y = 4/3 x - 1."+
              "<input type = 'radio' name ='rad' value ='1' class ='pmu'><br>"+
             "c. y = 2 x + 7; y = 2x  +3."+
              "<input type = 'radio' name ='rad' value ='2' class ='pmu'><br>"+
             "d. y = 2x - 2; y = -9x - 2"+
              "<input type = 'radio' name ='rad' value ='3' class ='pmu'><br>"
              ],
              "retro":["No es la opción correcta. Revise nuevamente el concepto, "+
                      "  m<sub>2</sub>=m<sub>1</sub><br><br> "+
                      " Identifique a <span id ='m'>m</span> en las ecuaciones.*"+
                      "Perfecto, las ecuaciones presentadas tienen las mismas pendientes.*"+
                      "La opción no es la adecuada, observe las pendientes y lea la definición de."+
                      "de rectas paralelas*",
                       "Tiene errores, analice la definición de rectas perpendiculares. "+
                           " Primero debe identificar las pendientes.",
                       "Está equivocado, fíjese que además de ser inversas las pendientes, una"+
                           " de ellas debe ser negativa.",
                        " Correcto, la pendiente de una de las rectas es la inversa negavtiva "+
                            " de la otra*"+
                        " La opción no es la adecuada. Identifique las pendientes y observen si"+
                        " cumplen los criterios de perpendicularidad."],
            "contenido2":"Dada la ecuación "+ejer[2] + " y el punto ("+x1+", "+y1+
                         " determine una ecuación que sea "+pape[pe]+ " a ésta.",
             "solvente":solo};
 }//paraPer
 

 return json;
}//main


