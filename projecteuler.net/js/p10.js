sum=0;
n=2000000;
for (let i = 2; i < n; i++) {
    for (let j = 2; j < n; j++) {
        if (i % j == 0) {
            if (i % j === j %i){
                sum=sum+i;
                console.log(i);
            }
                break;
        }

    }

}
console.log(sum);