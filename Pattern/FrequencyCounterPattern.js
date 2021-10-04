function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for ( let val = 0; val < arr1.length; val++ ) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }

    for ( let val = 0; val < arr2.length; val++ ) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for (let key = 0; key < freqCounter1; key++) {
        if(!(key**2 in freqCounter2)) {
            return false;

        }

        if (freqCounter2[key**2] !== freqCounter1[key]) {
            return false
        }
    }
    return true
}