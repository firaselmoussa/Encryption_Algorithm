const textToEncrypt0 = "testing";
const textToEncrypt1 = "testing Xdhu gyug i iiuuuy ";
const textToEncrypt2 = "testing Xdhu gyug i iiuuuy $#^$^ 42qHbljui86t 7rdfugvh iy4 94y9 y4982yh28r4hy23ieh20ue392ihrjhriwbdkbr uh iuhrfiufh4 orh oehfiebgk fh ihi";

RTE();



////////////////////////////////////////////////////



// RANDOM TIMING ENCRYPTION 
function RTE(){

    // RTE-key
    let RTE_key = Date.now();

    


}//end of RTE function

// string to binary
const stringToBinary = (str = '') => {
    let result = '';
    result = str.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    return result;
};

// binary to string
function binaryToString(binary) {
    binary = binary.split(' ');
    let result = '';
    result = binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
    return result; 
}

