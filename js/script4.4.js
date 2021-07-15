// Wepro Guest 31012020
let arr = [14,{a: [{a: true,b: false,c: [{a: 'ME'}]}]},28,{a: {a: [1, 12, 31, 23, 12, 'IT', 3123]}}, 1, 2, 3,{a: {a: {['IS']}}}]
let arr_2 = [{},1,{b: [['HELLO'],{a: 'WORLD'}]},3]

console.log(arr_2[2].b[0] + ' ' + arr_2[2].b[1].a + ' ' + arr[3].a.a[5])
