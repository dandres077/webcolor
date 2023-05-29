/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
class resuelveEcuacion{
  constructor() {
      
  }
  solUnaVariable(mel)
    {
        //Resuelve ecuación con una  variable ax +  b = cx +d se obtiene x = (d - b) / (a - c)
       
  
        var igu = mel.split("=");
        
        var me=[];
          var meo = new separaNumLit();
          me[0] = meo.sepTer(igu[0]);
          me[1] = meo.sepTer(igu[1]);
          var der=[];
          var izq =[];
       
         var r=0;
         var w=0;
                  
         var sumo = new fraccionarios();
       
        for(var q=0;q<me.length;q++)
        {
         
          for(var t=0;t<me[q].length;t++)
          {
               let result = me[q][t].match(/[a-z]/g);
               if(result===null)
               {
                  
                  der[r]= me[q][t];
                  if(q===0)
                  {
                    der[r] = sumo.multiFrac("-1",der[r].toString());//-1*der[r];  
                  }
                  r++;
               }
               else
               {
                   izq[w]= me[q][t];
                   var te="";
                 
                   if(q===1)
                   {
                       te= sumo.multiFrac("-1",izq[w].toString());//"-1"+izq[w]; 
                       izq[w] = te+result;
                   }
                   w++;
               }
          }
        } 
        
       
      //  der[0] = sumo.multiFrac("-1",der[0].toString());//-1*der[0];
        var sig = parseInt(izq[1]);
             
               
        var suma=sumo.sumFrac(der[0].toString(), der[1].toString());
        
        const pattern = /[a-z]/;
      var re = pattern.exec(izq[0]);
      
      var nui= izq[0].indexOf(re);
      
       var nuu = izq[0].substring(0,nui);
       
       // Segundo número
       
        
        const pattern2 = /[a-z]/;
      var re2 = pattern2.exec(izq[1]);
      
      var nui2= izq[1].indexOf(re2);
      
       var nuu2 = izq[1].substring(0,nui2);
       
          var suma2 = sumo.sumFrac(nuu.toString(),nuu2.toString());
         
          var ter=new Array(2);
          
          ter[0]=new Array(2);
          ter[1]= new Array(2);
         ter[2]= new Array(2);
          var si ="+";
          var sin= parseInt(izq[1]);
        if(sin<0)
        {
           
            si="";
        }
        var sig2="+";
         if(der[1]<0) 
         {
             sig2 ="";
         }
      
          ter[0][0] = izq[0]+si+izq[1]; //suma2+re2;
          ter[0][1] = der[0].toString()+sig2+der[1];
          
        var isu = sumo.invMulti(suma2.toString());
         var tot;
        if(isu ==="error")
        {
            tot = "NF";
        }
        else
        {
            tot = sumo.multiFrac(isu.toString(),suma.toString());
        }
                  
           //var tot = sumo.multiFrac(isu.toString(),suma.toString());
           
           if(suma2.toString() ==="1")
           {
              suma2=""; 
           }
          
            ter[1][0] = suma2+re2;;
           ter[1][1] = suma;
           
           ter[2][0] = re2;
           
           ter[2][1] = tot;
            return ter;
        
    }//organizaEcua
   
