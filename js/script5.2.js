let arr_obj = [
    {
        title: 'Apple',
        money: 1000000000,
        employeers: 120000,
        product_count: 46500,
        inInUSA: true
    },
    {
        title: 'Microsoft',
        money: 5670000,
        employeers: 80000,
        product_count: 23000,
        inInUSA: true
    },
    {
        title: 'Samsung',
        money: 7400000,
        employeers: 145000,
        product_count: 140000,
        inInUSA: false
    }
]
let filter_money = 7000000
// let arr_filtered = arr_obj.filter(item => item.money > filter_money && item.inInUSA == !true)
let arr_filtered = arr_obj.filter(item => (item.money / item.employeers) > 80)

console.log(arr_filtered);