// Работа с массивами
// 1. Добавить в конец массива цифру 10
// 2. Добавить в начало массива последний элемент, умноженный на 2
// 3. Добавить в середину массива объект с ключом a, который равен первому элементу массива
// 4. Удалить третий элемент массива
// 5. Добавить в объект ключ b, который равен всему массиву
// let arr = []

// arr.push(10)
// arr.unshift(arr[0] * 2)
// arr[1] = {
//     a: arr[0]
// }
// arr.push(arr[0] * 2)
// arr.splice(2, 1)
// arr[1].b = arr

// console.log(arr);


// 1. Добавить в arr пустой объект
// 2. Добавить в arr_2 массив arr
// 3. Добавить ключ a в объект массива arr, который равен массиву arr_2
// 4. Добавить true в конец массива arr
// 5. Добавить prompt('Ваше имя') в конец массива arr_2
// let arr = []
// let arr_2 = []

// arr[0] = {}
// arr_2[0] = []
// arr[0].a = arr_2
// arr.push(true)
// arr_2.push(prompt('Ваше имя'))
// 1. Добавить в массив каждую букву str отдельно
// 2. Удалить третий элемент массива
// 3. Добавить в конец arr последние три буквы str
// 4. Добавить в начало confirm
// 5. Удалить первый и последний элементы
// 6. Добавить в начало 'HE' и 'LO' (CAPS LOCK)
// 7. Добавить в конец массив arr первый элемент arr

let arr = []
let str = 'Hello'
let ask = confirm('Все ли отлично?')

arr.push(str[0])
arr.push(str[1])
arr.push(str[2])
arr.push(str[3])
arr.push(str[4])
arr.splice(2, 1)
arr.push(str.slice(2, 5))
arr.unshift(ask)
arr.shift()
arr.pop()
arr.unshift(str.slice(0, 2).toUpperCase())
arr.unshift(str.slice(3, 5).toUpperCase())
arr.push(arr[0])
