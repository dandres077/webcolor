/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


class separaTerminos {
    constructor()
    {
      
      
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



    function sepTer (cadp)
    {
       
        var cad = cadp;
        var pp = cad.substring(0,1);
        
        var sig="+";
       
        if(pp !=="-")
        {
           //cadp=this.cad;
           cad = cad.replace(/\+/g,"*+");
           cad = cad.replace(/-/g,"*-");
            
        }
        else
        {
            cad=cad.substring(1);
           cad = cad.replace(/\+/g,"*+");
           cad = cad.replace(/-/g,"*-");
           sig ="-";
        }
        
      
        var term =cad.split("*");
        
          if(sig ==="-")
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

