let obj = {name: 'zhangsan', 
    // valueOf(){
    //     return 1
    // },
    // toString(){
    //     return {}
    // }
//     [Symbol.toPrimitive]: function(hint){
//     if(hint === 'number'){
//         return 99
//     } else if(hint === 'string'){
//         return 'hello'
//     } else if(hint === 'default'){
//         return '3'
//     }
// }
}
console.log(Number(obj))
console.log(String(obj))
console.log(Number(obj)+1)

