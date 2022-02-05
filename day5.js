/* A function that when given an array of numbers, will determine whether that array contains duplicates, if it does -. then it will return true, otherwise false.

e.g. [1,3,6,5,7,1] will return true
        [1,4,6,8,3] will return false
*/

const containsDuplicate = (numberArr) => {
     let counter = false
     const newArr = numberArr.sort()
     for(let i=1; i<newArr.length; i++){
         if(newArr[i-1]===newArr[i]){
             counter = true
             break;
            }    
        }
     return counter;
};