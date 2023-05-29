/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recorte(txt)
   {
       var txtR="";
       var j;
       
       var txt2 =txt;
       
       if(typeof txt2 !=="string")
       {
           txt = txt2.toString();
       }
        
       for (j=0;j < txt.length;j++)
           {
            
           if(txt[j]!==" ")
                   {
                    
                   
                    
               txtR= txtR+txt[j];
               
                   }
        
           }
           
               
       return txtR;
   }
   
   function parenti(x,y,lar,an)
    {
        
    var ink= lar/6+x;
    var m= lar/10;
    var xd=an+x;
  var fig ='<svg height="'+(lar+60)+'" width="'+(an+30)+'">' +
          ' <line x1="'+x+'" y1="'+y+'" x2="'+x+'" y2="'+(y+lar)+
          '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
            ' <line x1="'+x+'" y1="'+y+'" x2="'+ink+'" y2="'+(y-lar/6)+
             '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
              ' <line x1="'+x+'" y1="'+(y+lar)+'" x2="'+ink+'" y2="'+(y+lar+lar/6)+
             '" style="stroke:rgb(255,0,0);stroke-width:2" />'+   //otro lqado
               '<line x1="'+xd+'" y1="'+y+'" x2="'+xd+'" y2="'+(y+lar) +
                       '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
            ' <line x1="'+xd+'" y1="'+y+'" x2="'+(xd-lar/4)+'" y2="'+(y-lar/6)+
             '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
              ' <line x1="'+xd+'" y1="'+(y+lar)+'" x2="'+(xd-lar/4)+'" y2="'+(y+lar+lar/6)+
           '</svg>';
   
  
        
        return fig;
    }
    
    
    function parenti2(x,y,lar,an)
    {
        
    var ink= lar/6+x;
    var m= lar/10;
    var xd=an+x;
  var fig ='<svg height="'+(lar+60)+'" width="'+(an+30)+'" id ="pa">' +
          ' <line x1="'+x+'" y1="'+y+'" x2="'+x+'" y2="'+(y+lar)+
          '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
            ' <line x1="'+x+'" y1="'+y+'" x2="'+ink+'" y2="'+(y-lar/6)+
             '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
              ' <line x1="'+x+'" y1="'+(y+lar)+'" x2="'+ink+'" y2="'+(y+lar+lar/6)+
             '" style="stroke:rgb(255,0,0);stroke-width:2" />'+   //otro lqado
               '<line x1="'+xd+'" y1="'+y+'" x2="'+xd+'" y2="'+(y+lar) +
                       '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
            ' <line x1="'+xd+'" y1="'+y+'" x2="'+(xd-lar/4)+'" y2="'+(y-lar/6)+
             '" style="stroke:rgb(255,0,0);stroke-width:2" />'+
              ' <line x1="'+xd+'" y1="'+(y+lar)+'" x2="'+(xd-lar/4)+'" y2="'+(y+lar+lar/6)+
           '</svg>';
   
  
        
        return fig;
    }
    
    function linea(x11,y11,x21,y22)
    {
       var  x1=x11;
       var  x2=x21;
       
        var  y1=y11;
        var  y2=y22;
       
        var lin = '<svg height="210" width="500">'+
     ' <line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" style="stroke:rgb(255,0,0);stroke-width:2" />'+
     '</svg>';
     return lin;
    }
    
    function tablas(matr)
  {
       var mat =[];
       var tabla = "<table>";
       
      // alert("matr[0].length "+matr[0].length);
         if (typeof matr[0].length ==="undefined") 
         {
             mat[0]= matr;
         }
         else
         {
             mat = matr;
         }
                      
        for(var i=0;i<mat.length;i++)
        {
           
            tabla = tabla +"<tr>";
            
            for(var j=0;j<mat[i].length;j++)
            {
                
               tabla = tabla+ "<td class='an'>"+mat[i][j]+"</td>";
              
            }
            tabla = tabla +"</tr>";
        }
        tabla = tabla +"</tabla>";
        
   
     return tabla;
  }//tablas
          
  
  function figuras (iz, gr, ad, fi, graf,tabla)
         {
            
             $("#"+iz).append("<div id ='"+gr+"'>");
               $("#"+gr).append("<div id = '"+fi+"'>");
             $("#"+gr).append("<div id = '"+ad+"'>");
           
              $("#"+ad).append(tabla);    
             $("#"+fi).append(graf);
            
             
              $("#"+fi).css({"position":"absolute","top":"0em","left":"0em"});
              $("#"+ad).css({"position":"absolute","top":"1em","left":"1.3em"});
             
         }
 