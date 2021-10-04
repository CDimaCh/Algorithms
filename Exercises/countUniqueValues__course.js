function countUniqueValues(arr) {
    //if here is neede to check if arr is empty
    var i = 0;

    for(let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}