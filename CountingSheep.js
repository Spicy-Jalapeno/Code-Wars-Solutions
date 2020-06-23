
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//For example,

//[true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
// true,  true,  true,  true ,
//  false, false, true,  true]
//The correct answer would be 17.

//Hint: Don't forget to check for bad values like null/undefined

// Date completed June 22, 2020

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  
  var present = 0; 
  
  for (var i = 0; i< arrayOfSheep.length; i++)
  {
    if (arrayOfSheep[i] === true )
    {
      present++; 
      }else if (arrayOfSheep[i] === false || arrayOfSheep === null || arrayOfSheep === undefined){
     present = present; 
      }
      }

      return present; 
}

// Test Cases
//var array1 = [true,  true,  true,  false,
//              true,  true,  true,  true ,
//              true,  false, true,  false,
//              true,  false, false, true ,
//              true,  true,  true,  true ,
//              false, false, true,  true ];
              
//Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
