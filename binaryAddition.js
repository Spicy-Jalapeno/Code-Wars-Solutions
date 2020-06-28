//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.
// Date completed: 06/27/2020

function addBinary(a,b) {
 
 var sum = a + b, 
 binary = '';
 
 while ( sum > 0 ) //making sure negative numbers are accounted for.  
 { 
 binary = ( sum % 2 ) + binary; 
 sum = Math.floor( sum / 2 ); 
 } 
 return binary; 
 
}

// Test Ran
//Test.describe("addBinary(1,2)", function() {
//  var results1 = addBinary(1,2);
//  Test.it("Should return something that isn't falsy", function() {
//    Test.expect(results1, "Something is wrong, no results!");
//  });
//  Test.it("Should return \"11\"", function() {
//    Test.assertEquals(results1, "11");
//  });
//});
