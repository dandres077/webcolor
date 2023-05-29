/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class operacionesMatriciales
{
    constructor()
    {
        
    }
    coeficientesTecnologicos(ecu)
    {
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
          num[t] = new Array(nu[t].length);
      }
  
      for(var t=0;t<nu.length;t++)
      {
          for(var r=0;r<nu[t].length;r++)
          {
              
               num[t][r] = nu[t][r].num;
          }
         
      }
     
       for(var t=0;t<nu[0].length;t++)
      {
          lit[t] = nu[0][t].lite;
      }
      var json;
      json ={"num":num,
             "lit":lit,
             "ind":ti};
             
       return json;
    }//Coeficieantes tecnológicos
}
