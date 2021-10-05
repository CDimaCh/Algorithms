//array sorted

function search (arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return - 1
}

// naive
//O(n)

function search (arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentEl = arr[middle];

        if(arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle] > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return - 1

}

// log(n) - binary search