/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function ecuacionConDosPuntos ()
{
      
    plantilla();
   var teos = materia(2);
   
     $("#desa").append(teos.teo);
     
    
   var dat = teos.tutor();
   
   
   var acti =teos.actividad;
 
 
 
 alert("punto 1 = "+dat[0]);
 
  $("#desa").append(acti);
 /*  var dtum;
  if(dat[1][0] !=="np")
  {
    dtum =new Array(4);
    dtum[0] = new Array(2);
    dtum [1] = new Array(1);
    dtum [2] = new Array(1);
    dtum [3] = new Array(1);
    dtum[0] =dat[1];
 
    dtum[1] =dat[2];
     dtum[2] =dat[3];
 
     dtum[3] =dat[4];
 
  }
  else
  {
       dtum =new Array(3);
    dtum[0] = new Array(2);
    dtum [1] = new Array(1);
    dtum [2] = new Array(1);
    
    dtum[0] =dat[0];
     dtum[1] =dat[3];
 
     dtum[3] =dat[4];
  }*/
 
 
 alert("Ajin dat= "+dat[1]);
 
 var cajo = new caja();
 
 
 var caj = cajo.datos2(dat, "c");
 
  if(dat[1][0] ==="np")
  {
      caj[0][0] = "<span class='m'> m = </span>"+           
              "("+caj[0][0]+ ") / (";
      caj[0][1] = caj[0][1]+ ")";
     caj[1][0] =  "Si x<sub>2</sub> = x<sub>1</sub> escriba np. <span class ='m'>m </span>= "+caj[1][0];
     caj[2][0]="Escriba la ecuación: "+caj[2][0];
  }
  else
  {
       caj[0][0] = "<span class='m'> m = </span>"+           
              "("+caj[0][0]+ ") / (";
      caj[0][1] = caj[0][1]+ ")";
       caj[1][0] = "<span class='m'> m = </span>"+ caj[1][0];     
             
      caj[2][0] ="<span class='y'>y</span> - "+
                     "<span class='y1'>y<sub>1</sub></span>= <span class='m'>m</span>"+
                      "(<span class='x'>x</span> -  <span class='x1'>x<sub>1</sub></span>): " +
                       caj[2][0] ;
        caj[3][0] = "y = mx + b: "+caj[3][0];
      
  }
  
 
 /*caj[2][0] ="<span class='y'>y</span> - "+
                     "<span class='y1'>y<sub>1</sub></span>= <span class='m'>m</span>"+
                      "(<span class='x'>x</span> -  <span class='x1'>x<sub>1</sub></span>): " +
                       caj[2][0] ;
 caj[3][0] = "y = mx + b: "+caj[3][0];*/
 valida(0, dat, 0, caj, ecuacionConDosPuntos, "c", "","10",teos.pasos);
 
 

    
          
          
          //  $("#desa").append("<br><br>"+acti+ " <br>"+dat);
            
            
            $("#y").css({"color":"red"});
            
  function separaPunto(dd)
  {
      var datos;
   
   var ex = dd.indexOf("+");
   
   var sic ="+";
   if(ex !==-1)
   {
       datos = dd.replace("+","-");
       sic ="-";
   }
   else
   {
        datos = dd.replace("-","+");
       sic ="+";
   }
    var dai = datos.toString();
    dai = recorte(dai);
    var datex = dai.split(sic);
    return datex;
  }
}
