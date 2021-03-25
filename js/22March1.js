//celcius to fahrenheit
function ctof(celcius){
    f=(celcius*(9/5))+32;
    return f;
}
console.log(ctof(1));

//celcius to kelvin
function ctok(celcius){
    k=celcius+273.15;
    return k;
}
console.log(ctok(1));

//kelvin to fahrenheit
function ktof(kelvin){
    f=((kelvin-273.15)*9/5)+32;
    return f;
}
console.log(ktof(1));

//kelvin to celcius
function ktoc(kelvin){
    c=kelvin-273.15;
    return c;
}
console.log(ktoc(1))

//fahrenheit to celcius
function ftoc(fahrenheit){
    c=(fahrenheit-32)*5/9
    return c;
}
console.log(ftoc(1));

//fahrenheit to kelvin
function ftok(fahrenheit){
    k=((fahrenheit-32)*5/9)+273.15;
    return k;
}
console.log(ftok(1));