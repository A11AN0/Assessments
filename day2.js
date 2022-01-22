//Given an array nums and a target number e.g. ([3, 5, 7,1], 12), this 2 sum function will determine the index of two numbers which add up to the the target number; e.g. in this case; would return [1, 2]

const twoSum = (nums, target) => {
    let finalArr = []

    for(let i=0; i<nums.length; i++){
        
        const numberArr = [nums.indexOf(nums[i])]
        
        for(let v=i+1; v<nums.length; v++){
            if(nums[i] + nums[v] === target && numberArr.length === 1){
                numberArr.push(nums.lastIndexOf(nums[v]))
            }
        }
        
        if (numberArr.length ===2){
            finalArr = numberArr
            break;
            }
        
    }
    return finalArr;    
};