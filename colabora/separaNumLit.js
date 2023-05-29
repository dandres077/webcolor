/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
class separaNumLit
{
    constructor()
    {
        this.li =[];
    }
    sepaNuLi(ter)
    {
       
        var r=0;
        var w=0;
        var nur =[];
        var lit;
       /*  for(var t=0;t<ter.length;t++)
          {
              
          }*/
        
         let result = ter.match(/[a-z]/g);
               if(result===null)
               {
                  //nur= ter;
                 // r++;
               }
               else
               {
                   lit= result;
                  // w++;
               }
               nur[0] = ter.replace(lit,"");
               nur[1] = lit;
            //   this.li=lit();
               var sag ={"num":nur[0],
                         "lite":nur[1]};
                            
        return sag;
    }//Seprar nulit
    
    regLit ()
    {
       // this.li;
    }
     sepTer (cad)
    {
      
         var cadp = cad;
        var pp = cadp.substring(0,1);
    
        if(pp !=="-")
        {
           //cadp=this.cad;
           cadp = cadp.replace(/\+/g,"*+");
           cadp = cadp.replace(/-/g,"*-");
            
        }
        else
        {
            cadp=cad.substring(1);
           cadp = cadp.replace(/\+/g,"*+");
           cadp = cadp.replace(/-/g,"*-"); 
        }
        
       
        var term =cadp.split("*");
        
        if(pp ==="-")
        {
            term[0]= "-"+term[0];
        }
        
        for(var x=0;x<term.length;x++)
        {
            var str = term[x].toString();
            
            var pp = str.substring(0,1);
            if(pp ==="+")
            {
               str = str.substring(1);
               term[x]= str;
            }
        }//for
        
       return term; 
    }//sepTer
    
}



function separaNumLit2(ter)
{
     var nu=[];
     var lit =[];
    this.numeros = function ()
    {
        nu=[];
        lit =[];
        for(var x=0;x<ter.length;x++)
        {
            nu[x] = parseInt(ter[x]);
           if(isNaN(nu[x]))
           {
             nu[x]=1; 
             lit[x]= ter[x];
           }
           else
           {
              lit[x] = ter[x].replace(nu[x],"") ;
           }
           
        }
        
       
        return nu;
        
    };
    
    this.sepTerm = function(ec)
    {
        //Una expresión algebraica separarla en sus términos.
       
         var ir2 = ec.indexOf("-");
          var rem = ec.replace(/\+/g, "*+");
          var tem;
          var rem2;
          if(ir2 ===0)
       {
           tem =rem.substring(1);
           rem2 = tem.replace(/-/g, "*-");
           rem=rem2;
       }
       else if(ir2 >0)
       {
           rem2 = rem.replace(/-/g, "*-");
           rem=rem2;
       }
       
       var mes = rem.split("*");
       
       if (ir2===0)
       {
           mes[0]= "-"+mes[0];
       }
         for(var t=0;t<mes.length;t++)
        {
            var pc=mes[t].substring(0,1);
            if(pc ==="+")
            {
                mes[t]= mes[t].substring(1);
            }
        }//for
         
         return mes;
      
    
    };//sepTerm
    
    this.displayLit = function()
    {
       return lit; 
    };
}
