// Random Timing Algorithms
///////////////////////////////////////////////////////////


// RANDOM TIMING ENCRYPTION 
function RTE(stringToEncrypt){

    // RTE-key = current time in milliseconds + random number from -9 to 9
    let RTE_key = Date.now() + Math.floor(Math.random() * ((9) - (-9) + 1) + (-9));

    // converting input to binary
    let binaryToEncrypt = stringToBinary(stringToEncrypt);

    console.log(binaryToEncrypt)
    // spliting binary 
    let segments = binaryToEncrypt.split(' ')
    

// ENCREPTION
    let encrypted = [];
    let x  = String(RTE_key).length;

   // encryption loop
    for(var segment of segments){

        // x index condition
        x > 0 ? x -=1 : x  = String(RTE_key).length - 1;

        // encryption equation
        // segment = (parseInt(segment)* RTE_key) + parseInt(String(RTE_key).slice(x));
        segment = (parseInt(segment)) - parseInt(String(RTE_key).slice(x));

        // pushing hexa segments into result array
        encrypted.push(decimalToHexadecimal(segment));
    }
    
    // Json format
    encrypted = {
                "Encrypted":encrypted.join(' '), "RTE_key":RTE_key
                };

    // return result
    return encrypted;
    
}//end of RTE function


// RANDOM TIMING DECRYPTION 
// takes a json object which is usually returned by RTE
function RTD(decrypt, RTE_key){

    // reversing join(' ')
    let decrypted = [];

    // reversing join(' ')
    let segments = decrypt.split(' ');
    
    // RTE_key length
    let x  = String(RTE_key).length;

    // segment decryption loop
    for(var segment of segments){

        // reverse to decimal from hexa
        segment = parseInt(segment, 16);


        // x index condition
        x > 0 ? x -=1 : x  = String(RTE_key).length -1;

        // decryption equation
        // segment = (parseInt(segment)+ parseInt(String(RTE_key).slice(x))) / RTE_key ;
        segment = parseInt(segment) + parseInt(String(RTE_key).slice(x));


        // console.log(segment);
        // pushing string segments into result array
        // for(bit of String(segment)){
        //     // preventing bit overflow
        //     if(parseInt(bit) > 1){
        //         segment = String(segment).replace(bit, '1');
        //     }
        // }
        
        decrypted.push(segment);
        
    }

    console.log(decrypted.join(' '))
    // joinning & converting result to string
    decrypted = binaryToString(decrypted.join(' '));
    
    // returning decryption
    return decrypted;
    
}//end of RTD function



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

