
function getSum (number1, number2) {
    return number1 + number2;
}
console.log(getSum(3, 7));
console.log(getSum(4, -9));


function getMaxValue(number1, number2, number3) {
    let maxValue;
    if (number2 < number1 < number3) 
    return number1;
    else if (number1 < number2 < number3)
    return number2;
    else if (number1 < number3 < number2)
    return Maxvalue = number3;

}
console.log(getMaxValue(3, 7, 100));
console.log(getMaxValue(4, -9, -10));

function getMaxLengthString(arrayOfStrings) {
    // 
}
console.log(getMaxLengthString(['Soup', 'Pasta', 'Water']));