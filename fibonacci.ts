function fibonacci(num: number) :number {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
    function sumary(n: number): number {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += fibonacci(i);
        }
        return sum;
    }

    console.log(sumary(5));
