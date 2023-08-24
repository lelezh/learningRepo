{
    console.log('原生flat');
    const arr = [1, 2, [3, 4], [[5, 6], 7], 8, 9]
    console.log(arr.flat(Infinity));
}

{
    console.log('递归实现一个数组flat');
    let arr = [1, 2, [[3, 4]], [[5, 6], 7], 8, 9]
    const myFlat = (arr, layer = 1) => {
        let res = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (layer > 1) {
                    res = res.concat(myFlat(arr[i], layer - 1))
                } else {
                    res = res.concat(arr[i])
                }
                
            } else {
                res.push(arr[i])
            }
        }
        return res
    }
    console.log(myFlat(arr, 2));
    console.log(arr);
}

{
    console.log('递归实现一个数组flat, 挂到原型上');
    let arr = [1, 2, [[3, 4]], [[5, 6], 7], 8, 9]
    Array.prototype.myFlat = function (layer = 1) {
        const myFlat = (arr, layer = 1) => {
            let res = []
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    if (layer > 1) {
                        res = res.concat(myFlat(arr[i], layer - 1))
                    } else {
                        res = res.concat(arr[i])
                    }
                    
                } else {
                    res.push(arr[i])
                }
            }
            return res
        }
        return myFlat(this, layer)
    }
    console.log(arr.myFlat(2));
    console.log(arr);
}

{
    console.log('使用reduce递归实现flat');
    const arr = [1, 2, [[3, 4]], [[5, 6], 7], 8, 9]
    //第1次flat： fn([[3, 4]], 1) 返回[3, 4]
    //第2次flat： fn([3, 4], 0) 返回3, 4
    Array.prototype.myFlat = function (layer = 1) {
        const fn = (arr, layer) => {
            return arr.reduce((pre, cur) => {
                if (Array.isArray(cur)) {
                    if (layer > 1) {
                        return pre.concat(fn(cur, layer - 1))
                    } else {
                        return pre.concat(cur)
                    }
                } else {
                    return pre.concat(cur)
                }
            }, [])
        }
        return fn(this, layer)
    }
    console.log(arr.myFlat(2));    
}

{
    console.log('无关项:使用forEach');
    const obj = {
        length: 3,
        0: 1,
        1: 2,
        2: 3
    }
    Array.from(obj).forEach((item, index) => {
        console.log(item, index);
    })
    console.log('------------------');
    Array.prototype.forEach.call(obj, (item, index) => {
        console.log(item, index);
    })
}