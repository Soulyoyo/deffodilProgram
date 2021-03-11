//perimeter of rectangle
//1st method
function periOfRectangle1(length,width){
    p = 2*(length+width);
    return p;
}
//2nd method
function periOfRectangle2(length,width){
    p = (length+width+length+width);
    return p;
}

length = 30;
width = 2;

console.log(periOfRectangle1(length,width));
console.log(periOfRectangle2(length,width));