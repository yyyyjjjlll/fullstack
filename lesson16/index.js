// let obj = {}
// Object.defineProperty(obj, 'name', {
//     // value: 'zhangsan',
//     get: function(){
//         return 'lisi'
//     },
//     configurable: false
// })
// Object.defineProperties

let map = new Map()
function example(){

}
map.set(example, 'hello')
map.set(1, 'a')
map.set('1', 'b')

console.log(map.size)

console.log(map)
let obj = {
}

Object.defineProperty(obj, '1', {
    value: 'hello'
})
console.log(obj['1'])

Object.hasOwn(obj, '1')
// delete obj['1']
console.log(obj.k)