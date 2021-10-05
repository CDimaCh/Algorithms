function maxSubarraySum (arr, num) {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num ) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++ ) {
        console.log('tempSum', tempSum,'arr[i - num]', arr[i - num], 'num', num, 'i', i )
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

//maxSubarraySum([1,2,4,6,4,3,6,8], 3) === max sum of num elements
//O(n)

function maxSubarraySum (arr, num) {
    if(num > arr.length) return null;

    let max = -Infinity;

    for(let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i+j]
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

//o(n^2)