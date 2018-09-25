//JS Function: Reverse Word

function reverseString(str) {
    
    var splitString = str.split(``);

    var reverseArray = splitString.reverse(``);

    var joinArray = reverseArray.join(``);

    return joinArray;

}
console.log (reverseString(`!ereh si emit gnirpS`));