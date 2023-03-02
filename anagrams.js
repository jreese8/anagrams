// take a string and return anagrams

var anaFormEl = document.querySelector("#anagram-form");

var ananputEl = document.querySelector("anagram");

let anagrams = [];

let genAnagrams = (word, anagram = '') => {
    word = word.toUpperCase();
    if (!word) {
        anagrams.push(anagram);
        return;
    }

    for (let i = 0; i < word.length; i++) {
        // concat current letter to anagram
        anagram += word[i];
        genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams); //wont include zero
        anagram = anagram.slice(0, anagram.length -1);
    }

    return [... new set(anagrams)];
};

console.log(genAnagrams('AA'));