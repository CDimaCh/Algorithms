function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++){
        let smallest = i;

        for (let j = i +1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j
            }
        }
        if (i !== smallest) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;   
        }
         
    }
    return arr;
}