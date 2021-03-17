sum=0;
let a=1;console.log(a);
let b=2;console.log(b)
for (let i = 0; i < 4000000; i++) {
    c=a+b;
    a=b;
    b=c;
    if (c%2==0) {
        if(c>=4000000){
            break;
        }
        sum=sum+c
    }
    // console.log(c);
}
sum+=2;
console.log(sum);