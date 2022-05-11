// function twoSum(nums, target) {
//      let index = {}
//     for(let i = 0; i < nums.length; i++){
//         let num = nums[i]
//         if(index[target - num] != null){
//             return [index[target - num], i]
//         }
//         index[num] = i
//     }


//    // return firstIndex, secondIndex
// };


// console.log(twoSum([2,7,11,15], 9))


// function newSum(nums,target){
//     let numsObj = {}

//     for(let i = 0; i < nums.length; i++){
//         numsObj[nums[i]] = i
//     }

//     let firstIndex = -1;
//     let secondIndex = -1;

//     for(let i = 0; i < nums.length; i++) {
//         let currEl = nums[i]
//         firstIndex = i
//         let secondNum = target - currEl


//         if(numsObj[secondNum] && numsObj[secondNum] !== i){
//             secondIndex = numsObj[secondNum]
//             break
//         }
//     }

//     return [firstIndex, secondIndex]

// }


// console.log(newSum([2,7,11,15], 9))


