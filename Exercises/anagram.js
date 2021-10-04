/*
<p>Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as <i>cinema</i>, formed from <i>iceman</i>.</p>

*/

function validAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    let obj = {};

    for(let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        //if letter exist, increment, otherwise set to 1
        obj[char1] ? obj[char1] += 1 : obj[char1] = 1;
    }

    for(let j = 0; j < str2.length; j++) {
        let char2 = str2[j];
        // if can't find char or it's zero, this is not anagram
        if(!obj[char2]) {
            return false
        } else {
            obj[char2] -= 1
        }
    }

    return true;
}

// O(n)