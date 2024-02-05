Promise.retry = function (promiseFn, times = 3) {
    return new Promise(async (resolve, reject) => {
      while (times--) {
        try {
          var ret = await promiseFn();
          resolve(ret);
          break;
        } catch (error) {
          if (!times) reject(error);
        }
      }
    });
  };

const fn = () => {
    return new Promise((resolve, reject) => {
        const v = Math.random()
        console.log('random', v);
        v > 0.5 ? resolve(v) : reject('小于等于0.5' + v)
    })
}

Promise.retry(fn, 3, 1000).then(res => {
    console.log('res', res)
}, err => {
    console.log('err', err)
})