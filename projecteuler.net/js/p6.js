sum1 = 0;
for (let i = 0; i <= 100; i++) {
    sum1 = (sum1 + i ** 2);
}
sum2 = 0;
for (let j = 0; j <= 100; j++) {
    sum2 = sum2+j;
}
console.log(sum1);
console.log(sum2**2);
console.log((sum2**2)-sum1);