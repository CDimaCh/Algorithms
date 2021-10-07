function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length -1;
    
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if (val === arr[mid]){
            return mid;
        } else if (val < arr[mid]){
            right--
        } else {
            left++
        }
    }
    return -1;
  }