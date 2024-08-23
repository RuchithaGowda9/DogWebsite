var words = ['hello', 'mam', 'I', 'would', 'like', 'to', 'learn', 'malayalam'];
function checkPalindrome(wordsArray) {
    var palindromes = []; 

    wordsArray.forEach(word => {
        if (word === word.split('').reverse().join('')) {
            palindromes.push(word);
        }
    });
    console.log(palindromes);
}
console.log(checkPalindrome(words));
