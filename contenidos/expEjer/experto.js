/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function experto(ej)
{
         var m;
         var frac = new fraccionarios();
         //var ejer = new actiApre();
         
        // var ej = ejer.dosPuntos();
             
          var csx1  =   -1*ej[0];         //cambio de signo
          var csy1  =   -1*ej[2];  
          
        var num = frac.sumFrac(ej[3], csy1); //y2 - y1
        var den = frac.sumFrac(ej[1], csx1);  //x2 - x1
        
        var im = frac.invMulti(den);//invertido de den
         m = frac.invMulti(num,den);
         
         var dat =[ej[0],ej[2], m];
         
         var ec = solPuntoPend(dat);
         
         var sunu = -1*ej[0];
         var sunu2 = -1*ej[2];
         var sunst="";
          var sunst2="";
         
         if(sunu <0)
         {
             sunst = ej[1].toString()+sunu;
         }
         else
         {
             sunst = ej[1].toString()+"+"+sunu;
         }
         
         if(sunu2 <0)
         {
             sunst2 = ej[2].toString()+sunu2;
         }
         else
         {
             sunst2 = ej[1].toString()+"+"+sunu2;
         }
         
         
         alert("ec[2] = "+ec[2]);
         
          var datis =[ej,[sunst2, sunst],[m],ec[1],[ec[2]]];
          
          alert("datis0 = "+datis[0]+" datis1 = "+datis[1]+" datis2 = "+datis[2]+
                  "\nnej= "+ej);
         
         return datis;
         
         function solPuntoPend(dat)
         {
               var sol = new Array(5);
                  sol[0] = new Array(3);
                  
                  sol[0][0]=dat[0];
                  sol[0][1]=dat[1];
                  sol[0][2]=dat[2];
                  
               
                  sol[1] = new Array(1);
                  sol[2] = new Array(1);
                  sol[3] = new Array(2);
                  sol[4] = new Array(2);
                
                 
                   var x = dat[0];
                   var y = dat[1];
                  
                   var sig ="-";
                   
                   y = -1*dat[1];
                 
                 x = -1*dat[0];
                 var sig2 ="+";
                  
                  sig ="+";
                  if(y<0)
                  {
                      sig="";
                  }
                  if(x<0)
                  {
                      sig2="";
                  }
                     //y=-4x+17
                  
                  sol[1][0] = "y"+sig+y.toString()+"="+dat[2]+"(x"+sig2+x.toString()+")";
                  
                  var exis =dat[0];
                  
                  if(dat[0]<0)
                  {
                      exis = -1*dat[0];
                  }
                  
                  var frac = new fraccionarios();
                  var pro = frac.multiFrac(dat[2].toString(),x.toString());
                  
                  
                   //var da = -1*dat[1];
                 
                  
                  var sum =frac.sumFrac(pro,dat[1].toString());
                   sig ="+";
                  if(sum<0)
                  {
                      sig="";
                  }
                  
                  var ye = "y="+dat[2].toString()+"x"+sig+sum;   //ecuación
                  
                  sol[2][0] = ye;
                  
                    sol[3][0] = 0;
                    
                    sol[3][1] = sum;
                    
                    var inv = frac.invMulti(dat[2].toString());//   1/m
                    
                    sol[4][0] =frac.multiFrac(sum,inv) ;
                    
                    sol[4][1] = 0;
                
                  return sol;
         }
      
                
}

