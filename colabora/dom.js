/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function caja()
{
 
    this.cajas = function()
    {
    
        var caj ="Cantidad de filas: <input type ='text' id ='fil' class = 'filCol'>"+
                           "<br><br>Cantidad de columnas "+
                           "<input type ='text' id ='col' class = 'filCol'> "+
                           "<input type ='button' id ='botDim' class = 'fi'>";
                   
                   
                   return caj;
    };
    this.cajaTri = function(ma, a)
    {
       
        var caja = new Array(ma.length);
        for(var i=0;i<ma.length;i++)
        {
            caja[i] = new Array(ma[i].length);
        }
          
        for(var i=0;i<ma.length;i++)
        {
            for(var j=0;j<ma[i].length;j++)
            {
                 caja[i][j] = new Array(ma[i][j].length);
            }
           
        }
        for(var i=0;i<ma.length;i++)
        {
            for(var j=0;j<ma[i].length;j++)
            {
                for(var k=0;k<ma[i][j].length;k++)
                {
                     caja[i][j][k] = "<input class = 'filCol' id = '"+a+"_"+
                                       i+"_"+j+"_"+k+"'>";
                }
                
            }
           
        }
      
        return caja;
    };
      this.datos = function(ma,a)
    {
        var dat ="";
        for(var i=0;i<ma.length;i++)
        {
            for (var j=0; j<ma[i].length;j++)
            {
              dat = dat +   "<input type ='text' id ='"+a+i+"_"+j+"' class = 'filCol'> ";
            }
            dat = dat + "<br>";
        }//for 1
        
       // alert("n: "+n+ " m:  "+m+ " dat "+dat);
        return  dat;
    };
     
    this.datos2 = function(ma,a)
    {
        
        //n: cantidad de filas. m: cantidad de columnas; a =letra del  id.
         var dat =new Array(ma.length);
         for (var j=0; j<ma.length;j++)
            {
              dat[j] = new Array(ma[j].length);
            }
        for(var i=0;i<ma.length;i++)
        {
            for (var j=0; j<ma[i].length;j++)
            {
              dat[i][j] = "<input type ='text' id ='"+a+i+"_"+j+"' class = 'filCol'> ";
            }
        }//for 1
       
    return  dat;
    };
}//caja

