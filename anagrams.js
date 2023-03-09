// take a string and return anagrams

var anagramsEl = document.querySelectorAll(".anagrams");

let anagramFormEl = document.querySelector("#anagram-form");

let wordInputEl = document.querySelector("#word");

// Input word for anagram
let searchButton = function(event) {
    event.preventDefault();
  
    // get value from input element
    let word = wordInputEl.value.trim();
    console.log(word, "typed word");
  
    if (word) {
      getAnagrams(word);
      console.log(word, "run the function");

    } else {
      alert("Please enter a valid word.");
    }
};

let getAnagrams = (word, anagram = '', anagrams = []) => { //permutations
    console.log(word, anagram, "getting the anagrams");
    word = word.toUpperCase(); //makes lowercase letters = uppercase so there's no repeat amongst letters, giving an undefined error
    if (anagram) {
      console.log(word, anagram, "if anagram");
        anagrams.push(anagram);
        return;
    }

    for (let i = 0; i < word.length; i++) {
        // concat current letter to anagram
        anagram += word[i];
        getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams); //wont include zero
        anagram = anagram.slice(0, anagram.length - 1);
        console.log(anagram, anagrams, "for loop");
    }

    var anagramResult = {
      "anagrams": anagrams
    }

    anagrams.push(anagramResult);
    console.log(anagrams, "pushing");

    displayAnagrams(anagrams);

};

var displayAnagrams = function(anagrams) {
  for (var i = 0; i < anagramsEl.length; i++) {
  anagramsEl[i].innerHTML= `anagrams: ${anagrams[i]}`;
  }
  console.log("display", anagrams);
}

anagramFormEl.addEventListener("submit", searchButton);