 porEliminacion(ec)
      {
                    
           var ecu = ec[0].split("=");
           var ecu2 = ec[1].split("=");
           
        
           var sig =ecu[1].substring(0,1);
           var sig2 =ecu2[1].substring(0,1);
           
           if(sig==="-")
           {
               sig="";
           }
           else
           {
               sig="+";
           }
           
           if(sig2==="-")
           {
               sig2="";
           }
           else
           {
               sig2="+";
           }
           var ecus=[];
            ecus[0]= ecu[0]+sig+ecu[1];
            ecus[1]= ecu2[0]+sig2+ecu2[1];
           
         
           //***************** Multiplicar ecuación 2 por nu[0]
           var term = sepTer(ecus[0]);
           var term2 = sepTer(ecus[1]);
           var num = new  separaNumLit();
           
            var num2 = new  separaNumLit();
                       
           var nut =[];
                   
           var nut2 =[];
         
          for(var x=0;x<term.length;x++) 
          {
             nut[x] =  num.sepaNuLi(term[x]); 
          }
       
          //**************Números de la primera ecuación *************
          
          var nu=[];
          var li=[];
          nu[0] =  nut[0].num; 
       
           for(var x=0;x<nut.length;x++) 
          {
             nu[x] =  nut[0].num; 
             li[x] =  nut[1].lite; 
          }
          
        
           for(var x=0;x<term2.length;x++) 
          {
             nut2[x] =  num2.sepaNuLi(term2[x]); 
          }
       
            var nu2=[];
          var li2=[];
           for(var x=0;x<nut2.length;x++) 
          {
             nu2[x] =  nut2[0].num; 
             li2[x] =  nut2[1].lite; 
          }
          
          var nuo = new operacionesFilas();
                    
          var frac = new fraccionarios();
          
          var cs = frac.multiFrac("-1", nu2[0].toString());
       
          var fras = frac.displaySimplifica(nu2[0].toString()+"/"+nu[0].toString());
          var d=[];
          var sl = fras.indexOf("/");
         
          if(sl ===-1)
          {
              d[0]= fras;
              d[1] =1;
              fras = fras+"/1";
          }
          else
          {
              var dd= fras.split("/");
           
              d[0] = dd[0];
              d[1] = dd[1];
              
          }
         
          var sigi="+";
          if(nu[1]<0)
          {
              
              sigi ="";
              // alert(" entró  = "+sigi);
          }
          var sigi2="+";
          if(nu2[1]<0)
          {
              sigi2 ="";
          }
         var sigi3 ="+";
         if(ecu[1]<0)
          {
              sigi3 ="";
          }
          
           var sigi4 ="+";
          // alert("Aquis ecu2[1] = "+ecu2[1]);
         if(ecu2[1]<0)
          {
             // alert("entro = "+ecu2[1]);
              sigi4 ="";
          }
         var resp =[];
         
         var sigs =[];
         
         if(ecu[1]<0)
         {
             sigs[0]="";
         }
         else
         {
             sigs[0]="+";
         }
          if(ecu2[1]<0)
         {
             sigs[1]="";
         }
         else
         {
             sigs[1]="+";
         }
     
         resp[0] =ecu[0].toString()+ sigs[0]+ecu[1];
         resp[1] =ecu2[0].toString()+ sigs[1]+ecu2[1];
                  
          var sol = new Array(5);
           
          sol[0] = new Array(1);
         sol[0][0]= fras;
                
                                 
          sol[1] = new Array(6);
            sol[1][0] = d[0];
            sol[1][1] = ecu[0];
            sol[1][2] = ecu[1];
            
          
            
              sol[1][3] = -1*d[1];
            sol[1][4] = ecu2[0];
            sol[1][5] = ecu2[1];
            
          
            
             var cad =[]; 
             cad[0] = d[0]+"("+resp[0]+")";
             cad[1] = (-1*d[1]).toString()+"("+resp[1]+")";
                       
            var proo = new multiplicaTerms();
            
            var pro = proo.display(cad[0]);
            
              var nupro = proo.displayNupro();
            
                        
            var proo2 = new multiplicaTerms();
            
            var pro2 = proo2.display(cad[1]);
            
            var nupro2 = proo2.displayNupro();
        
            var pp = pro2.substring(0,1);
            var sign ="+";
            if(pp ==="-")
            {
                sign ="";
            }
           var tyo = new operacionesBasicas();
           
           var pros =pro+sign+pro2;
           
         
                   
                   var suma = tyo.resultadoSuma(pro+sign+pro2);
                        //**************************** Prosignos **********************
               var tig =prosig(nupro[1]);
               var tig2 =prosig(nupro2[1]);
              // *************************** Fin Prosignos ********************
           sol[2] = new Array(4);
           sol[2][0]= nupro[0]+ tig+nupro[1];
           sol[2][1]= nupro[2];
           sol[2][2]= nupro2[0]+ tig2+nupro2[1];
           sol[2][3]= nupro2[2];
           
            var sumi = sepTer(suma);
            
              sol[3] = new Array(2);
              sol[3][0]=sumi[0];
             sol[3][1]=sumi[1];
             
             var ecuac =sumi[0]+"="+sumi[1];
             
             var  letra =  sumi[0].match(/[a-z]/g);
               num = sumi[0].replace(letra,"");
               
               if(num==="")
               {
                   num ="1";
               }
               
           //   alert("num = "+num);               
              var frac = new fraccionarios();
               var fra = frac.invMulti(num.toString());
               
                var pro = frac.multiFrac(fra.toString(),sumi[1].toString());
                
                if (num.toString()==="1")
                {
                   pro = sumi[1].toString();
                }
             
              // var res = re.despejaUnaVar(ecuac);
              sol[4] = new Array(2);
               sol[4][0]=letra;
               sol[4][1]=pro;
               return sol;
           
           
           function prosig(nuo)
           {
                var pp = nuo.substring(0,1);
                var sik ="+";
                if(pp ==="-")
                {
                    sik ="";
                }
                return sik;
           }
           
      }//porEliminacion
    despejaUnaVar(ec)
    {
        //****************** Dado by = c, se obtiene y = b / c *************************
        var ped = ec.split("=");
        var letra;
        var num;
          //let result = ped[0].match(/[a-z]/g);
          
         var sl = ped[0].indexOf("/");
         if(sl ===-1)
         {
             num = parseInt( ped[0]);
             if(isNaN(num))
             {
                 num =1;
                 letra=ped[0];
             }
             else
             {
                letra =ped[0].replace(num.toString(),""); 
             }
            
         }//if
         else
         {
              
               letra =  ped[0].match(/[a-z]/g);
               num = ped[0].replace(letra,"");
             
         }
         var frac = new fraccionarios();
         var fra = frac.invMulti(num.toString());
         
         var pro = frac.multiFrac(fra.toString(),ped[1].toString());
         
         var nuli=[];
         
         nuli[0] = letra;
         nuli[1] = pro;
         
             return nuli;
    }//DesjeaUnaVar
   
