// Циклы for
// let arr = [1, 2, 3, 4, 5, 6]

// for(let item of arr) {
//     arr[arr.indexOf(item)] += 10
// }

// let arr = [10, 30, 40, 25]
// let total = 0

// for(let item of arr) {
//     arr.push(1)
// }

// console.log(total)

// let arr = ['   Alex   ', '  Barbara ', 'Michael']
// let str = ''

// for(let item of arr) {
//     str += item.trim()[0]
// }

// console.log(str)

let arr_obj = [
    {
        name: 'Milk',
        money: 10000,
        sale: 3
    },
    {
        name: 'Yogurt',
        money: 14500,
        sale: 7
    },
    {
        name: 'Kefir',
        money: 13300,
        sale: 45
    }
]

for(let item of arr_obj) {
    // Создаем ключ
    item.price = item.money - (item.money / 100 * item.sale)
}

// while
// switch case
