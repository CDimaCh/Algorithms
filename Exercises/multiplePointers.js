function averagePair (arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let average = arr[left] + arr[right]/2;
        if ( average === num){
            return true
        } else if(average < num) {
            left++;
        } else {
            right--
        }
    }
    return false
}

//averagePair([-1,0,3,4,5], 4.1) -> false

function isSubsequence (str1, str2){
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if(str2[j] === str1[i]){
            i++
        } else if(i === str1.length) {
            return true;
        }
        else {
            j++;
        }
    }
    return false
}

//isSubsequence('hello', 'hello world') -> true
//isSubsequence('dcb', 'bcd') -> false


function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }