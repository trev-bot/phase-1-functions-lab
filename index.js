// Code your solution in this file!


function distanceFromHqInBlocks(someValue){
   if (someValue > 42){ 
      return(someValue - 42)
   } else {
      return 42 - someValue
   }
    

}


function distanceFromHqInFeet(someValue) {
   // if (someValue > 42){ 
   //    return (someValue - 42) * 264
   // } else {
   //    return (42 - someValue) * 264
   // }

   return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
   if (destination > start){
      return (destination - start) * 264
    } else {
      return (start - destination) * 264
    }
 
}

function  calculatesFarePrice(begin, end) {
   const feet = distanceTravelledInFeet(begin, end)
   if (feet <= 400){
   return 0
 } 
 else if(feet >400 && feet <= 2000){
     return (feet-400) * .02 
    
   } else if( feet > 2000 && feet <= 2500 ){
      return 25

    } else{
       return "cannot travel that far"
    }
}

// - `calculatesFarePrice`: Given the same starting and ending block as the
// previous test (_hint hint_), return the fare for the customer. The first four
// hundred feet are free. For a distance between 400 and 2000 feet, the price is
// 2 cents per foot (not including 400, which are free!). Then Scuber charges a
// flat fare for a distance over 2000 feet and under 2500 feet.
// Finally, Scuber does not allow any rides over 2500 feet — the function returns
// `'cannot travel that far'` if a ride over 2500 feet is requested. 