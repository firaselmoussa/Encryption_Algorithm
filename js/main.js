const textToEncrypt0 = "testing";
const textToEncrypt1 = "testing Xdhu gyug i iiuuuy ";
const textToEncrypt2 = "testing Xdhu gyug i iiuuuy $#^$^ 42qHbljui86t 7rdfugvh iy4 94y9 y4982yh28r4hy23ieh20ue392ihrjhriwbdkbr uh iuhrfiufh4 orh oehfiebgk fh ihi";

console.log(RTE(textToEncrypt0));



////////////////////////////////////////////////////



// RANDOM TIMING ENCRYPTION 
function RTE(stringToEncrypt){

    // RTE-key
    let RTE_key = Date.now();

    // converting input to binary
    let binaryToEncrypt = stringToBinary(stringToEncrypt);


    let segments = binaryToEncrypt.match(/[\s\S]{1,2}/g) || [];
    

// ENCREPTION
    let encrypted = [];
    let x  = String(RTE_key).length;

   // encryption loop
    for(var segment of segments){

        // x index condition
        x > 0 ? x -=1 : x  = String(RTE_key).length - 1;

        // encryption equation
        segment = (parseInt(segment) + parseInt(String(RTE_key).slice(x))) * RTE_key;

        // pushing hexa segments into result array
        encrypted.push(decimalToHexadecimal(segment));
    }
    

    // return result
    return encrypted.join(' ');
    
}//end of RTE function


// EXTERNAL FUNCTIONS

// string to binary
function stringToBinary(string) {
    let result = '';
    result = string.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    return result; 
}

// binary to string
function binaryToString(binary) {
    binary = binary.split(' ');
    let result = '';
    result = binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
    return result; 
}

// decimal to Hexadecimal
function decimalToHexadecimal(decimal){
    result = decimal.toString(16);
    return result; 
}

