// Валидация и работа с пользователем ALERT/IF
// alert(a) // Бесполезнo
// let a = confirm('Старше ли Вы 18?') // Да/Нет
// let b = prompt('Ваше имя?') // Полноценный ответ

// Локальные и глобальные переменные
let age = 15

if(age > 18) {
    let b = 10

    console.log(b)
    console.log('Добро пожаловать в клуб');
} else if(age > 16) { // промежуточная проверка
    console.log('Закрой глазки');
} else if(age > 14) {
    console.log('Иди домой');
} else {
    console.log('Иди домой тем более');
}




// let abc = 150
// let xyz = 250

// if(typeof(true) == 'boolean' || abc >= 150 && xyz <= 200 && abc + xyz > 300 ) {
//     console.log('All is okey')
// } else {
//     console.log('Bad')
// }
// let age_1 = prompt('ur age')
// let last_sybmol = age_1.slice(age_1.length - 1, age_1.length)

// if(last_sybmol == 0 || last_sybmol == 2 || last_sybmol == 4 || last_sybmol == 6 || last_sybmol == 8) {
//     console.log('Да. Четное')
// } else console.log('Нечетное')


// let a = prompt('A')
// let b = prompt('B')
// let method = prompt('+-/*')

// if(method === '+') alert(a + b)
// else if(method === '-') alert(a - b)
// else if(method === '*') alert(a * b)
// else if(method === '/') alert(a / b)
// else alert('ввел фигню')


let math = prompt('a')

alert(eval(math))
