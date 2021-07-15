// String, Number, Boolean, Array, Object, NaN, undefined, null

// Перевод str -> num и наоборот
let num = +'100'
let num = parseInt('100.5')
let num = parseFloat('100.5')
let num = new Number('100.5')
let str = String(100.55)
console.log(+str)

str = str.slice(0, 3) + str.slice(4, 6)

console.log(+str)
