
function encrypt(){



}


const ToBinary = (str = '') => {
    let result = '';
    result = str.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    return result;
};
