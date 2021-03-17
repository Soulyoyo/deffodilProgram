for (let i = 100; i < 999; i++) {
    for (let j = 100; j < 999; j++) {
        // console.log(`${i}*${j}=${i*j}`);
        num=String(i*j);
        reversenum=(num.split("").reverse().join(""));
        if(num===reversenum){
            console.log(`${i}x${j}=${num} and its reverse num is ${reversenum}`);
        }
    }
    
}
