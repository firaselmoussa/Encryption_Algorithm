// Random Timing Algorithms
///////////////////////////////////////////////////////////


// RANDOM TIMING MAZE GENERATOR
function RTMG(height, width, shape){

    // using time in milliseconds to randomize the process
    let RTMG_key = Date.now();

    // n = parseInt(n);

    let h = parseInt(height);
    let w = parseInt(width);

    // calculating sample set aka 'n'
    let sample_set = h*w;

    // index arrays
    let index_of_all_points = [];
    let index_of_sides_points = [];
    let possible_solution_points = []

    // inserting index of all points  
    for(i = 0; i < sample_set; i++ ){
        index_of_all_points.push(i)
    }

    // inserting TOP & BOTTOM side points indecies
    for(i = 0; i < sample_set; i++){
        if (i < h) index_of_sides_points.push(index_of_all_points[i]);
        if (i < h) index_of_sides_points.push(index_of_all_points.at(-i-1));
    }

    // inserting LEFT & RIGHT side points indecies
    for(i = 0; i < sample_set; i+=h){
        index_of_sides_points.push(i);
        index_of_sides_points.push(i+h-1);
    }


    // sorting array & filtering duplicates
    index_of_sides_points = [...new Set(index_of_sides_points.sort(function(a, b){return a - b}))];

    // choose enterance points randomly
    let enterance_point = index_of_sides_points[Math.round(Math.random() * (index_of_sides_points.length - 0) + 0)]; 

    // removing enterance point to avoid choosing it as exit point
    index_of_sides_points.splice(index_of_sides_points.indexOf(enterance_point), 1);

    // choose enterance points randomly
    let exit_point = index_of_sides_points[Math.round(Math.random() * (index_of_sides_points.length - 0) + 0)];

    // creating maze div
    let generated_maze = document.createElement('div');
    generated_maze.classList.add('RTMG_maze');

    // maze css
    generated_maze.style.gridTemplateColumns = `repeat(${h}, 1fr)`;
    generated_maze.style.gridTemplateRows = `repeat(${w}, 1fr)`;
    generated_maze.style.width = 'fit-content';
    generated_maze.style.height = 'fit-content';
    generated_maze.style.display = 'grid';

    if(shape == 'triangle'){
        generated_maze.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
    }else if(shape == 'hexagon'){
        generated_maze.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
    }else if(shape == 'circle'){
        generated_maze.style.clipPath = 'circle(50% at 50% 50%)';
    }

    // creating & rendering points
    index_of_all_points.forEach(element => {

        let point = document.createElement('div');
        point.classList.add('RTMG_point');
        point.id = `RTMG_${element}_point`;

        // point css
        point.style.height = '20px';
        point.style.aspectRatio = '1/1';
        point.style.border = '1px solid white';
        point.style.margin= '-1px';

        // randomizing bordering
        let x = Math.round(Math.random()*10);

        RTMG_key -= x;

        if(RTMG_key % 2 == 0){
            point.style.borderLeft = 'none';
            if(x % 2 == 0){
                point.style.borderTop = 'none';
            }else{
                point.style.borderRight = 'none';
            }
        }else{
            point.style.borderBottom = 'none';
        }

        if(x > 4){
            point.style.borderTop = 'none';
            if(x % 2 == 0){
                point.style.borderLeft = 'none';
            }else{
                point.style.borderBottom = 'none';
            }
        }else{
            point.style.borderRight = 'none';
        }



        // appending points in generated maze
        generated_maze.append(point);
        
    });

    // return result
    return generated_maze;
};

// RANDOM TIMING ENCRYPTION 
function RTE(stringToEncrypt){

    // RTE-key = current time in milliseconds + random number from -9 to 9
    let RTE_key = Date.now() + Math.floor(Math.random() * ((9) - (-9) + 1) + (-9));

    // converting input to binary
    let binaryToEncrypt = stringToBinary(stringToEncrypt);

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
        segment = parseInt(segment) + parseInt(String(RTE_key).slice(x));
        
        decrypted.push(segment);
        
    }

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

