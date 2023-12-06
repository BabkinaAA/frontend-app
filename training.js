
function getSum (number1, number2) {
    return number1 + number2;
}
console.log(getSum(3, 7));
console.log(getSum(4, -9));


function getMaxValue(number1, number2, number3) {
    var max;
    if (number1 > number2){
        max = number1;
    } else {
        max = number2;
    }
    if (number3 > max){
        max = number3
    }
    return max
}
console.log(getMaxValue(3, 7, 100));
console.log(getMaxValue(-3, -9, 20))


function getMaxLengthString(str1, str2, str3) {
    var longest;
    if (str1.length > str2.length){
        longest = str1;
    } else {
        longest = str2;
    }
    if (str3.length > longest){
        longest = str3;
    }
    return longest
}
str1 = 'soup'
str2 = 'kitkat'
str3 = 'water'
console.log(getMaxLengthString(str1, str2, str3));