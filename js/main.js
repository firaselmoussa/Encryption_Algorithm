
function encrypt(){



}

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

