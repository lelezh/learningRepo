function timer (max) {
    let speed = 50,
    counter = 1,
    start = new Date().getTime();

    const from = {
        ideal: 0,
        real: 0,
        diff: 0,
    }
    function instance() {
        if(counter > max) {
            console.log('原生-----');
            console.timeEnd()
            console.log(from);
            console.log(counter);
            return
        }
        var ideal = counter * speed,
        real = new Date().getTime() - start;
        counter++
        from.ideal = ideal;
        from.real = real;

        const diff = real - ideal;
        from.diff = diff
        setTimeout(() => {instance()}, speed)
    }
    setTimeout(() => {instance()}, speed)
}
console.time()
timer(200)

