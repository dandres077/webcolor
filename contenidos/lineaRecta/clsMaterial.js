/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class material {
      pendiente(datos)
      {
         var fracc = new fraccionarios();
         var nu = datos[0].toString();
         var de = datos[1].toString();
          var inv;
         var di;
         if (de ==="0")
         {
             di ="np"; //No se puede calcular la pendiente
         }
         else
         {
             inv = fracc.invMulti(de);
             di = fracc.multiFrac(nu,inv);
         }
        
         return di;
      }
    punPen(){
                 
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
                  y1 = signo[1]*11;
                   m = signo[2]*m;
                
                var dat = [x1, y1, m];
                 
                 return dat;
             }//puntoPen
    solucion (dat){
                  //Declara arreglo sol
                  
                  var sol = new Array(3);
                  sol[0] = new Array(3);
                  sol[1] = new Array(1);
                  sol[2] = new Array(1);
                  sol[3] = new Array(4);
                  
                   var x = dat[0];
                   var y = dat[1];
           
                   var sig ="-";
                   y = -1*dat[1];
                    x = -1*dat[0];
                 var sig2 ="+";
                  
                 
                  if(x<0)
                  {
                      sig2="";
                  }
                     //y=-4x+17
                  
             
                  
                  var exis =dat[0];
                  
                  if(dat[0]<0)
                  {
                      exis = -1*dat[0];
                  }
                  
                  var frac = new fraccionarios();
                  var pro = frac.multiFrac(dat[2].toString(),x.toString());
                  var sum =frac.sumFrac(pro,dat[1].toString());
                   sig ="+";
                  if(sum<0)
                  {
                      sig="";
                  }
                  var mx =dat[2].toString()+"x";
                  
                  
                  if(dat[2].toString()==="0")
                  {
                     mx=""; 
                     sig="";
                  }
                  var ye = "y="+mx+sig+sum;   //ecuación
                  
                                   
                  var inv = frac.invMulti(dat[2].toString());
                   sol[0][0]=dat[0];
                   sol[0][1]=dat[1];
                    sol[0][2]=dat[2];
                    
                    
                    
                     sig ="+";
                  if(y<0)
                  {
                      sig="";
                  }
                  
                    sol[1][0] = "y"+sig+y.toString()+"="+dat[2]+"(x"+sig2+x.toString()+")";
                  
                    sol[2][0] = ye;
                  
                    sol[3][0] = 0;
                    
                    sol[3][1] = sum;
                                        
                //    sol[4][0] =frac.multiFrac(sum,inv) ;
                     var porM = frac.multiFrac("-1",inv.toString());
                    sol[3][2] =  frac.multiFrac(sum.toString(),porM.toString()) ;
                    sol[3][3] = 0; 
                                       
                  return sol;
              }
              
       dosPuntos()
        {
            //Datos del problema.  Devuelve dos  puntos
         var x1 =this.numeros(20);// Math.floor(Math.random()*15);
         var x2 =this.numeros(20);
         var y1 =this.numeros(20);
         var y2 =this.numeros(20);
         
          var sig = this.numeros(2);//Signo Math.floor(Math.random()*2);
          var sig2= this.numeros(2);
          var sig3 = this.numeros(2);
          var sig4 = this.numeros(2);
          
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
    numeros(k)
    {
        var x = Math.floor(Math.random()*k);
        return x;
        
    }
    experto(ej)
     {
         //Calcula la pendiente dados dos puntos
         var m;
         var frac = new fraccionarios();
        
          var csx1  =   -1*ej[0];         
          var csy1  =   -1*ej[1];  
          
        var num = frac.sumFrac(ej[3], csy1); //y2 - y1
        var den = frac.sumFrac(ej[2], csx1);  //x2 - x1
        
         var datos =[num, den];
          m =  this.pendiente(datos);
          var si ="+";
       if(csy1<0)
       {
          si=""; 
       }
        var si2 ="+";
       if(csx1 <0)
       {
          si2=""; 
       }
        
         var ex =[];
         ex[0]=ej[3]+si+csy1;
          ex[1]=ej[2]+si2+csx1 ;
         
      if(m.toString()  ==="np")
      {
          var ec = "y="+ej[0];
           var datis = new Array(3);
           datis[0] = new Array(2);
           datis[0][0] =ex[0];
           datis[0][1]=ex[1];
           
         datis[1] = new Array(1);
        datis[1][0]= m;
        
         datis[2] = new Array(1);
        datis[2][0]= ec;
       
         return datis;
      }
         var dat =[ej[0],ej[1], m];
         
        
         var ec = this.solucion(dat);//solPuntoPend(dat);
       
         var sig ="+";
         
         if(csy1<0)
         {
             sig ="";
         }
         //[sunst2, sunst]
         var nume = ej[3]+sig+csy1;
         
         //ej[2]-4 csx1 = -6 
          var sig2 ="+";
         if(csx1<0)
         {
             sig2 ="";
         }
         
         var deno = ej[2]+sig2+csx1;
        
          var datis =[[nume, deno],[m],ec[1],[ec[2]]];
          
        alert("datis = "+datis);
         return datis;
         
                       
      }//experto


    
}//clase
