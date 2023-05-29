/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function fraccionarios()
       {
          this.multiFrac = function(frac1, frac2)
          {
           
           var in1 = frac1.indexOf("/");
           var in2 = frac2.indexOf("/");
           var pro =1; 
           var num1 =1;
           var num;
           var den="";
           
           if (in1 ===-1 && in2 ===-1)
           {
               pro = parseInt(frac1)* parseInt(frac2);
               //alert(" en el if pro = "+pro);
           }
           
           else  if (in1 !==-1 && in2 ===-1) 
           {
              
               num = frac1.substring(0, in1);
               
              den = frac1.substring(in1+1);
               // alert("2. den "*den);
              num1 = parseInt(num)*parseInt(frac2);
              pro = num1+"/"+ den;
              if(num1.toString() ==="0")
              {
                  pro ="0";
              }
           }
           else  if (in1 ===-1 && in2 !==-1)
           { 
              num = frac2.substring(0, in2);
              den = frac2.substring(in2+1);
             // alert("den "*den);
              num1 = parseInt(num)*parseInt(frac1);
              pro = num1.toString()+"/"+ den.toString();  
           }
           else
           {
               num = frac1.substring(0, in1);
               var num2 = frac2.substring(0, in2);//frac1.substring(0, in1);
               num1 = parseInt(num)*parseInt(num2);
               
               
               den = frac1.substring(in1+1);
               // alert("3. den "*den);
              var den2 = frac2.substring(in2+1);
              var den1 = parseInt(den)*parseInt(den2);
               
               pro = num1+"/"+ den1;
           }
        // alert("En multiplicación: frac1 = "+frac1 + " frac2 = "+frac2+" pro = "+pro); 
         
        var pro2 = simplifica(pro);
      //  alert("frac1 = " + frac1+ "por  frac2 "+frac2+ " = "+pro2+ " pro = "+pro);
           return pro2 ;
       };//multiplicación
       
       this.invMulti = function (fracN)
       {
           if(fracN ==="0")
           {
               return("error");
           }
           var frac =fracN.toString();
           var inSign = frac.substring(0,1);
           var inMul ="";
           var sign ="";
           // ***********        No tiene signo ****************
           
           if(inSign ==="-")
           {
              frac = fracN.substring(1) ;
              sign ="-";
           }
           
          
        //   if(inSign !=="-")
           //{
               var inBar = frac.indexOf("/");
               if(inBar ===-1)
               {
                   inMul = "1/"+frac;
               }
               
               else 
               {
                   var num = frac.substring(0,inBar);
                    if(num==="0")
                    {
                      return("error");
                    }
                   var den = frac.substring(inBar+1);
                   inMul = den +"/"+num;
               }
          // }//inSign
           var inMul2 = sign+inMul;
        
           if(fracN.toString() ==="1")
           {
               inMul2 ="1";
           }
          
           return inMul2;
           
           
       };
       
       this.sumativo = function(frac2)
       {
           var frac = frac2.toString();
           //alert("Sumatio "+frac);
           var ink =frac.indexOf("-");
           var sum="";
        // alert("frac= "+frac);
           if (ink !==-1)
           {
             sum = frac.substring(1); 
             
           }
           else
           {
               sum ="-"+frac.toString();
              //  alert("frac= "+frac+ " sum "+sum);
           }
           
         // alert("sum "+sum);
           return sum;
       };//sumativo
       this.sumFrac = function(fracN1, fracN2)
       { 
          
            
            var frac1 =fracN1.toString();
            
            var frac2 =fracN2.toString();
            
             
           var in1 = frac1.indexOf("/");
           var in2 = frac2.indexOf("/");
           var num1="",num2="";
           var den1 ="", den="";
           var pro=0;
           if(frac1 ==="0" && frac2 !=="0" )
           {
             pro = frac2;   
           }
           else if(frac1 !=="0" && frac2 ==="0")
           {
               pro =  frac1;
           }
           else
           {
                if(in1 ===-1 && in2 ===-1)
                {
                  pro = parseInt(frac1)+ parseInt(frac2);
               }
               else  if(in1 !==-1 && in2 ===-1)
               {
                 var num =frac1.substring(0,in1);
                 den1 = frac1.substring(in1+1);
                 pro = parseInt(den1)*parseInt(frac2)+parseInt(num);
               
                  pro = pro +"/"+ den1;
               
           }
           else  if(in1 ===-1 && in2 !==-1)
           {
               var num =frac2.substring(0,in2);
               den1 = frac2.substring(in2+1);
               pro = parseInt(den1)*parseInt(frac1)+parseInt(num);
                pro = pro +"/"+ den1;
                    
           }
           else
           {
               
               num1 =frac1.substring(0,in1);
               den1 = frac1.substring(in1+1);
               
               
               
               num2 =frac2.substring(0,in2);
              var den2 = frac2.substring(in2+1);
              
              
              var num = parseInt(num1)*parseInt(den2)+parseInt(den1)*parseInt(num2); 
              den = parseInt(den1)*parseInt(den2); 
              pro = num.toString()+"/" +den.toString();
             
              
           }
               
           }//Gtrande
           //alert("frac1 = "+frac1+" frac2 = "+frac2 + " pro= "+pro);
         //   var pro1 = pro;
          var pro1 = simplifica(pro);
         //  alert("frac2 = "+pro +" simplificado = "+pro1);
           return pro1.toString();
       };//sumFrac
       
        function simplifica(frac2)
         {
             
            var frac =frac2.toString();
            
             
              var ink =frac.indexOf("/");
              
             
             
              var num,den;
              var a="";
              if(ink !==-1)
              {
                  a ="1";
                 
              }
              else
              {
                  // alert("a: "+a);
                  a="2";
                
              }
              
              
              switch (a)
              {
                  case "1":
                  {
                       num = frac.substring(0,ink);
                       den = frac.substring(ink+1);
                       //alert("num: "+num+  " den  = "+den+ " ink "+ink+" frac "+frac);
                       var co =1;
                       var k=2;
                       var num1=num;
                       var den1=den;
                       var div=1;
                       var resto1=0, resto2=0;
                       var nume=0, deno=0;
            //  var frac;
              
              if(num<0)
              {
                  num1= -1*num;
              }
               if(den<0)
              {
                  den1= -1*den;
              }
              div = den1*num1;
            while(div>1)
              {
                 resto1 = num1%k;
                 resto2 = den1%k;
                 if(resto1===0 && resto2 ===0)
                 {
                     num1=num1/k;
                     den1 = den1/k;
                     co = co*k;
                 }//(resto1===0 && resto2 ===0
                 else if((resto1===0 && resto2 !==0))
                 {
                     num1 = num1/k;
                 }
                 else if((resto1!==0 && resto2 ===0))
                 {
                     den1 = den1/k;
                 }
                 else
                 {
                     k++;
                 }
                 div= num1*den1;
                 
              
                
              }//while
             
              
               if(den1 !==0)
                 {
                     nume= num/co;
                     deno = den/co;
                     frac = nume+"/"+deno;
                     
                 }
         if (deno !==0)//prueba
              {

               var  resto = nume % deno;


               if (resto === 0)
               {
                   var fraci = nume/deno;
                  //$frac = String($fraci);
    
                frac =fraci;
               }
           }
           
           break;
            
         }//case 1
         
            case "2":
            {
                frac =frac2;
                break;
            }
       }
             
             //alert("Simplificado = "+frac);
              return frac;
              
     };//Simplifica
            
   this.displaySimplifica = function(fra)
   {
     var frasim =   simplifica(fra);
     var esl = frasim.indexOf("/");
     var sl;
     if(esl !==-1)
     {
        sl = frasim.split("/") ;
        var num = parseInt(sl[0]);
        var den = parseInt(sl[1]);
        if(num <0 && den <0)
        {
           var numSt = num.toString();
           num = numSt.substring(1);
           
            var denSt = den.toString();
            den = denSt.substring(1);
            frasim = num.toString()+"/"+den.toString();
        }
        else   if(num >0 && den <0)
        {
             var denSt = den.toString();
            den = denSt.substring(1);
            frasim = "-"+num.toString()+"/"+den.toString();
            
        }
     }
     
     return frasim;
   };
        
 }//fraccionarios
     


