// Простые типы
let str = "Alex" // String Строка
let num = 45 // Number
let bool = true // true/false Boolean Да/нет
// Сложные типы
let arr = [] // Array Массив
let obj = {} // Object

// Отрицательные типы данных
let err1 = undefined // переменная не найдена
let err2 = NaN // операция не имеет логики
let err3 = null // ноль

let a = 'Barbara'
const b = 'Barbara' // нельзя переопределять

a = 'hello'

let abc = 1 // Number
let abcd = '1' // String
let abcdf = "1" // String
let o_1 = {}
let o_2 = []

// console.log(typeof o_1)
// console.log(typeof o_2)
// console.log(typeof abc)
// console.log(typeof abcd)
// console.log(typeof abcdf)

let num_1 = 15
let num_2 = 4

num_1 ** num_2 // 8 Возведение в степень
num_1 % num_2 // 3 Остаток от деления

let a_10 = 10

// console.log(a_10 = 12)
// console.log(12 == '12') // Нестрогое сравнение
// console.log(12 === '12') // Строгое сравнение
// console.log(12 > 12) // false
// console.log(12 < 12) // false
// console.log(12 >= 12) // true
// console.log(12 <= 12) // true
// console.log(12 != '12')
// console.log(12 !== '12')

// Кривые ковычки
let z = 'Hello'
let y = 'Alex'
let p = 'I am'
let g = 28

let variable = 'New variable'

console.log(`${variable}`)

console.log(z + ', ' + y + '! ' + p + g) // var 1
console.log(`${z}, ${y}! ${p} ${g}`) // var 2

let code = 'console.log("Hello world")'

eval(code)

let admin
let name

name = "Alex"
admin = name

console.log(admin)
