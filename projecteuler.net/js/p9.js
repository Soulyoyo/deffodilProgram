for (let a = 1; a <= 1000; a++) {
    for (let b = 1 + a; b <= 1000; b++) {
        for (let c = 1 + b; c < 1000; c++) {
            if (a * a + b * b == c * c) {
                if (a + b + c == 1000 && a < b < c) {
                    console.log(a * b * c);

                }
            }

        }
    }

}


