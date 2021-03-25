//1.Generate Multiplication Table of a Given Number
/*function table(num){
    for (let i = 0; i <=10; i++) {
        console.log(`${num}x${i}=`,num*i);
        
    }
}
table(4);*/

//2. Find Sum Of First n Natural Numbers in O(1)
/*num=7;
    sum=0;
    for (let i = 1; i <=num ; i++) {
        sum=sum+i;
    }

console.log(sum);*/

//3. Find Largest Element in an Array
/*arr=[1,2,3,4,12,3,21,324,433,42,3]
arr.sort().reverse();
console.log(arr[0]);*/

//4.to Find Prime Number
/*function primeOrNot(num){
    for (let i = 2; i < num; i++){
        if(num%i==0){
            console.log("It is not prime number");
            break;
        }
        else{
            console.log("it is a prime number");
            break;
        }
      
    }
}
primeOrNot(4);*/

//5. Convert Decimal Number to Binary Number
/*function decimalToBinary(num){
    arr=[];
    for (let i = 0; i <=num*2; i++) {
        rem=num%2;
        num=parseInt(num/2);
        // console.log(num)
        arr.push(rem);
        
    }
    newArr=arr.reverse()
    newArr.unshift(1)
    console.log(newArr);
}
console.log(decimalToBinary(100));*/

//6.Reverse a Number
/*function reverseNum(num){
    str=String(num);
    console.log(str.split("").reverse().join(""))
}
reverseNum(1234);*/

//7. Factorial of a Number by recursion
/*function factorialNum(num){
    if(num==0||num==1){
        return 1;
    }
    else{
        return factorialNum(num-1)*num;
    }
}
console.log(factorialNum(5))*/
//7. Factorial of a Number by iteration
/*function factorialNum(num){
    total=1;
    for (let i = num; i >1; i--) {
       total=total*i
        
    }
    return total;
}
console.log(factorialNum(5));*/

//8.Print Star Pattern - 1
/*function starPattern(num){
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i+1; j++) {
            console.log("*")
            
        }
        console.log("\n");
    }
}
starPattern(5)*/

//9. Reverse a String
/*function reverseString(str){
    str= String(str);
    console.log(str.split("").reverse().join(""));
}
reverseString("hello");*/
/*function reverseString(str) {
    str = String(str)
    arr = str.split("");
    len = arr.length;
    let temp = 0;

    for (let i = 0; i < parseInt((len - 1) / 2); i++) {
        temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - i - 1] = temp;

    }
    return arr.join("");
}
console.log(reverseString('hellow'));*/

//10.Print Prime Numbers In A Given Range
/*function primeCount(strNum, finalNum) {
    for (let i = strNum; i <= finalNum; i++) {
        for (let j = strNum-1; j <= finalNum; j++) {
            if (i % j == 0) {
                if (i % j == j % i) {
                    
                    console.log(i);
                }
                break;
            }


        }
    }
}
primeCount(3, 29);*/

//11Print Star Pattern - 2
/*function printStar2(num){
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if(i+j>=num-1){
                console.log("*");
            }
            else{
                console.log(" ");
            }
            console.log("\n")
        }
        
    }
}
printStar2(5);*/

//12.Print Star Pattern - 3
/*n=5;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2*n; j++) {
        if(n-i-1&&n+i-1){
            console.log("*");
        }
        else{
            console.log(" ")
        }
        
    }
    console.log("\n");
}*/

//13.
/*n=5;
for (let i = 0; i < n; i++) {
    for(let j=0;j<n;j++){
        if(j>=i){
            document.write("*");
        }
        else{
            document.write(" ");
        }
    }
    document.write("<br>");
}*/

//14.
/*n=5;
for (let i = 0; i < n; i++) {
    for(let j=0;j<n;j++){
        if(j>=i){
            document.write(i);
        }
        else{
            document.write(" ");
        }
    }
    document.write("<br>");
}*/

//15. Print Star Pattern - 5
n=6;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
         if(i==0||j==0||i==n-1||j==n-1){
             document.write("*");
         }
         else{
             document.write("&nbsp;&nbsp;");
         }
    }
    document.write("<br>");
}
//16.Count Number of Digits in an Integer
/*function countNum(num){
    num=String(num).split("")
    console.log("The count of num is ",num.length);
}
countNum(16753);*/

//17.Calculate Power of a Number
/*function calculatePower(num,pow){
    num=num**pow;
    return num;
}
console.log(calculatePower(2,4));*/
