/**
 * This returns the string hello
 * @returns the String hello
 */
 function hello (): String {
  return "Hello World";
};

/**
* turns demo red
*/
function turnRed() {
  if(document != null){
      let c = document.getElementById("demo").style.color;
      console.log(c);
      if(c === 'red'){
          document.getElementById("demo").style.color = "black";
      }else{
          document.getElementById("demo").style.color = "red";
      }
  }    
}

export {hello, turnRed}