// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
// function retry(fn, times = 3, interval = 1000) {
//     return new Promise((resolve, reject) => {
//         const tryTimes = 0;
//         const tryFn = () => {
//             fn()
//                 .then(resolve)
//                 .catch((err) => {
//                     tryTimes++;
//                     if (tryTimes < times) {
//                         setTimeout(tryFn, interval);
//                     } else {
//                         reject(err);
//                     }
//                 });
//         };
//         tryFn();
//     });
// }

// fn 是一个promise
const fn = () => {
    return new Promise((resolve, reject) => {
        const v = Math.random()
        console.log('random', v);
        v > 0.5 ? resolve(v) : reject('小于等于0.5' + v)
    })
}

const promiseRetry = (fn, times = 3, retryTimes = 0, interval = 1000, resolve, reject) => {
    if (!resolve) {
        return new Promise((resolve, reject) => {
            fn().then(resolve).catch((e) => {
                if (retryTimes < times) {
                    retryTimes++;
                    setTimeout(() => {
                        promiseRetry(fn, times, retryTimes, interval, resolve, reject)
                    }, 1000)
                } else {
                    reject(e)
                }
            })
        })
    }else {
        fn().then(resolve).catch((e) => {
            if (retryTimes < times) {
                retryTimes++;
                setTimeout(() => {
                    promiseRetry(fn, times, retryTimes, interval, resolve, reject)
                }, 1000)
            } else {
                reject(e)
            }
        }) 
    }
    
}


// const promiseRetry = async (fn, times = 3, retryTimes, interval = 1000) => {
//     try {
//         const r = await fn()
//         resolve(r)
//     }catch(e){
//         if (retryTimes < times) {
//             times++
//             return await promiseRetry(fn, times, retryTimes, interval)
//         }
//     }
// }
promiseRetry(fn, 5, 0, 1000).then(r => {
    console.log('res', r);
}).catch(e => {
    console.log('err', e);
})