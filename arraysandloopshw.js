/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b) {
    "use strict";
    return (a > b)
}

console.log(max(5, 6))
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------

function maxOfThree() {
    "use strict";
    return max(max(a, b), c);
}

Console.log(maxOfThree(3, 6, 9))
    // ---------------------
    // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------

function isVowel(char) {
    "use strict";
    return "aeiou".indexOf(
        char.toLowerCase()) > -1;
}

console.log(isVowel("E"))

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    "use strict";

    var consonants = "bcdfghjklmnpqrstvwxyz";
    var result = "";

    for (var i = 0; i < phrase.length; i++) {
        // 1)Check character, see if consonant
        var num = consonants.indexOf(
                phrase[i].toLowerCase())
            // 2) if a consonant, repeat it, add 'o', and repeat again
        if (num > -1) {
            result += phrase[i] + "o" + phrase[i];
        }
        // 3) otherwise leave it alone
        else {
            result += phrase[i];
        }
    }

    return result;
}

console.log(rovarspraket("Texas."));
//---> should be "ToTexoxasos"

console.log(rovarspraket("The eyes of Texas are upon you.")); //--------> Should be "ToThohe eyoyesos ofof ToTexoxasos arore upoponon yoyou."

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers) {
    "use strict";
    var result = 0;
    numbers.forEach(function() {
        result += arguments[0];
    })
    return result;
}

console.log(sum([1, 2, 3, 4]));
//-------> Should be 10

function multiply() {
    "use strict";
    var result = 0;
    numbers.forEach(function() {
        result += arguments[0];
    })
    return result;
}

console.log(multiply([1, 2, 3, 4]));
//-----------> Should be 24
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse() {
    "use strict";
    var result = ""
    for (var i = phrase.length; i > 0; i--) {
        result += phrase[i - 1];
    }
    return result;
}

console.log(reverse("The eyes of Texas are upon you."))

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    // 1) find # of words
    // 2)Look at first word, get length
    // 3)look at 2nd word, get length
    var result = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > result) {
            result = words[i].length
        }
    }
    return result;
}

console.log( findLongestWord( ["The", "eyes", "of", "Texas", "are", "upon", "you.", "supercalifragilisticexpialidocious"]) )

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    var result = [];
    words.forEach(function(aWord){
        if(aWord.length > i){
            result[result.length] = aWord;
        }
    })
    return result;
}

console.log( filterLongWords(["The", "eyes", "of", "Texas", "are", "upon", "you.", "supercalifragilisticexpialidocious"], 4) )

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    var result = {},
        char;

    for(var i = 0; i < string.length; i++){
        char = string[i];

        if(result[ char ]){
            result[ char ]++;
        } else{
            result[ char ] = 1;
        }

        console.log(i, "---", "found character:", char, " ----- ", result);
    }

    return result;
}

console.log( charFreq("The eyes of Texas are upon you.") );

