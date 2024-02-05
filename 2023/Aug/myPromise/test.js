const myPromise = require('./index')
// 测试代码
const promise = new myPromise((resolve, reject) => {
    resolve('success')
})
promise.then(value => {
    console.log(1)
    console.log('resolve', value)
})
promise.then(value => {
    console.log(2)
    console.log('resolve', value)
})
promise.then(value => {
    console.log(3)
    console.log('resolve', value)
})