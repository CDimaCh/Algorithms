function mergeArr(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++   
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }

    while(arr1.length > i) {
        arr.push(arr1[i])
        i++;
    }

    while(arr2.length > j) {
        arr.push(arr2[j])
        j++
    }

    return arr;
} 

function mergeSort (arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid))


    return mergeArr(arr1, arr2);
}