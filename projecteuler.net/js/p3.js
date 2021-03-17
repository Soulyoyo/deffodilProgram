let pfactor=600851475143;
for (let i = 2; i <= pfactor/2; i++) {
    if (pfactor%i==0) {
        console.log(i);
    }
}