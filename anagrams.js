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
    word = word.toUpperCase(); //makes lowercase letters = uppercase so there's no repeat amongst letters, changing var to let fixed error
    
    if (anagram) {
      console.log(word, anagram, "if anagram");
      anagrams.push(anagram); // allows for letters and shorter words to appear
    }

    if (!word) {
        return;
    }

    for (let i = 0; i < word.length; i++) {
        // concat current letter to anagram
        anagram += word[i];
        //recurse over function
        getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams); //slice word and pass the rest of it to anagram
        anagram = anagram.slice(0, anagram.length - 1); //slices last leatter
        console.log(anagram, anagrams, "for loop");
    }

    let uniqueAna = [...new Set(anagrams)]; // This causes only new results to display, no repeat anagrams

    uniqueAna.push(anagrams);
    console.log(anagrams, "pushing");

    displayAnagrams(anagrams);
};

var displayAnagrams = function(anagrams) {
  for (var i = 0; i < anagramsEl.length; i++) {
  anagramsEl[i].innerHTML = `Anagrams: ${anagrams}`;
  }
  console.log("display", anagrams);
}

anagramFormEl.addEventListener("submit", searchButton);