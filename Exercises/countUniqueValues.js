
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    
    let left = 0;
    let right = 1;
    let count = 0;

    while(right != arr.length ){
        if(arr[left] !== arr[right]) {
            left++;
            left = right
            count++
        }
        right++;
    } 
    return count +1;
}

//--------------------------- a bit prettier

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