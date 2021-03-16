//QUE-> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//1st through simple while loop
    let i1=1;
    let sum1=0;
    while(i1<10){
        
        if(i1%3==0 || i1%5==0){
            sum1+=i1;
        }
        i1++;
    }
    console.log(sum1);

//for loop
    sum2=0;
    for (let i2 = 1; i2 < 10; i2++) {
        if(i2%3==0 || i2%5==0){
            sum2+=i2;//sum=sum+1;
        }
    }
    console.log(sum2);


//2nd through for and array
    let sum=0
    let arr = []
    for (let i = 1; i < 10; i++) {
        if(i%3==0 || i%5==0){
        arr.push(i);
        }
    }
    // arr.forEach(element => {
    //     sum+=element
    // });
    for (let index = 0; index < arr.length; index++) {
        sum+= arr[index];
        
    }
    console.log(sum);