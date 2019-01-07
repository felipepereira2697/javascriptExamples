//The second argument of parseInt function is the radix, so we receive a number as a binary and translate it to decimal
function convertToInteger(str) {
    return parseInt(str,2);
}
convertToInteger("10011");