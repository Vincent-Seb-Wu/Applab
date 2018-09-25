//JS Function: Consonant Counting

function consonant_count(str1){
    
    var c_list = `qwrtypsdfghjklzxcvmbnQWRTYPSDFGHJKLZXMCNVB`;
    
    var ccount = 0;

    for(var x = 0; x < str1.length ; x++){
        if (c_list.indexOf(str1[x]) !== -1){
            ccount += 1;
        }
    }
    
    return ccount;
}

console.log (`Welcome to the Consonant Counter! Your consonant count is ${consonant_count(`Application Lab is Fun!`)}!`)