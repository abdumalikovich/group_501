let obj = {
    a: {
        x: [1]
    },
    b: {
        x: [1, 2, 3, 4, 5]
    },
    c: {
        x: [1, 2, 3, 12, 3, 123, 12, 3, 123, 123, 123]
    },
}
let total = 0

// Цикл для объектов
for (let item in obj) {
    total += obj[item].x[0] + obj[item].x[1] + obj[item].x[2]
}

console.log(total);
