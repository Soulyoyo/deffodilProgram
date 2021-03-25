//calculate the square of number
function sqNum(num){
    return num**2;
}
console.log(sqNum(10));

//calculate second in given minutes
function min2sec(min){
    return min*60;
}
console.log(min2sec(5));

//multiply 2 floating number
function multiplyFloat(num1,num2){
    mul= num1*num2;
    return parseFloat(mul);
}
console.log(multiplyFloat(2,6.1));

//perimeter of circle
function pOfCircle(radius){
    p=2*3.142*radius;
    return p;
}
console.log(pOfCircle(2));
//perimeter of rectangle
function pOfRectangle(l,w){
    p=2*(l+w);
    return p;
}
console.log(pOfRectangle(20,10));
//perimeter of square
function pOfSquare(side){
    p=4*side;
    return p;
}
console.log(pOfSquare(4));
//perimeter of rhombus
function pOfRhombus(side){
    p=4*side;
    return p;
}
console.log(pOfRhombus(4));

//area of circle
function aOfCircle(radius){
    a=3.142*(radius**2)
    return a;
}
console.log(aOfCircle(2));
//area of trapezium
function aOfTrap(a,b,h){
    ar=((a+b)/2)*h
    return ar;
}
console.log(aOfTrap(10,20,30));
//area of rhombus
function aOfRhombus(a,b){
    ar=a*b/2
    return ar;
}
console.log(aOfRhombus(12,2));
//area of rectangle
function aOfRectangle(l,w){
    a=l*w
    return a;
}
console.log(aOfRectangle(12,2));
//area of Square
function aOfSquare(side){
    a=side**2;
    return a;
}
console.log(4);