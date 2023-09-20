let arr = [
    {
        name: 'zll',
        msg: 'abc'
    },
    {
        name: 'siyi',
        msg: 's'
    }
]

let res = arr.map(it => JSON.stringify(it))
let res2 = '[' + res + ']'
console.log(res);
console.log(res2);
console.log('[' + res.map(it => it.toString()) + ']');