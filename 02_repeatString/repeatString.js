const repeatString = function(string, num) {
    let dummyString = "";
    if (num < 0) {
        dummyString = "ERROR";
    }
    for(let i=0; i<num; i++) {
        dummyString += string;
    }
    return dummyString;
};

// Do not edit below this line
module.exports = repeatString;
