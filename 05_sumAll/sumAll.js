const sumAll = function(num1, num2) {
    if (num1 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let lessNum;
    let greaterNum;

    if (num1<num2) {
        lessNum = num1;
        greaterNum = num2;
    } else {
        lessNum = num2;
        greaterNum = num1;
    }

    let partialSum = 0;

    for(let i=lessNum; i<=greaterNum; i++){
        partialSum += i;
    }

    return partialSum;
};

// Do not edit below this line
module.exports = sumAll;
