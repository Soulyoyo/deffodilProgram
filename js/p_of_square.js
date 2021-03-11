//perimeter of square
//1st method
function periOfSq1(side){
    p = 4*side;
    return p;
}

//2nd method
function periOfSq2(side){
    p = side+side+side+side;
    return p;
}
side=12;

console.log(periOfSq1(side));
console.log(periOfSq2(side));