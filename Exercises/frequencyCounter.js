function sameFrequency (num1, num2) {
    let toDigit1 = num1.toString()
    let toDigit2 = num2.toString()

    if (toDigit1.length !== toDigit2.length) return false;
    
    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let i = 0; i < toDigit1.length; i++) {
        freqCounter1[toDigit1[i]] = (freqCounter1[toDigit1[i]] || 0) +1
    }

    for(let j = 0; j < toDigit2.length; j++) {
        freqCounter2[toDigit2[j]] = (freqCounter2[toDigit2[j]] || 0) +1
    }

    
    for (let k in freqCounter1) {
        if (freqCounter1[k] !== freqCounter2[k]) {
            return false;
        }
    }

    return true;
}

//sameFrequency(34, 14) -> false
//sameFrequency(128, 281) -> true

//-----------------------------areThereDuplicates

function areThereDuplicates() {
    let obj = {};

    for(let i in arguments) {
        obj[arguments[i]] = (obj[arguments[i]] || 0) + 1
    }
    console.log(obj)

    for (let k in obj) {
        if (obj[k] > 1) {
            return true
        }
    }

    return false
}

//--
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
//--
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}