{
    // 我的flat测试
    const myFlat = (arr, layer = 1) => {
        let res = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (layer > 0) {
                   res =  res.concat(myFlat(arr[i], layer - 1))
                } else {
                    res.push(arr[i])
                }
            } else {
                res.push(arr[i])
            }
        }
        return res
    }
    const a = [1, 2, [3,  [4, 5], 6, 7], [8, 9]]
    let r = myFlat(a, 1)
    console.log(a.flat(1));
    console.log(r);
}