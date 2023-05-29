/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class Gauss{
    constructor()
    {
           
     }//Constructor
 gauss ()
 {
     var n = Math.floor(Math.random()*3)+2;  //Cantidad filas de la matriz T.
     var m = Math.floor(Math.random()*3)+2;;  //Cantidad de columnas de la matriz T
     var ecu = new generaEjercicios(n,m);
     
     var ecup=[];
      var tem;
      var ti=[];
       for(var t=0;t<ecu.length;t++)
      {
            tem= ecu[t].split("=");
           
           ecup[t] = tem[0];
           ti[t] = tem[1];  //Términos independientes
           
          
      }
     
       
      var sepa = new separaNumLit();
      
      var sep = [];
        for(var t=0;t<ecup.length;t++)
      {
          sep[t] =  sepa.sepTer(ecup[t]);
      }
     //**************************** Matriz de coeficientes tecnológicos ***********************
      var nu = new Array(sep.length);
      
       for(var t=0;t<sep.length;t++)
      {
           
          nu[t] = new Array(sep[t].length);
      }
      
      for(var t=0;t<sep.length;t++)
      {
          for(var r=0;r<sep[t].length;r++)
          {
              nu[t][r] = sepa.sepaNuLi(sep[t][r]);
          }
          
      }
      
     
      var lit =[];
      
      var num = new Array(nu.length);
      for(var t=0;t<nu.length;t++)
      {  
          num[t] = new Array(nu[t].length+1);
      }
  
      for(var t=0;t<nu.length;t++)
      {
          for(var r=0;r<nu[t].length;r++)
          {
              
               num[t][r] = nu[t][r].num;
               
          }
         
      }
      
       for (var x = 0; x < num.length; x++)
      {
         
           num[x][num[0].length-1] = ti[x];
          // alert(" num[x][num[0].length] = "+num[x][num[0].length-1]+ " ti = "+ti);
      }
    
     
       for(var t=0;t<nu[0].length;t++)
      {
          lit[t] = nu[0][t].lite;
      }
      //******************** Transformar Fi ****************
    var filtal =Math.floor(Math.random()*n);
    var filtal2 =Math.floor(Math.random()*n);
    
  
    
    do 
    {
         filtal2 =Math.floor(Math.random()*n);
    }while(filtal ===filtal2);
    
    var k =Math.floor(Math.random()*9+2);
    var sif =Math.floor(Math.random()*2);
    var pas;
    var co;
      var numo = new operacionesFilas();
     var op= Math.floor(Math.random()*3);
    //op =2;
     switch(op)
     {
         case 0:
             {
                 kF();
                 break;
             }
         case 1:
             {
                  kFiFj();
                 break;
             }
         case 2:
             {
                 inter();
                 break;
             }
     }
  
      
    function kF()
    {
       if(sif ===0)  //Convierte a k en negativo
       {
           k = -1*k;
       }
        co = "F<sub>"+(filtal+1)+"</sub> = "+k+  "F<sub>"+(filtal+1)+"</sub>";
   
   
     
     var mul = numo.porEscalar(num[filtal],k);
     
     num[filtal] = mul;
     
    pas = new Array(2);
    pas[0] = new Array(1);
    pas[0][0] = filtal+1;
    
     pas[1] = new Array(1);
      pas[1] = mul;
    }
    function kFiFj()
    {
        var sig ="+";
        
         if(sif ===0)  //Convierte a k en negativo
         {
                 k = -1*k;
                 sig ="";
         }
        co = "F<sub>"+(filtal2+1)+"</sub> = "+k+ "F<sub>"+(filtal+1)+"</sub>"+
                " + "+ "F<sub>"+(filtal2+1)+"</sub>";
        
        num[filtal2] = numo.kFiMasFj(k, num[filtal] , num[filtal2]  );
        pas = new Array(2);
          pas[0] = new Array(1);
           pas[0][0] = filtal2+1;
    
           pas[1] = new Array(1);
           pas[1] = num[filtal2];
           
                   
    }
    function inter()
    {
          co = "F<sub>"+(filtal+1)+"</sub>"+
                " &hArr; F<sub>"+(filtal2+1)+"</sub>";
        
        pas = new Array(3);
         num = numo.intercambio (num, filtal, filtal2);
         
        
        
           pas[0] = new Array(2);
           pas[0][0] = filtal+1;
           pas[0][1] = filtal2+1;
         var min =filtal2;
         var max = filtal;
         
         if(min>max)
         {
            max = filtal2;
            min = filtal;
         }
           pas[1] = new Array(1);
            pas[1]= num[min];
            
             pas[2] = new Array(1);
            pas[2]= num[max];
           
    }
     
     var json;
      json ={"teo":"<b>Operaciones entre filas</b><br><br>"+
           "En un sistema de ecuaciones se pueden aplicar tres operaciones entre"+
           " las filas para su solución. <br><br>"+
           "1.  Se puede multiplicar cualquier fila por una constante y el sistema"+
          " no cambia su solución:  Fi = kFi<br><br>"+
          "2.  A cualquier se le pueden sumar el múltiplo de otra fila sin que el"+
          " sistema cambie su solución: Fi = kFj + Fi <br><br>"+
          "2.  Se pueden intercambiar cualesquiera dos filas sin que el sistema cambie su "+
          " solución: Fi &hArr; Fj",
          "solu":ecu,
          "actividad":" y la operación entre fila "+co+ ".  Determine los nuevos valores"+
                      " de la fila o filas que se está / están  transformando.",
          "paso":pas,
          "men":"Escriba en las cajas vacias el resultado de aplicar la transformación pedida.",
          "ma":num
      };
       
   return json;
     
 }
 cuadradas ()
 {
     var n = Math.floor(Math.random()*3)+2;  //Cantidad filas de la matriz T.
     var m = n;  //Cantidad de columnas de la matriz T
     var ecu = new generaEjercicios(n,m);
     var ct = new operacionesMatriciales();
     var numo = ct.coeficientesTecnologicos(ecu);
         
     var b=[];
     
    for(var x=0;x<ecu.length;x++)
    {
       var ty = ecu[x].split("=") ;
       b[x] = ty[1];
    }
    
     var num = numo.num; 
    for (var x = 0; x < num.length; x++)
    {
       num[x][num.length] = b[x];
    }
       //var res = tabla(0, num);
       var tablas =[];
       
       tablas[0] = num;
        for (var x = 1; x < num.length+1; x++)
        {
            tablas[x] = tabla(x-1,  tablas[x-1]);
        }
        
         var orde =  ordenTabla(tablas.length, tablas[0].length);//Orden de escritura de las filas
     // var formu=[];
     // var piv;
       function tabla(i, nu)
       {
           var sol =[];
            sol[i] = pivote (i, nu[i]);
         
       
             for(var t=0; t<nu.length;t++)
             {
                  if(i !==t)
                  {
                      sol[t] = transforma(sol[i], nu[t], i);
                  }
            }//fot
            //
        
       
         // } //for
          return sol;
    }  //tabla
  function  ordenTabla(dim, dim2)
 { 
    
     var ma = new Array(dim);
      for(var k=0;k<dim;k++)
     { 
         ma[k] = new Array(dim2);
     }
        for(var k=0;k<dim;k++)
         {
             ma[k][0]  =k;
         }
     for(var k=0;k<dim;k++)
     {  
         var pi =k;
      
         for(var i=0;i<dim2;i++)
         {
            ma[k][i] =i; 
                
         }
         
     }//for
      for(var k=2;k<dim;k++)
           { 
               var p =  ma[k][0];
               var p2 = ma[k][k-1];
              
                ma[k][0] =p2;
                ma[k][k-1] = p;
           }
     return ma;
 }//orden Tabla
     function pivote (k,  nu)
     {
        
        var frac = new fraccionarios();
      
        var pin = frac.invMulti(nu[k].toString());
            // piv = pin;
        var opfio = new operacionesFilas();
        var opfi = opfio.porEscalar(nu,pin);
       
        return opfi;
     }
     function transforma(ft, fo, r)
     {
         //ft: fila pivote
        
          var frac = new fraccionarios();
          var ins;
          var su;
           ins =frac.multiFrac("-1",fo[r]); 
            var opfo = new operacionesFilas();
          
           var su =opfo.kFiMasFj(ins, ft, fo);
         
         return su;
     }
         
        var json ={"teo":"<b>Solución ecuaciones con coeficientes tecnólógicos cuadrados</b><br><br>+"+
                   "Las ecuaciones con coeficientes tecnológicos cuadrados tienen la misma cantidad"+
                   " de filas y de columnas. <br><br>"+
                   "Para resolverlos se construye una matriz ampliada:<br><br>"+
                   "[T | b]<br>"+
                   "T: Es una matriz que contiene los coeficientes numéricos de la parte izquierda"+ 
                   " del sistema de ecuaciones. <br><br>"+
                   "b: Es un vector que contiene los números de la parte derecha del sistema"+
                   " de ecuaciones <br><br>"+
                   "<b>Solución</b><br><br>"+
                   "Si se tiene la matriz ampliada:<br>"+
                   "a<sub>11</sub> + a <sub>12</sub> + a<sub>13</sub> | b<sub>1</sub><br>"+
                   "a<sub>21</sub> + a<sub>22</sub> + a<sub>23 | b<sub>1</sub></sub><br>"+
                   "a<sub>31</sub> + a<sub>32</sub> + a<sub>33</sub> | b<sub>1</sub><br><br>"+
                   "Siga el siguientes procedimiento:<br>"+
                   "Primer paso: F'<sub>e</sub> = 1/a<sub>ik</sub>*F<sub>e</sub><br>"+
                   "Segundo paso: F'<sub>i</sub> = -a<sub>ik</sub>*F'<sub>e</sub>  + F<sub>i</sub><br>"+
                   "Tercer paso: Escoja la siguiente fila (F<sub>e</sub>) y comience con el paso 1.",
                   "num":num,
                   "sistema":ecu,
                   "b":b,
                   "tablas":tablas,
                   "pasos":["Escriba la matriz ampliada", "Escriba la matriz reducida"],
                   "ordi":orde};
              
            
     return json;
 }//Cuadradas
 masColumnas()
 {
     var n = Math.floor(Math.random()*3)+2;  //Cantidad filas de la matriz T.
     var m = n+1;  //Cantidad de columnas de la matriz T
     
     if(m===5)
     {
         n=2;
     }
     if(m===4)
     {
        var k = Math.floor(Math.random()*2);
       
        n = n-k;
        
     }
     var ecum = new generaEjer(n,m);
    // var ct = new operacionesMatriciales();
     var ecu = ecum.masDeUnaVariable(n, m);
      var ct = new operacionesMatriciales();
     var numo = ct.coeficientesTecnologicos(ecu);
         
     var b=[];
     
    for(var x=0;x<ecu.length;x++)
    {
       var ty = ecu[x].split("=") ;
       b[x] = ty[1];
    }
    
     var num = numo.num; 
     var ti = numo.ind;
    
    for (var x = 0; x < num.length; x++)
    {
       num[x][num[x].length] = ti[x];
    }
    
  
       //var res = tabla(0, num);
       var tablas =[];
       
       tablas[0] = num;
      
        for (var x = 1; x < num.length+1; x++)
        {
            tablas[x] = tabla(x-1,  tablas[x-1]);
           
        }
         
         var orde =  ordenTabla(tablas.length, tablas[0].length);//Orden de escritura de las filas
         //
      
     // var formu=[];
     // var piv;
       function tabla(i, nu)
       {
           var sol =[];
            sol[i] = pivote (i, nu[i]);
            
          // formu[i] = "F<sub>"+i+"</sub> = " +piv+"F<sub>"+i+"</sub>";
           // alert("formu = "+formu[i]);
       
             for(var t=0; t<nu.length;t++)
             {
                  if(i !==t)
                  {
                      sol[t] = transforma(sol[i], nu[t], i);
                  }
            }//for
            //
        
       
         // } //for
          return sol;
    }  //tabla
  function  ordenTabla(dim, dim2)
 { 
    
     var ma = new Array(dim);
      for(var k=0;k<dim;k++)
     { 
         ma[k] = new Array(dim2);
     }
        for(var k=0;k<dim;k++)
         {
             ma[k][0]  =k;
         }
     for(var k=0;k<dim;k++)
     {  
         var pi =k;
      
         for(var i=0;i<dim2;i++)
         {
            ma[k][i] =i; 
                
         }
         
     }//for
      for(var k=2;k<dim;k++)
           { 
               var p =  ma[k][0];
               var p2 = ma[k][k-1];
              
                ma[k][0] =p2;
                ma[k][k-1] = p;
           }
     return ma;
 }//orden Tabla
     function pivote (k,  nu)
     {
        
        var frac = new fraccionarios();
      
        var pin = frac.invMulti(nu[k].toString());
            // piv = pin;
        var opfio = new operacionesFilas();
        var opfi = opfio.porEscalar(nu,pin);
       
        return opfi;
     }
     function transforma(ft, fo, r)
     {
         //ft: fila pivote
        
          var frac = new fraccionarios();
          var ins;
          var su;
           ins =frac.multiFrac("-1",fo[r]); 
            var opfo = new operacionesFilas();
          
           var su =opfo.kFiMasFj(ins, ft, fo);
         
         return su;
     }
    var json ={"teo":"<b>Solución ecuaciones con coeficientes tecnólógicos cuadrados</b><br><br>+"+
                   "Las ecuaciones con coeficientes tecnológicos cuadrados tienen la misma cantidad"+
                   " de filas y de columnas. <br><br>"+
                   "Para resolverlos se construye una matriz ampliada:<br><br>"+
                   "[T | b]<br>"+
                   "T: Es una matriz que contiene los coeficientes numéricos de la parte izquierda"+ 
                   " del sistema de ecuaciones. <br><br>"+
                   "b: Es un vector que contiene los números de la parte derecha del sistema"+
                   " de ecuaciones <br><br>"+
                   "<b>Solución</b><br><br>"+
                   "Si se tiene la matriz ampliada:<br>"+
                   "a<sub>11</sub> + a <sub>12</sub> + a<sub>13</sub> | b<sub>1</sub><br>"+
                   "a<sub>21</sub> + a<sub>22</sub> + a<sub>23 | b<sub>1</sub></sub><br>"+
                   "a<sub>31</sub> + a<sub>32</sub> + a<sub>33</sub> | b<sub>1</sub><br><br>"+
                   "Siga el siguientes procedimiento:<br>"+
                   "Primer paso: F'<sub>e</sub> = 1/a<sub>ik</sub>*F<sub>e</sub><br>"+
                   "Segundo paso: F'<sub>i</sub> = -a<sub>ik</sub>*F'<sub>e</sub>  + F<sub>i</sub><br>"+
                   "Tercer paso: Escoja la siguiente fila (F<sub>e</sub>) y comience con el paso 1.",
                   "num":num,
                   "ecuaciones":ecu,
                   "b":b,
                   "tablas":tablas,
                   "pasos":["Escriba la matriz ampliada", "Escriba la matriz reducida"],
                   "ordi":orde};
              
            
    
     return json;
 }//,masColmnas
 
 
}//Clase
