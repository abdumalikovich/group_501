let arr = [1, 10, 2, 3, 15, 4, 2000, 5, 6, 7]
let arr_filtered = arr.filter(item => item > 5 || item < 500)

let arr_str = ['Alex', 'John', 'Adam', 'Michael', 'Alisher']
let arr_str_filtered = arr_str.filter(item => item[0] === 'A' && item.length > 5 && typeof(item) == 'string')

let arr_bool = [true, false, true, false]
let arr_bool_filtered = arr_bool.filter(item => item == true)
