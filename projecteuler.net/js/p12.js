let i;
arr=[]
function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}


for (i = 1, j = 2; i < 10000,j<1000; i = i + j, j++) {
    console.log(i);
    for (let k = 1; k <= j; k++) {
        if (i % k == 0) {
            arr.push(k);console.log(`${i} : ${getUnique(arr)}`);
           if(i==k){
    //            newarr=getUnique(arr);
               
           }
        }
    }

}