  dejaDos(ec)
  {
      //*****************  Dado ax + by + cz = d;  Se obtiene: b'y + c' z = d'
      
   
       var igu = ec[0].split("=");
          var sig ="+";
          if(igu[1] < 0)
          {
              sig = "";
          }
          var ruk = igu[0]+sig+igu[1];
          //*****************  Segunda ecuación ******************
           var igu2 = ec[1].split("=");
          var sig2 ="+";
          if(igu2[1] < 0)
          {
              sig2 = "";
          }
          var ruk2 = igu2[0]+sig2+igu2[1];
       
           
          //******************  Identificar coeficientes numéricos de los primeros términos
          //Separar términos
        var termo = new separaTerminos();
         
         var sep = termo.sepTer(ruk);
         var sep2 = termo.sepTer (ruk2);
          
          var frao = new separaNumLit();
          
          var fral = frao.sepaNuLi(sep[0]);
          var fral2 = frao.sepaNuLi(sep2[0]);
          
         // fra[0]=-1*fra[0];
        var fra = fral.num;
          fra=-1*fra;
          var produ=[];
         var fra2 = fral2.num;
          produ[0] = fra2+"("+ruk+")";  //fra2[0]
          produ[1] = fra+"("+ruk2+")";// fra[0]
        
          var pro =[];
          
         var proo=new multiplicaTerms();
           pro[0] = proo.display(produ[0]);
           
         var proo2=new multiplicaTerms();
          pro[1] = proo2.display(produ[1]);
          
           alert("fra = "+fra+ " fra2 = "+fra2+ " pro = "+pro);
          
          var pp = pro[1].substring(0,1);
          var si ="+";
          
          if(pp ==="-")
          {
              si ="";
          }
           var sum = pro[0]+si+pro[1] ;
           
          
           
           var sumao = new operacionesBasicas();
           
           var suma = sumao.resultadoSuma(sum);
        
          var solis = new Array(3);
          solis[0] = new Array(4);
          solis[1] = new Array(2);
          solis[2] = new Array(1);
          
         
          
          solis[0][0]=fra2;
          solis[0][1]="("+ruk+")";
          
          solis[0][2]=fra;
          solis[0][3]="("+ruk2+")";
          
          
          
            solis[1][0]=pro[0];
           solis[1][1]=pro[1];
            solis[2][0]=suma;
             
          return solis  ;
  }// ecuaTres()
  
}//class2


    
 class uniEc 
 {
     constructor() {
      
  }
   organizaEcua (mel)
    {
        //Recibe ecuación completa con variable. Pasos primero separa cada término
       
    
        var igu = mel.split("=");
        var me=[];
        
       
          var meo = new separaNumLit();
          me[0] = meo.sepTerm(igu[0]);
          me[1] = meo.sepTerm(igu[1]);
          
         
                   
          var der=[];
          var izq =[];
       
         var r=0;
         var w=0;
         
         var sumo = new fraccionarios();
       
        for(var q=0;q<me.length;q++)
        {
         
          for(var t=0;t<me[q].length;t++)
          {
               let result = me[q][t].match(/[a-z]/g);
               if(result===null)
               {
                  
                  der[r]= me[q][t];
                  if(q===0)
                  {
                    der[r] = sumo.multiFrac("-1",der[r].toString());//-1*der[r];  
                  }
                  r++;
               }
               else
               {
                   izq[w]= me[q][t];
                   var te="";
                 
                   if(q===1)
                   {
                       te= sumo.multiFrac("-1",izq[w].toString());//"-1"+izq[w]; 
                       izq[w] = te+result;
                   }
                   w++;
               }
          }
        } 
        
       
      //  der[0] = sumo.multiFrac("-1",der[0].toString());//-1*der[0];
        var sig = parseInt(izq[1]);
             
               
        var suma=sumo.sumFrac(der[0].toString(), der[1].toString());
        
        const pattern = /[a-z]/;
      var re = pattern.exec(izq[0]);
      
      var nui= izq[0].indexOf(re);
      
       var nuu = izq[0].substring(0,nui);
       
       // Segundo número
       
        
        const pattern2 = /[a-z]/;
      var re2 = pattern2.exec(izq[1]);
      
      var nui2= izq[1].indexOf(re2);
      
       var nuu2 = izq[1].substring(0,nui2);
       
          var suma2 = sumo.sumFrac(nuu.toString(),nuu2.toString());
         
          var ter=new Array(2);
          
          ter[0]=new Array(2);
          ter[1]= new Array(2);
         ter[2]= new Array(2);
          var si ="+";
          var sin= parseInt(izq[1]);
        if(sin<0)
        {
           
            si="";
        }
        var sig2="+";
         if(der[1]<0) 
         {
             sig2 ="";
         }
      
          ter[0][0] = izq[0]+si+izq[1]; //suma2+re2;
          ter[0][1] = der[0].toString()+sig2+der[1];
          
        var isu = sumo.invMulti(suma2.toString());
                  
           var tot = sumo.multiFrac(isu.toString(),suma.toString());
          
            ter[1][0] = suma2+re2;;
           ter[1][1] = suma;
           
           ter[2][0] = re2;
           
           ter[2][1] = tot;
          
            return ter;
        
    }//organizaEcua
    
    despejaUnaVar(ec)
    {
        var ped = ec.split("=");
        var letra;
        var num;
          //let result = ped[0].match(/[a-z]/g);
          
         var sl = ped[0].indexOf("/");
         if(sl ===-1)
         {
             num = parseInt( ped[0]);
             if(isNaN(num))
             {
                 num =1;
                 letra=ped[0];
             }
             else
             {
                letra =ped[0].replace(num.toString(),""); 
             }
            
         }//if
         else
         {
              
               letra =  ped[0].match(/[a-z]/g);
               num = ped[0].replace(letra,"");
             
         }
         var frac = new fraccionarios();
         var fra = frac.invMulti(num.toString());
         
         var pro = frac.multiFrac(fra.toString(),ped[1]);
         
         var nuli=[];
         
         nuli[0] = letra;
         nuli[1] = pro;
         
             return nuli;
    }//DesjeaUnaVar
 }














