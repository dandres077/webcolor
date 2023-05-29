/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function variableEstatica ()
{
  //  function foo() {

    if( typeof variableEstatica.counter === 'undefined' ) {
        variableEstatica.counter = 0;
    }
    var x= variableEstatica.counter++;
    return x;
   // document.write(variableEstatica.counter+"<br />");
//}
}
