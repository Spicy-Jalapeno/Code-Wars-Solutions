//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
//In this Kata, we will restrict ourselves to decimal (base 10).

//For example, take 153 (3 digits):

//    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//and 1634 (4 digits):

//    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
//The Challenge:

//Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

//Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
// Date completed 06/30/2020

function narcissistic(value) {

var sum= 0; 
var i = 0; 
  if (value < 10 ){
      return true; 
  }
  else {
      var arr = value.toString().split('').map(Number);
      for ( i; i<arr.length;i++){
        sum += Math.pow(arr[i], arr.length); 
        console.log(sum); 
      }
      
      if(sum === value){
          return true; 
      }else { return false; }
  } 
}

//Test Ran
//describe( "Narcissistic Function", function() {
 // it( "should find small numbers are all narcissistic", function() {
 //   Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
 // });
  
 // it( "should find these numbers are narcissistic", function() {
 //   Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
//  });
//});
