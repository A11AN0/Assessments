//Given an array 'nums = [1, 3,4,2,1], which number is the 'peak'/greatest number and will return it's index
const findPeakElement = (nums) => {
    return(nums.indexOf(Math.max.apply(0, nums)))    
};


//Given a string, this function will determine whether it made of repeated substrings, due to the theorem of non-trivial rotation
const repeatedSubstringPattern = (string) => {
    return (string + string).indexOf(string, 1) !== string.length
};