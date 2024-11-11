// const arr = [1, 2, 3, 4]

// console.log(arr.map((item) => item + 1))


// Array.prototype.myMap = function(callback) {
//     // const result = []
//     // for(let i = 0; i < this.length; i++){
//     //     result.push(callback(this[i], i))
//     // }

//     // return result

//     return this.reduce((acc, curr, idx) => {
//         acc.push(callback(curr, idx))
//         return acc;
//     }, [])
// }


// console.log(arr.myMap((item) => item + 1))

// Array.prototype.myFilter = function(callback) {
//     return this.reduce((acc, curr, idx) => {
//         if(callback(curr, idx)) acc.push(curr)
//         return acc;
//     }, [])
// }

// console.log([1,2,3,4].myFilter(item => item > 1))



//primitive dataType
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt


// reference
// Object

// {...obj}
// JSON.parase(JSON.stringify())
// deepClone

// const obj = {
//     a: 2
// }

// const obj1 = obj

// obj1.a = 3

// console.log(obj)

// console.log(variabile)

// var variabile = 'string';


// variabile = 'changed';

// if (true) {
//     var variabile = 'string';


//     variabile = 'changed';
// }

// let variable = 'string'

// variable = 'new'


// const constanta = 'const'

// constanta = 'new'

// + 
// console.log(+'4')

//==
//===

// console.log('' == false)
// console.log('' === false)

// +=

// let num = 3
// num+= 6
// num = num + 6

// console.log(!false)
// console.log('' !== false)

// const value =  value1 || value2
// if(condition1 || conditon2)
//if(condition1 && conditon2)

// const ternary = true ? 'option1' : 'option2'

// const title = 'Alex'

// console.log('Hello ' + 'world')
// console.log(`Hello ${title}`)

// const x = 'x'

// function func() {
//     const y = 'y'
//     if(true) {
//         const z = 'z'
//         var t = 't'

//     }

//     console.log(t)
//     console.log(z)
// }

// func()

// const key = 'a'

// const obj = {
//     a: 'value',
//     b: 'valueb',
//     c: 'valuec',
//     e: 'e'
// }

// const obj1 = {
//     a: 'value1',
//     b: 'valueb1',
//     c: 'valuec1'
// }



// console.log(obj.a)
// console.log(obj['a'])
// console.log(obj[key])

// const {c} = obj
// const {a} = obj
// console.log(a, c)

// console.log({...obj, ...obj1, f: 'f'})

// const arr = [1, 2, 3]

// console.log(arr[0])

// arr['test'] = 4

// console.log(arr)

// arr.length = 2

// console.log(arr)

// console.log([...arr, ...arr, 6])

// const [first, ,third] = arr
// const [first1, ,third1] = arr

// console.log(first, third)
// console.log(first1, third1)


// if(() => true) {
//     console.log('pass')
// } else if (true){
//     console.log('not pass')
// }

// const condition = 'str21'

// switch (condition) {
//     case 'str1':
//         console.log('case1');
//         break;
//     case 'str2':
//         console.log('case2');
//         break;
//     case 'str3':
//         console.log('case3');
//         break;
//     default:
//         console.log('default case')    
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }


// try {

// } catch (e) {
//     console.log(e)
// }

// const x = 'x'

// try {

//     x = 'y'

// } catch (e) {
//     console.log(e)
// }

// console.log(x, 'pass')

// func()


// function func() {
//     console.log(arguments)
    
// }

// const func1 = function() {
//     console.log(arguments)

// }

// const arrowFunc = () => {
//     return
// }

// const arrowFunc1 = arg => arg

// const obj = {
//     name: 'Victor'
// }

// const obj1 = {
//     name: 'Vasile'
// }

// function func(arg) {
//     console.log(this.name + arg)
// }

// const bound = func.bind(obj)

// func.apply(obj, ['!'])
// func.call(obj1, '?')
// bound('!!')


// const note = {
//     nota1: 7,
//     nota2: 9,
//     nota3: 6,
// }

//EX: 7.3

// const mediaNote = (obj) => {
//     const result = Object.values(obj).reduce((acc, curr) => acc + curr)/Object.values(obj).length

//     return result.toFixed(1)
// }

// console.log(mediaNote(note))

// 1. De create la fel mySome si myEvery cu ajutorul la for loop sau reduce

