/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function multiplicaTerms()
{
    var teri;
    var upro;
    function obtenerTerms(cad)
    {
        var dic = cad.indexOf("(");
        var dic2 = cad.indexOf(")");
        var mul = cad.substring(0, dic);
        var mul2 = cad.substring(dic+1, dic2);
        
      
        
        var tdic = mul2.indexOf("-");
         var tdic2 = mul2.indexOf("+");
        var sig ="+";
        var tem = mul2;
       
        if(tdic ===0)
        {
            tem= tem.substring(1);
            tem = tem.replace(/-/g,"*-");
            sig="-";
        }
        else
        {
            tem = mul2.replace(/-/g,"*-"); 
        }
         tem = tem.replace(/\+/g,"*+");
         
     
        var ter = tem.split("*");
        
        if(sig==="-")
        {
            ter[0]="-"+ter[0];
        }
           
        //Quitar signos +
        for(var x=0;x<ter.length;x++)
        {
           if(ter[x].substring(0,1)==="+") 
           {
               ter[x] =ter[x].substring(1);
           }
        }
        
        //*********************************** Captura literales ****************
        var r=0;
        var w=0;
        var nur=[];
        var lit=[];
         for(var t=0;t<ter.length;t++)
          {
               let result = ter[t].match(/[a-z]/g);
               if(result===null)
               {
                  nur[r]= ter[t];
                  r++;
               }
               else
               {
                   lit[t]= result;
                   w++;
               }
          }
       
             //********************************* Capturar números ***********
         
         lit[lit.length] ="";
         var nura =[];
         
         for(var t=0;t<ter.length;t++)
          {
              nura[t] = ter[t].replace(lit[t],"");
          }
          var nupro=[];
         
          var frac = new fraccionarios();
            
         for(var t=0;t<ter.length;t++)
          {
              nupro[t] = frac.multiFrac(nura[t].toString(),mul.toString() );
          }
           for(var t=0;t<nupro.length;t++)
          {
               nupro[t] =  nupro[t]+lit[t];
          }
          
        upro = nupro;
         var sig="+";
         var pn =nupro[1].toString();
         
       
        
         
         var rs = "";//nupro[0] +sig+nupro[1];
         
         for(var x=0;x<nupro.length;x++)
         {
                var pn = nupro[x].toString();
              if(pn.substring(0,1)==="-")
              {
            
                 sig ="";
              }
              else
              {
                  sig ="+";
              }
              if(x===0)
              {
                  sig="";
              }
            rs =  rs +sig+nupro[x].toString();
         }
         
       
        return rs;
        
    }//
    this.display = function(cad)
    {    
      
        teri = obtenerTerms(cad);
       
        return teri;
    };
    this.multNum = function(pr)
    {
        
    };
    this.displayNupro = function()
    {
       return upro; 
    };
}