class ResEcuacion {
  constructor() {
      
  }

  separaTerminosEcuacion(sisEcua) {
      
       // this.ec = sisEcua;
      var ec = sisEcua;
     
   
     var igu = ec[0].indexOf("=");
      var tem;
      var pc ="";
     var term =[];
      if(igu ===-1)
      {
          return ("Olvidó el igual.  Por favor revise.");
      }
      
       var sep = ec[0].split("=") ;
       
       var pru =ec[0].split("=") ;
       
      
       
             
       var sig ="+";
       
       if(pru[1] <0)
       {
           sig="";
       }
      var  pruk= pru[0]+sig+pru[1].toString();
      
       var nuy = sepTer (pruk);
    
       var terioso = new nuli();
       
       var tt =terioso.sepaNuLi(nuy[0]);
      
       
       var terios = [];
       for(x=0;x<nuy.length;x++)
       {  
          terios[x]=  terioso.sepaNuLi(nuy[x]);
       }
      //  terioso.sepaNuLi()
        alert("ec[0]"+ec[0]+" Este pru[0] = "+pruk+" sig = "+sig+ " terios[x] = "+terios);
   /*  var  pruk=pro[0]+sig+sep[1];
       
       
       
       alert("pru = "+pruk);*/
       
       var ixm = sep[0].indexOf("+");
       if(ixm !==-1)
       {
           tem = ixm;
       }
       else
       {
           pc = sep[0].substring(0,1);
           if(pc !=="-")
           {
               tem = sep[0].indexOf(("-"));
           }
           else
           {
               var est = sep[0].substring(1);
               tem = est.indexOf("-")+1;
           }
       }//ixm !==-1)
       
      
       var nuyo = sepTer (sep[0]);
       term[0] = nuyo[0];
       term[1] = nuyo[1];
       term[2] = sep[1];
       
            
        
       //***********************  Numeros ******************
       var nu=[];
        for(var x=0;x<term.length;x++)
        {
            nu[x] = parseInt(term[x]);
           if(isNaN(nu[x]))
           {
             nu[x]=1; 
           }
        }
       
       //****************  Fin numeros ***********************
       
       //*******************  Despeje ************************
       var pronu= -1*nu[1] ;
     
       var sig ="+";
       if(pronu<0)
       {
           sig ="";
       }
        
       term[1] = term[1].replace(nu[1].toString(),pronu.toString());
      
       var frac= new fraccionarios();
    
       var inv = frac.invMulti(nu[0].toString());
       
       var nud =[];
      
       nud[0] = frac.multiFrac(inv,pronu.toString());
       nud[1] = frac.multiFrac(inv,nu[2].toString());
    var sil = nud[1].toString().substring(0,1);
    
    var sig2 ="+";
    if(sil ==="-")
    {
        sig2 ="";
    }
    var x= "x="+nud[0]+"y"+sig2+nud[1];
    // *****************************  Final *****************
    
      var re =x.substring(2);
      
      var re ="("+re+")";
      var reem = ec[1].replace("x",re);
      
      var proo = new multiplicaTerms();
      
      var pro = proo.display(reem);
      
      var sec = ec[1].split("=");
      
     // var  nujo = new separaTerminos(sec[0]);
      
      var nuy = sepTer (sec[0]);
      
      var nuc = parseInt(nuy);
      
      if(isNaN(nuc))
      {
          nuc=1;
      }
      
           
      re = nuc.toString()+re;
            
      var reem2 =reem.replace(re,pro);
      
       var px = x.split("=");
       var pr = reem.split("=");
        var pr2 = reem2.split("=");
       
       var solu =new Array(3);
       solu[0] = new Array(2);
         solu[1] = new Array(2);
           solu[2] = new Array(2);
         solu[3] = new Array(2);
        solu[4] = new Array(2);
        solu[5] = new Array(2);
        solu[6] = new Array(2);
        solu[7] = new Array(2);
       
       solu[0][0]=px[0];
       solu[0][1]=px[1];
       solu[1][0]=pr[0];
       solu[1][1]=pr[1];
       solu[2][0]=pr2[0];
       solu[2][1]=pr2[1];
       var soi = solu[2][0]+"="+solu[2][1];
     
      
       var oro = new uniEc();
                  
      var meu = oro.organizaEcua(soi);//organizaEcua (soi);
   
            solu[3][0]=meu[0][0];
            solu[3][1]= meu[0][1];
            
             solu[4][0]=meu[1][0];
            solu[4][1]= meu[1][1];
            
             solu[5][0]= meu[2][0];
              solu[5][1]= meu[2][1];
              
                var nuker =  px[1].replace("y","("+ meu[2][1]+")");
              
              solu[6][0] =px[0];
              solu[6][1] =nuker;
              
               
              
               solu[7][0] =px[0];
               var conme = px[1].split("y");
               
               var pp = conme[1].substring(0,1);
               
               if (pp ==="+")
               {
                   conme[1] = conme[1].substring(1);
               }
               
              var  prui =frac.multiFrac(meu[2][1].toString(),conme[0].toString());
               
               
                 solu[7][1] = frac.sumFrac(prui,conme[1]);
              
          
            
        $("#desa").append("meu[2][1]= "+meu[2][1]+ " conme = "+conme[0]+ " solu[7][1] = "+solu[7][1]+
               " solu[7][1]= "+solu[7][1]+ "<br><br>Solu: "+solu);
              
      return solu;
     
   
     //  return term;     
  }//
  
  
}//class

