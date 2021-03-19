let arr=[]
for (let i = 2; i < 150000; i++) {
    for (let j = 2; j < 150000; j++) {
        if (i % j == 0) {
            if (i % j == j % i) {
                arr.push(i);
                // console.log(i);
            }
            break;
        }
    }
}
console.log(arr[10000]);
