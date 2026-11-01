Number([])
console.log([].valueOf())

Number({})
console.log()

Number('[object Object]')

const person = {
    name: 'san',
    _age: 18,
    get fullname(){
        return 'zhang'+ this.name
    },
    // fullname(){
    //     return 'zhang' + this.name
    // }
    set age123(n){
        if(n > 0){
            this._age = n
        } else {
            console.log('error')
            this._age = 18
        }
    },
    get age(){
        return this._age
    }
}
console.log(person.fullname)
// console.log(person.fullname())
person.age123 = 10
console.log(person._age)
