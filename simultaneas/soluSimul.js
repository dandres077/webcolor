/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

class soluSimul{
    constructor()
    {
       
    }
     despejeUna(sisEcua)
        {
            //Resuelve la ecuación ax +  b = cx +d se obtiene x = (d - b) / (a - c)
             var ec = sisEcua;
     var ecStr =ec[0].toString();
      var igu = ecStr.indexOf("=");
      var tem;
      var pc ="";
     var term =[];
      if(igu ===-1)
      {
          return ("Olvidó el igual.  Por favor revise.");
      }
      
       var pru =ecStr.split("=") ;
       var sig ="+";
       
       if(pru[1] <0)
       {
           sig="";
       }
      var  pruk= pru[0]+sig+pru[1].toString();
         var nuyob = new  separaNumLit();
        
        var nuyo = nuyob.sepTer (pruk);
       var terios = [];
       for(var x=0;x<nuyo.length;x++)
       {  
          terios[x]=  nuyob.sepaNuLi(nuyo[x]);
       }
   
       var nu=[];
       var li=[];
       
       var i=0;
       var j=0;
         for(var y=0; y<terios.length;y++)
            {
                nu[y]=terios[y].num; 
                li[y]= terios[y].lite; 
            }
          
     
        var pronu= -1*nu[1] ;
     
       var sig ="+";
       if(pronu<0)
       {
           sig ="";
       }
          
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
    var nus =nud[0].toString();
    if(nus ==="1")
    {
        nus ="";
    }
    var x= "x="+nus+"y"+sig2+nud[1];
    return x;
  }//decuaespejeUna
  reemEcua(rem, ecu, x)
  {
      //rem:  Reemplazante; ecuación, variable a reemplazar
      var ecur = ecu.replace(x, rem);
      return ecur;
  }//reemEcua
  organizaEcua (mel)
    {
        //Recibe ecuación completa con variable. Pasos primero separa cada término
      
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
    
    resuelveTres(ec)
    {
        
        var soliso = new resuelveEcuacion();//ResEcuacion2();
        
        var ecs = [];
        
        ecs[0] = ec[0];
        ecs[1] = ec[1];
        var solis = soliso.dejaDos(ecs);
      
         return solis;
    }
   
}
