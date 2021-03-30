//Check a number is prime or not
function primeOrNot(num) {
    if(num==0||num==1){
        console.log("Try different Number");
    };
    for (let i = 2; i < num+1; i++) {
        if (num % i === 0) {
            if(num%i==i%num){
                console.log("This is a prime number");
                break;
            }
            console.log("Not a prime Number");
            break;
        }
        
        // else {
        //     console.log("This is a prime number");
        //     break;
        // }
    }
}
primeOrNot(5);


//square root of 1 to 9
for (let i = 1; i < 10; i++) {
    console.log(`Square root of ${i}: ${i*i}`);
    
}