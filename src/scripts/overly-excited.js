// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let punctuation = ''
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, character) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = " "

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // Print buildMeUp to the console

         if (i % 3 == 2) {
             console.log(buildMeUp += theWordArray[i] + character + " ");
         }

         else {
            (console.log(buildMeUp += theWordArray[i] + " "))
         }
        
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");