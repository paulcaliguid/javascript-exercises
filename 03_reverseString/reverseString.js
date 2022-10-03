const reverseString = function(string) {
    let dummyString = "";

    for(let i=string.length-1; i>=0; i--) {
        if(string.length === 0) {
            break;
        }
        dummyString += string.charAt(i);
    }
    
    return dummyString;
};

// Do not edit below this line
module.exports = reverseString;
