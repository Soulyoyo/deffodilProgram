//Find the sum of all the multiples of 3 or 5 below 1000.
let sum=0;
for (let i = 1; i < 1000; i++) {
    if (i%3==0 || i%5==0){
        sum=sum+i;
    }  
}

console.log(sum);