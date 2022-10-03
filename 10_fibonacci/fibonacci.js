const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    
    let fibonacciCurrent = 1; //initial
    let fibonnaciPrev = 0;
    let fibonacciDummy;
    for (i=2; i<= num; i++){
        fibonacciDummy = fibonacciCurrent;
        fibonacciCurrent = fibonnaciPrev + fibonacciCurrent; 
        fibonnaciPrev = fibonacciDummy;
    }
    return fibonacciCurrent;
};

// Do not edit below this line
module.exports = fibonacci;
