let a = 1; console.log(a);
let b = 2; console.log(b);
for (let i = 1; i < 10; i++) {
    c = a + b;
    a = b;
    b = c;

    if (c >= 10) {
        break;
    }
    console.log(c);
}