function botValidacion(id,tur)
      {
           // var    id = idM;  
            
          //alert("id  idM: "+id);
          
         
              var err=0;
              var infoCa;
               var respe ="";
                 var indEr=[];
                     
                 var ik=0;
         this.crearBot = function()
         {
             var men = "Paso "+(tur+1)+": Haga clic para validar respuesta";;
             var bot = "<input type ='button' id = '"+id+"' value ='"+men+
                  "'>";
             return bot; 
         };
         
         this.botValidaEvento = function(respSis,p,indice)
         {
              
                 err=1;  //No hay error
                 var men="";
           
                 
                 infoCa = new Array (respSis.length);
                for(var i=0;i<respSis.length;i++)
                 {
                     infoCa[i] = new Array(respSis[i].length);
                 }
                
             
                  
                 var user="";
                 var sis ="";
                 
                 var flag=1;
                 
                // alert(" respSis.length = "+respSis.length+ " respSis[0].length = "+respSis[0].length);
                 for(var i=0;i<respSis.length;i++)
                 {
                     for(var j=0; j<respSis[0].length;j++)
                    {
                        var idf= p+i+"_"+j;
                         sis =respSis[i][j].toString();
                       
                         sis = recorte(sis);
                        
                        var user2 = $("#"+idf).val();
                         var user2Ind = user2.indexOf("^") ;
                       
                        
                        user = user2.toString();
                        
                        respe= respe+" "+user;
                         
                        // alert(" respe "+ respe);
                         
                         user = recorte(user);
                         
                         infoCa[i][j] = user;
                                                                  
                       if( j === (respSis[0].length-1) && indice ==="max")
                        {
                           flag =1;
                            
                        }
                       
                       if(user !== sis)
                         {
                           
                             err = 0;
                            
                            
                        
                             $("#"+p+i+"_"+j).css({"background":"red"});
                        
                         }
                       else
                         {
                              $("#"+p+i+"_"+j).css({"background":"#cccccc"});
                         }
                         
                        // alert("err :  "+err+ "respSis["+i+"]["+j+"] =  "+respSis[i][j]);
                   
                    }//for
                }//for
                 
                               
                 if(err ===1)
                 {
                       alert("No se presentaron errores en ninguna de sus respuestas");
                       if (flag ===1)
                       {
                           err=2;
                       }
                        
                      
                 }
                 else
                 {
                       men = "Se presentaron algunos errores, cajas con fondo rojo. "+
                       "Corríjalos y nuevamente presione el boton de validar la respuesta.";
                         alert(men);  
                 }
         
         };  //botValidaEvento 
         
        this.botFilaConst = function(respSis,p,indice,tour)
         {
              alert("rep Fun mate[tour]= "+respSis+ " p= "+p + " indice = "+indice);
            
                 err=1;  //No hay error
                 var men="";
               
                 infoCa = new Array (respSis.length);
              
                 var user="";
                 var sis ="";
                 
                 var flag=0;
                  
               
                     for(var j=0; j<respSis.length;j++)
                    {
                     var idf= p+tour+"_"+j;
                        
                      
                         sis =respSis[j].toString();
                         
                        
                         sis = recorte(sis);
                         
                                        
                        var user2 = $("#"+idf).val();
                                                           
                         var user2Ind = user2.indexOf("^") ;
                      
                        user = user2.toString();
                        
                        respe= respe+" "+user;
                                                
                         user = recorte(user);
                                                  
                         infoCa[j] = user;
                    
                       if( tour === indice && j===(respSis.length-1))// && indice ==="max"
                        {
                           
                            flag =1;
                        }
                   
                       if(user.toString() !== sis.toString())
                         {
                             
                             err = 0;
                             
                             indEr[ik] = j;
                             ik++;
                        
                             $("#"+p+tour+"_"+j).css({"background":"red"});
                         
                         }
                       else
                         {
                            
                          
                               
                              $("#"+p+tour+"_"+j).css({"background":"#cccccc"});
                         }
                               
                    
                    }//for
               // }//for
                 
                 var er = parseInt(err);
                 if(er ===1)
                 {
                       alert("No se presentaron errores en ninguna de sus respuestas");
                       if (flag ===1)
                       {
                           err=2;
                       }
                        
                      
                 }
                 else
                 {
                       men = "Se presentaron algunos errores, cajas con fondo rojo. "+
                       "Corríjalos dando clic sobre la caja de texto, luego presione"+
                       " ENTER, seguido "+
                       "presione nuevamente sobre el"+
                       " boton de validar la respuesta.";
                         alert(men);  
                 }
                 
                 
             
             
          // });//click
         };  //botFilaConst
          this.botFilaConstTree = function(respSis,p,indice,tour,k, fi)
         {
           //respSis = fila recibida. p: letra identifica id.
           //indice = (respSislength-1). tou: indice la fila,k: Tabla
                 err=1;  //No hay error
                 var men="";
               
                 infoCa = new Array (respSis.length);
              
                 var user="";
                 var sis ="";
                 
                 var flag=0;
                  
               
                     for(var j=0; j<respSis.length;j++)
                    {
                     var idf= p+"_"+k+"_"+tour+"_"+j;
                        
                    
                         sis =respSis[j].toString();
                         
                        
                         sis = recorte(sis);
                         
                                        
                        var user2 = $("#"+idf).val();
                                                           
                         var user2Ind = user2.indexOf("^") ;
                      
                        user = user2.toString();
                        
                        respe= respe+" "+user;
                                                
                         user = recorte(user);
                                                  
                         infoCa[j] = user;
                    
                       if( fi === indice && j===(respSis.length-1))// && indice ==="max"
                        {
                           
                            flag =1;
                        }
                   
                       if(user.toString() !== sis.toString())
                         {
                             
                             err = 0;
                             
                             indEr[ik] = j;
                             ik++;
                        
                             $("#"+p+"_"+k+"_"+tour+"_"+j).css({"background":"red"});
                         
                         }
                       else
                         {
                            
                          
                               
                              $("#"+p+"_"+k+"_"+tour+"_"+j).css({"background":"#cccccc"});
                         }
                               
                    
                    }//for
               // }//for
                 
                 var er = parseInt(err);
                 if(er ===1)
                 {
                       alert("No se presentaron errores en ninguna de sus respuestas");
                       if (flag ===1)
                       {
                           err=2;
                       }
                        
                      
                 }
                 else
                 {
                       men = "Se presentaron algunos errores, cajas con fondo rojo. "+
                       "Corríjalos dando clic sobre la caja de texto, luego presione"+
                       " ENTER, seguido "+
                       "presione nuevamente sobre el"+
                       " boton de validar la respuesta.";
                         alert(men);  
                 }
                 
                 
             
             
          // });//click
         };  //botFilaConst
         
     this.bidi =     function (mat)
         {
             var error=1;
             for(var t=0;t<mat.length;t++)
              {
                  for (var k=0; k<mat[t].length;k++)
                  {
                      var idf= "h"+t+"_"+k; 
                       var user2 = $("#"+idf).val();
                       
                       if(user2.toString() !==mat[t][k].toString())
                       {
                           $("#"+idf).css({"background":"red"});
                            error =0;
                       }
                       else
                       {
                          
                           $("#"+idf).css({"background":"#cccccc"}); 
                       }
                      
                  }
              }
              return error;
              
         };
         
         this.respuestas = function()
         {
             return  indEr;
         };
         
         this.error = function()
         {
            
             return err;
         };
         
         this.inCa = function()
         {
            return infoCa; 
         };
       
      }


