//A function, that; when given an array as a parameter; will return an array with every other index value doubled (starting from array[1]). e.g. if input is [1, 4, 6, 2, 3]; function will return [1, 8, 6, 4, 3]
const doubleEveryOther =(a)=> {
    const arr = []

    for (let i=0; i<a.length; i++){
      i%2 === 0? arr.push(a[i]): arr.push(a[i] * 2)
    }

    return arr
}