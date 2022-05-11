// function check_rotation(s, goal){
 
//     if (s.length != goal.length){
//         return false;
//     }
 
//     let q1 = []
//     for(let i=0;i<s.length;i++)
//         q1.push(s[i])
 
//     let q2 = []
//     for(let i=0;i<goal.length;i++)
//         q2.push(goal[i])
 
//     let k = goal.length
//     while (k--){
//         let ch = q2[0]
//         q2.shift()
//         q2.push(ch)
//         if (JSON.stringify(q2) == JSON.stringify(q1))
//             return true
//     }
 
//     return false
// }

// console.log(check_rotation("ABCDE", "CDEAB"))

