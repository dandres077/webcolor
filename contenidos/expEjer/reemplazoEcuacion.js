/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function reemplazoEcuacion(ec, x)
{
          var igual = ec.indexOf("=");
          var mas;//;
          var    menos2;;
          var menos;
          var despuesDeIgual =ec.substring(igual+1);
          
          var pc;// = despuesDeIgual.substring(0,1); 
          var ot;
          var op;
          var y;
          var vx=x;
          if($.isNumeric(despuesDeIgual))
          {
              op=4;
              //y=ec;
          }
          else
          {
             mas =despuesDeIgual.indexOf("+");
              if(mas !==-1) 
              {
                  
                  op=0;
              }
            // despuesDeIgual =ec.substring(igual+1);
             pc = despuesDeIgual.substring(0,1); 
             
             if(pc ==="-")
             {
                  ot=  despuesDeIgual.substring(1); 
                var menos =ot.indexOf("-");
                if(menos !==-1)
                {
                   
                    op=1;
                }
             }
             else// else if(pc ==="-")
             {
                  menos = despuesDeIgual.indexOf("-");
               if(menos !==-1)
               {
                  
                  op=2;
               }
             }
             
             if(mas ===-1 && menos ===-1)
             {
                 op=3;
             }
             
             
            
       }//No numerica false
          
      switch(op) 
      {
          case 0:
          {
             conMas();
            break;  
          }
          case 1:
          {
             menosMenos();
            break;  
          }
          case 2:
          {
             conMenos();
            break;  
          }
           case 3:
          {
             niMasNiMenos();
            break;  
          }
           case 4:
          {
             sinVar();
            break;  
          }
          
      }//switch
       return y;
      function conMas()
      {
          var term = despuesDeIgual.split("+");
          var nu=parseInt(term[0]);
          if(isNaN(nu))
          {
              nu=1;
          }
          
          y= nu*vx+parseInt(term[1]);
          
      }//conMas
      function menosMenos()
      {
        var term=[];
        term[0]=despuesDeIgual.substring(0, menos+1);
        term[1] = despuesDeIgual.substring(menos+2);
        var nu=parseInt(term[0]);
        if(isNaN(nu))
          {
              nu=1;
          }
          
          y= nu*vx-term[1];
        
      }//menosMenos()
      function conMenos()
      {
          var term = despuesDeIgual.split("-");
          var nu=parseInt(term[0]);
          if(isNaN(nu))
          {
              nu=1;
          }
          
          y= nu*vx-parseInt(term[1]);
      }//conMenos
      
      function niMasNiMenos()
      {
          var nu=parseInt(despuesDeIgual);
           if(isNaN(nu))
          {
              nu=1;
          }
          
          y= nu*vx;
      }
      function sinVar()
      {
          y=despuesDeIgual;
      }
     
}//main

