/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class generaEjer{
    
    constructor()
    {
        
    }
    unaVariable()
    {
       
           var litos =["x","y","t","z"];
    
       
       var nu =[];
       
       var esco = Math.floor(Math.random()*4);
      
       var li = litos[esco];
        
       var sig="-";
        var nus =Math.floor(Math.random()*2);
               if(nus===1)
              {
                 sig ="+";
               }
               
            //*************************  Segundo signo ==========
            
            var nus2 =Math.floor(Math.random()*2);
            var sig2 ="-";
               if(nus2===1)
              {
                 sig2 ="+";
               }
              
       for(var k=0;k<4;k++)
            {
             
                nu[k] =Math.floor(Math.random()*9+1);
            }    
            var ejer = nu[0]+li +sig+nu[1]+"="+nu[2]+li+sig2+nu[3];
            return ejer;
      
    }//Una variable
    masDeUnaVariable(n,m)
    {
       var litos =["x","y","t","z","k","r"];
       var tecnos = this.nuEjer(n,m); 
       var b=this.be(m);
  
       var sig="";     
       var pro =  this.multiMa(tecnos,b);
         
         var ec =[];
         var tem ="";
       for(var c=0;c<tecnos.length;c++)
       {
           for(var t=0;t<tecnos[c].length;t++)
           {
               if(tecnos[c][t]<0)
               {
                   sig="";
               }
               else
               {
                   sig="+";
               }
               if(t ===0)
               {
                   sig ="";
               }
              tem = tem + sig+tecnos[c][t]+litos[t];
            
           }
           ec[c] = tem;
           tem="";
       }
        for(var c=0;c<ec.length;c++)
       {
          ec[c] = ec[c]+ "="+pro[c] ;
       }
       
       return ec;
    }
   nuEjer(n, m)
    {
       //n filas, m columnas
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
    }//numEjer
     be(m)
    {
       
       var sig;
        var bo=new Array(m);
         for(var k=0;k<m;k++)
            {
              bo[k] = new Array(1)  ;
            }
        var nus=0;
      
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
               bo[k][0] =sig* Math.floor(Math.random()*9+1);
            }
           
            return bo;
    }//be
     multiMa(T,sol)
    {
      
        if(T[0].length !==sol.length)  
        {
            alert("Las matrices no son conformables para la multiplicación");
            return "0";
        }
        var re = new Array(T.length);
         for(var x=0;x<T.length;x++)
        {
            re[x]= Array(sol[0].length);
        }
     
        var te=0;
       
        for(var i=0;i<T.length;i++)
        {
            for(var j=0;j<sol[0].length;j++)
            {
                 for(var k=0;k<sol.length;k++)
                 {
                    te =te + T[i][k]*sol[k][j];
                 }
                re[i][j] = te;
                  te =0;
            }
        }
       
        return re;
    }//multi´plica
    
}//clase

function generaEjercicios(ni, mi)
{
   
      var ec; 
      var n=ni;
      var m = mi;
      var T=nuEjer();
       var sol=be(m, 1);
        
       var b = multiMa();
       
   
      var lit =literales();
     
      var te ="";
      var ecu=[];
     
         var sig ="+";
     
   
      for(var k=0;k<T.length;k++)
      {
        for(var j=0;j<T[k].length;j++)
        {
            var str = T[k][j].toString();
            var pp = str.substring(0,1);
           // var ent = //parseInt(T[j][k]);
           
        
           if(pp ==="-")
           {
               sig ="";
           }
           else
           {
               sig="+";
           }
         if(j===0)
           {
               sig ="";
           }
           te = te+sig+T[k][j].toString()+ lit[j];
           
        }//for
        te = te+ "="+b[k];
        ecu[k]= te;
        te ="";
     }//for
      
   return ecu;
   

   
   function literales()
    {
      
        var li=[];
        var d= m;
        var litos =["x","y","t","z"];
        
     
        for(var j=0;j<d;j++)
        {
            li[j]= litos[j];
        }
      
        return li;
    }

 function nuEjer()
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
    }//numEjer
    function be()
    {
       
        var bo=new Array(m);
         for(var k=0;k<m;k++)
            {
              bo[k] = new Array(1)  ;
            }
        var nus=0;
       
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
               bo[k][0] =sig* Math.floor(Math.random()*9+1);
            }
           
            return bo;
    }
    function multiMa()
    {
      
        if(T[0].length !==sol.length)  
        {
            alert("Las matrices no son conformables para la multiplicación");
            return "0";
        }
        var re = new Array(T.length);
         for(var x=0;x<T.length;x++)
        {
            re[x]= Array(sol[0].length);
        }
     
        var te=0;
       
        for(var i=0;i<T.length;i++)
        {
            for(var j=0;j<sol[0].length;j++)
            {
                 for(var k=0;k<sol.length;k++)
                 {
                    te =te + T[i][k]*sol[k][j];
                 }
                re[i][j] = te;
                  te =0;
            }
        }
       
        return re;
    }
    
    
    this.displayEc = function()
    {
        return ec;
    };
   
  
}//maih
