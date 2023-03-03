// take a string and return anagrams

var anagramFormEl = document.querySelector("#anagram-form");

var anagramInputEl = document.querySelector("#anagram");

var anagramSearch = document.querySelector("#anagram-search");

let anagrams = [];

// Input word for anagram

var searchButton = function(event) {
    event.preventDefault();
  
    // get value from input element
    var anagramName = anagramInputEl.value.trim();
  
    if (anagramName) {
      getAnagrams();
  
      anagramInputEl.value = "";

    } else {
      alert("Please enter a valid word.");
    }
};

let getAnagrams = (word, anagramName) => {
    word = word.toUpperCase(); //makes lowercase letters = uppercase so there's no repeat amongst letters, giving an undefined error
    if (!word) {
        anagrams.push(anagramName);
        return;
    }

    for (let i = 0; i < word.length; i++) {
        // concat current letter to anagram
        anagramName += word[i];
        getAnagrams(word.slice(0, i) + word.slice(i + 1), anagramName, anagrams); //wont include zero
        anagramName = anagramName.slice(0, anagramName.length -1);
    }

    anagramName.push(anagramResult);
    var anagramResult = [anagrams]
};


anagramFormEl.addEventListener("submit", searchButton);