//Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
//The function should return true if the string is valid, and false if it's invalid.

//Examples
//"()"              =>  true
//")(()))"          =>  false
//"("               =>  false
//"(())((()())())"  =>  true
//Constraints
//0 <= input.length <= 100

//Date Compeleted 06/29/2020

function validParentheses(parens){
  
  var leftParensCount = 0; 
  var rightParensCount = 0; 
  
  for( var i =0; i < parens.length; i++ ){    
      if ( parens.charAt(i) === '('){
          leftParensCount++; 
      }
      else {
          rightParensCount++; 
            }
   }
   
    if(leftParensCount === rightParensCount){
         return true;  
         }
         return false;
}

// Test Ran 
//Test.assertEquals(validParentheses( "()" ), true);
//Test.assertEquals(validParentheses( "())" ), false);
//Test.assertEquals(validParentheses( "(())((()())())") , true);
//Test.assertEquals(validParentheses( "(" ), false);
