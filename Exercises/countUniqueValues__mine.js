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