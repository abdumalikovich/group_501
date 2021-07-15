let a = 100.000000001

console.log(Math.ceil(a)) // Вверх округление
console.log(Math.floor(a)) // Вниз округление
console.log(Math.round(Math.random())) // Логичное округление

console.log(Math.max(3, 15, 18, 0.5, -100, 258.5)) // Найти максимальное
console.log(Math.min(3, 15, 18, 0.5, -100, 258.5)) // Найти минимальное
console.log(Math.pow(2, 15)) // Возвести в степень
console.log(Math.random()) // Рандомное число (обычно используем в ID)

let random = Math.random()

console.log(random.toFixed(5)) // Обрезать число после плавающей запятой

let str = 'Hello World I Am Developer'
// 'hellO WORLD'

let str_new = str.slice(0, 11)
let str_one = str_new.slice(0, 5).toLowerCase()
let str_two = str_new.slice(6, 11).toUpperCase()

console.log(str_one.slice(0, 4) + str_one.slice(4, 5).toUpperCase() + ' ' + str_two)

// 'xyz' -> 'XyzD'

let str_2 = 'xyz'

console.log(str_2.slice(0, 1).toUpperCase() +
    str_2.slice(1, 3) + 'D')
