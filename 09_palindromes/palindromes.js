const palindromes = function (string) {
    let lettersOnly = "";
    for (let i=0; i<string.length; i++) {
        if (isLetter(string.charAt(i))) {
            lettersOnly += string.charAt(i);
        };
    }
    lettersOnly = lettersOnly.toLowerCase();
    return (testReverseSame(lettersOnly));
       
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function testReverseSame(string) {
    let dummyString = "";
    for (let i=string.length-1; i>=0; i--) {
        dummyString += string.charAt(i);
    }
    return (dummyString === string);
}

// Do not edit below this line
module.exports = palindromes;
