/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function operacionesBasicas()
{
   //termXterm() 
 
      var ma;
     var ma2;
       var pp;
         var remu ="";//Producto
       //  var divo ="";//División
         
   function division (caden)
   {
     
       ma =[];
      ma2 =[];
       var cade = caden.split("%");
     
    //   numerosLetras(cade);
    var num2 = parseInt(cade[0]);
    var num = parseInt(cade[1]);
   
 
    
    if(isNaN(num2))
    {
        num2 = 1;
    }
      if(isNaN(num))
    {
        num = 1;
    }
     
  
    var lit =cade[1].replace(num, "");
     
    var litm =[];
    litm = lit;
    var loc = new localiza(litm);
    
    var bc = loc.displayBast();
    var ec = loc.displayExpot();
    
 
    
    if(lit ==="")
    {
        ec ="";
    }
    
    var eci =[];
    var ente=0;
    
    for (var w=0;w<ec.length;w++)
    {
        ente = parseInt(ec[w]);
        eci[w] = -1*ente;
    }
      
        var fraco = new fraccionarios();
        var frac = fraco.invMulti(num.toString());
        var dvi=frac.toString();//El número invertido
        for(var x =0;x< eci.length;x++)
         {
             dvi =dvi+ bc[x]+"^("+eci[x]+")";
         }
         
       var mul;
      
    mul = cade[0]+"*"+dvi;
    var mulo =  termXterm(mul);
     
       return mulo;
   }
   
  // this.suma = function(caden)
  function suma(caden)
   {
      ma =[];
      ma2 =[];
       caden = recorte(caden);
        var a;
        var b;
    
     
      var  cad2 =caden.replace(/-/g,"*-");  
      var cad =cad2.replace(/\+/g, "*+");
      
       var pp2 = cad.substring(0,2);
       
       if(pp2 === "*-")
       {
           cad = "-"+cad.substring(2);
       }
       //var res2 = res3 .replace(/\+/g, "*+");
       
     
       var marcad = cad.split("*");
             
     //********************************  Separar números de cadenas *********************
     //
    for(var i=0;i<marcad.length;i++)
    {
        if(marcad[i] !=="")
        {
          
    
        }
         b = marcad[i];
           if(b.substring(0,1) ==="+")
           {
              b=b.substring(1);
           }
       
     a = parseInt(b);
     
    
      if(isNaN(a))
     {
         a=1;
         if(b.substring(0,1) ==="-")
         {
             a = -1;
         }
     }
     
     ma[i] = a;
     var li = b.replace(a,"");
      if(li ==="")
      {
         li="*";
      }
     
      
     if(li.substring(0,1)==="-")
     {
         li =li.substring(1);
     }
     
      ma2[i] = li;
 }//for
 
 //alert(" ma = "+ma);
 var otro =[];
 
  //*********************************  Comunes ********************* 
     
       var mcf="";
              var hav =  conjunto(ma2);
     
      var  bus = Array.from(hav);
   
   //********************************  Fin Separar números de cadenas *********************
   // *******************************  Sumar comunes *****************************
   
   var suma =[];
   var sumador=0;
   var k=0;
   suma[0] =0;
  
    for(var y =0;y<bus.length;y++)
      {
         for(var x =0;x<ma2.length;x++)
         {
             
          if(ma2[x].toString() ===bus[y].toString())
          {
              
             sumador =parseInt(sumador)+parseInt(ma[x]) ;
             suma[y] = sumador;
             // alert("caden  = "+ caden +" ma["+x+"] = "+ma[x]+ " suma[y] "+suma[y]+" sumador = "+sumador+
              //        "ma2 ["+x+"] = "+ma[2]);
             k++;
            
          }
          
          
        } //SEgundo for
        
        sumador =0;
    }
   
   
   
    var sumon =[];
    
     
    for(var y =0;y<bus.length;y++)
      {
       
         if(bus[y] !=="*")
         {
             sumon[y] = suma[y].toString()+bus[y];
         }
         else
         {
             var gu = parseInt(suma[y]);
             sumon[y]=gu;
         }
      }
     
    var sig="";
    var sum ="";
    
    for(var y =0;y<bus.length;y++)
      {
          if(y>0)
          {
              var en =parseInt(suma[y]);
              if (en > 0)
              {
                  sig ="+";
              }
              else
              {
                  sig ="";
               
              }
                   
          }//y>0
          var stSum =suma[y].toString();
        var nito = parseInt(sumon[y]);
       
          if(nito  ===1 && sumon[y].length>1)
          {
              var ts =sumon[y].toString();
             ts =ts.replace(nito,"");
             sumon[y] = ts;
          }
         
             if (stSum !=="0")
             {
                  sum  = sum + sig+ sumon[y];
             }
             
      }//for
       if (sum==="")
       {
           sum = "0";
       }
       
    if(sum.substring(0,1) ==="+")
    {
        sum =sum.substring(1);
    }
    return sum;
   
   
   };
   
 
   //*****************************************+ Multiplicación ****************************************
   //
   //
   function termXterm(caden)// this.termXterm = function (caden)
   {
     //caden: String:  expr1 *  expr2
     ma =[];
     ma2 =[];
    
   var pa = caden.indexOf("]*[");
   var pa2 = caden.indexOf("*[");
   var pa3 = caden.indexOf("]*");
   if(pa !==-1)
   {
       var tern = caden.split("]*");
       tern[0] = tern[0].substring(1);
     
       var tem = tern[0].replace(/\+/,"*+");
       var tem2 = tem.replace(/\-/,"*-");
       
       var tec = tem.split("*");
       var sub=[];
       for (var x=0; x<tec.length;x++)
       {
           if(tec [x].substring(0,1) ==="+")
           {
              tec[x] =tec [x].substring(1);
           }
           sub[x] = tec [x]+"*"+tern[1];
       }
       
      
   }
   else if(pa2 !==-1)
   {
       
       alert("Asterísco sencillo = "+pa2); 
   }
    else if(pa3 !==-1)
   {
       var respue =[];
       var red =[];
       var cad =caden.split("*");
       var ias =cad[0].indexOf("]");
       var sip = cad[0].substring(1,ias);
       var sip2 = sip.replace(/\+/g,"*+") ;
        var sip3 = sip2.replace(/-/g,"*-") ;
        var sip4 = sip3.split("*");
        red[0] = sip4[0]+"*"+cad[1];
         red[1]=sip4[1]+"*"+cad[1];
         
         numerosLetras(red[0]);
         sinCor();
         respue[0] = remu;
         
         numerosLetras(red[1]);
         sinCor();
         
          respue[1] = remu;
     
   }
   else
   {
       var cade = caden.split("*");
       numerosLetras(cade);
       sinCor();
    
   }       
      return remu;
      
          
   
};//term *  term
 function conjunto(tien)
    {
       // alert("tien = "+tien);
        const tiene =new Set();
        //var nu = new Set(tien)
        const letters = new Set(["a","b","c","a"]);
        for (var x=0;x<tien.length;x++)
        {
            var ti = recorte(tien[x]);
            tiene.add(ti);
        }
     
  
    return tiene;
       
     
  }//Conjunto   
  
  
  function sinCor()
  {
    
       var pro =[];
   var prod=1;
   
   var frac = new fraccionarios();
  
         for(var x =0;x<ma.length;x++)
         {
             prod = frac.multiFrac(prod.toString(),ma[x].toString());          
             pro[x] = prod;
        } //for
        
        //  alert("ma = "+ma+ " pro = "+pro);
       
        //**************************** Obtener bases y exponentes **********************
        
         
       var mac = "";
      for (var x=0;x<ma2.length;x++)
      {
          mac = mac + ma2[x];
      }
      
      var bas =[];
      var exos =[];
     
      for (var y=0;y<ma2.length;y++)
      {
          var bno = new  separarExponenteDeBase(ma2[y]);
           bas[y] = bno.displayBa();
           exos[y] = bno.displayEx();
      }
      
   
         //**************************** Fin Obtener bases y exponentes **********************
         
         
        var mcf="";
        var hav =  conjunto(bas);
       
      var  bus = Array.from(hav);
          var suman =[];
   var sumador="";
   var sig ="";
   
  
    for(var y =0;y<bus.length;y++)
      {
         for(var x =0;x<exos.length;x++)
         {
             
          if(bas[x].toString() ===bus[y].toString())
          {
             if(x>0)
             {
                 if (exos[x]>0)  //ojo cambiar para tener en cuenta exponentes literales
                 {
                     sig ="+";
                 }
                 else
                 {
                     sig ="";
                 }
             }
             if(exos[x] ==="")
             {
                 exos[x]=0;
             }
            // alert("exos["+x+"] = "+exos[x]);
             sumador =sumador+sig+exos[x] ;
             suman[y] = sumador;
          }
          
          
        } //SEgundo for
        
        sumador ="";
    }
    
  
         var resum =[];
        
       for(var x =0;x<suman.length;x++)
         {
              if(suman[x].substring(0,1 )==="+")
               {
                   suman[x] = suman[x].substring(1);
               }
            var sigma = suman[x].indexOf("+") ;
            var sigme = suman[x].indexOf("-") ;
            if (sigma >-1 ||  sigme >-1)
            {
              
                resum [x] =suma(suman[x]);
               
            }
            else
            {
                
                resum[x] = suman[x];
               
            }
         }
      
   
        remu="";
   
          for(var x =0;x<resum.length;x++)
         {
             if(resum[x].toString() !=="0" )
             {
                 if (bus[x] !=="*")
                 {
                     var ee ="^("+resum[x]+")";
                     
                     var rsu =resum[x].toString();
                     if(rsu ==="1"  || resum[x] ==="")
                     {
                         remu = remu + bus[x];
                     }
                     else
                     {
                          remu = remu + bus[x] +ee ;  
                     }
                    
                 }
                
               
             }
             
              
         }
         if (remu.toString() !=="1")
         {
            remu = prod+remu; 
         }
       
  }//sinCor()
  
 function numerosLetras(marca)
 {
    
     var b;
     var a;
     var ma3=[];
   var j=0;
    for(var i=0;i<marca.length;i++)
    {
       b = marca[i];
       if(b.substring(0,1) ==="+")
       {
          b=b.substring(1);
       }
       var sla = b.indexOf("/");
      
       if(sla !==-1)
       {
          var sl = b.indexOf("/");
          //var le = b.substring(sl+1);
           var otraParte = b.substring(sl+1);
           var nul = parseInt(otraParte);
            var nuls  = nul.toString();
           var lei = b.indexOf(nuls);
           
           a= b.substring(0,lei+nuls.length);
           
       }
       else
       {
           // alert("por marca = "+marca);
               a = parseInt(b);
    
          if(isNaN(a))
         {
            a=1;
           if(b.substring(0,1) ==="-")
          {
             a = -1;
          }
         }//isNan
      }//else
      
     
     ma[i] = a;
     var nuj = parseInt(b);
     var li;
     if(isNaN(nuj))
     {
         li =b;
     }
     else
     {
        li = b.replace(a,"");
     }
  
     if(li.substring(0,1)==="-")
     {
         li =li.substring(1);
     }
     
    if(li !=="")
      {
         ma3[j] = li; 
         j++;
      }
     
 }//for

  var i=0;
  
  
  
  var mat ="";
  for(var j=0;j<ma3.length;j++)
  {
      mat = mat + ma3[j];
  }
 

    var teko =  desco(mat);
    
    ma2[i] =pp;
   
  
     while (teko !=="" ) {
        i++;
         teko =  desco(teko);
        
         ma2[i] =pp;
        
       }
    
      //  ma2 = ma3;
     
      
 }//  numerosLetras(marca)


  function desco(mate)
  {
      var pi2;
     // var pp;
      var sp;
      var su = mate.substring(1,2);
    
     var pi = mate.indexOf("^(");
     
    
    
     if(su ==="^") //pi !==-1 && 
     {
        pi2 = mate.indexOf(")") ;
        pp = mate.substring(0, pi2+1);
        sp = mate.substring(pi2+1);
        
     }
     else
     {
         pp = mate.substring(0, 1);
         sp = mate.substring(1);
         
        
     }
   
     return sp;
  }//desco
  
    this.resultadoSuma = function(sad)
   {
       var su = suma(sad);
      return su; 
   };
    this.resultadoDivision = function(sad)
   {
       
       var divo = division(sad);
      return divo; 
   };
   
    this.resultadoMulti = function(sad)
   {
     
       var divo = termXterm(sad);
      return divo; 
   };
   
   
}//OperacionesBasicas

 function sepaNumLit (stNum)//Regresa int num
  {
        
       var num;  //Pertenece a num
      num = parseInt(stNum) ;
     if (isNaN(num))
     {
         num = 1;
         
     }
     var lit = stNum.replace(num,"");
     
  
     this.nummer = function()
     { 
         return num; 
     };
     this.literal = function()
     { 
         return lit; 
     };
    
  }
  
  function eleva(t)
{
   
     var t2 = t.replace(/\^\(/g,"<sup>");
     
     var t3 = t2.replace(/\)/g,"</sup>");//"^("
 
    
    return t3;
}