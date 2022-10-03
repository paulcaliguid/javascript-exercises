const caesar = function(string, shift) {
    let returnString = "";
    shift = shift % 26; 

    for (let i=0; i<string.length;i++) {
        let char = string.charAt(i);
        let charCodePlusShift = char.charCodeAt() + shift;

        if (!isLetter(char)) {
            returnString += char;
            continue;
        }

        if (isUpperCase(char) && (charCodePlusShift > 'Z'.charCodeAt())) {
            charCodePlusShift -= 26;
        }

        if (isUpperCase(char) && (charCodePlusShift < 'A'.charCodeAt())) {
            charCodePlusShift += 26;
        }

        if (isLowerCase(char) && (charCodePlusShift > 'z'.charCodeAt())) {
            charCodePlusShift -= 26;
        }

        if (isLowerCase(char) && (charCodePlusShift < 'a'.charCodeAt())) {
            charCodePlusShift += 26;
        }

        returnString += String.fromCharCode(charCodePlusShift);
    }

    return returnString;
};

function isUpperCase(string) {
    return string === string.toUpperCase()
}

function isLowerCase(string) {
    return string === string.toLowerCase()
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

// Do not edit below this line
module.exports = caesar;
