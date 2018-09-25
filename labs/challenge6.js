//JS Function: umbrella to coat

function wordSwitch (word){
    Umbrella = `she didn't like how heavy the rain was, so she decided to take her umbrella`
    toCoat = Umbrella.replace(`umbrella`, word)

    return toCoat;
}

console.log (wordSwitch (`coat`))