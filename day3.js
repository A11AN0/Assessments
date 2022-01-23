// make a function that can add * a certain number of times and return a perfectly triangular pyramid that is 'n' floors high

const towerBuilder = (nFloors) => {
   const floors = nFloors;
   var floorArr = [];
   
      for(let i=0; i<floors; i++){
         floorArr[i] = `${" ".repeat(floors-(i+1))}${"*".repeat(2*i +1)}${" ".repeat(floors-(i+1))}`;     
      }
   
   console.log(floorArr);
   
}
   
