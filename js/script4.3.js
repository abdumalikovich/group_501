// Работа с объектами
let str = 'Malibu 2'
let arr = [1, 2, 15, 3]
let obj = {
    color: 'black',
    hp: 250,
    name: 'Malibu 2',
    isNew: true,
    a: undefined,
    updates: ['lyuk', 'wheels', 'a', 'b'],
    engine: {
        weight: 560,
        color: 'grey'
    }
}

// Чтение, добавление, изменение, удаление
// obj.engine.color // Чтение
// obj.engine.color = 'red' // Изменение
// obj.engine.weight = obj.engine.weight + 100
// obj.engine.width = 150 // Добавление
// delete obj.engine // Удаление

console.log(obj)


// Методы для объектов
console.log(Object.keys(obj)) // Берет ключи в массив
console.log(Object.values(obj)) // Берет значения в массив
console.log(Object.entries(obj)) // Берет все в массив

// += -= ++ --
// let a = 20
// let b = 10

// a = a + 10
// a += b // Вычисление с сохранением старого значения
// a -= b
// a /= b
// a *= b
// a++ // Плюс 1 к старому значению
// a--
// a--
// a--

// console.log(a)

let total = 0
