/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
class operacionesFilas
{
    constructor()
    {
        
    }
    porEscalar(fila, k)
    {
       
        var frac = new fraccionarios();
        
        var fi = [];
        
        for (var t=0;t<fila.length;t++)
        {
            fi[t] = frac.multiFrac(fila[t].toString(), k.toString());
        }
        return fi;
    }
    kFiMasFj(ins, fi, fj)
    {
        var frac = new fraccionarios();
        //  var ins;
          var su =[];
           //ins =frac.multiFrac("-1",fj[k]); 
           
           var opf = this.porEscalar(fi,ins);
          for (var x = 0; x < fi.length; x++)
          {
           su[x]= frac.sumFrac(opf[x], fj[x]);
          } 
          return su;
    }
    intercambio (ma, i, j)
    {
       
    
       var p =  ma[i];
               var p2 = ma[j];
              
                ma[i] =p2;
                ma[j] = p;
       
           return ma;
    }
    ejercicios(n, m)
    {
     
       var nu=new Array(n);
        for(var t=0;t<n;t++)
       {
           nu[t] = new Array(m);
       }
       var sig =1;
       var nus; 
     
       for(var t=0;t<n;t++)
       {
            for(var k=0;k<m;k++)
            {
               nus =Math.floor(Math.random()*2);
               if(nus===0)
              {
                 sig =-1;
               }
               else
               {
                  sig=1;
                }
                nu[t][k] =sig* Math.floor(Math.random()*9+1);
            }
       }
     
        return nu;
    }//nu
    literales(m)
    {
        var d= m;
        var litos =["x","y","t","z"];
        
        var lit=[];
        for(var j=0;j<d;j++)
        {
            lit[j]= litos[j];
        }
        return lit;
    }
    multiMa(T,b)
    {
       
        if(T[0].length !==b.length)  
        {
            alert("Las matrices no son conformables para la multiplicación");
            return "0";
        }
        var re = new Array(T.length);
         for(var x=0;x<T.length;x++)
        {
            re[x]= Array(b[0].length);
        }
     
        var te=0;
       
        for(var i=0;i<T.length;i++)
        {
            for(var j=0;j<b[0].length;j++)
            {
                 for(var k=0;k<b.length;k++)
                 {
                    te =te + T[i][k]*b[k][j];
                 }
                re[i][j] = te;
                  te =0;
            }
            
          
        }
        
        return re;
    }
   
}

