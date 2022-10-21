const encrypt_btn = document.getElementById('encrypt_btn');
const encrypt_input = document.getElementById('encrypt_input');
const encryption_result = document.getElementById('encryption_result');

const decrypt_btn = document.getElementById('decrypt_btn');
const decrypt_input = document.getElementById('decrypt_input');
const decryption_result = document.getElementById('decryption_result');


// 
encrypt_btn.addEventListener('click', ()=>{

    // encrypting input
    let encrypted = RTE(encrypt_input.value);

    // rendering result
    encryption_result.innerHTML = 
    `Encrypted: ${encrypted.Encrypted} <br> <br>
    RTE_key: ${encrypted.RTE_key}`;

})


// 
decrypt_btn.addEventListener('click', ()=>{

    // decrypting input
    let decrypted = RTD(encrypt_input.value);

    // rendering result
    decryption_result.innerHTML = 
    `Encrypted: ${decrypted.Encrypted} <br> <br>
    RTE_key: ${decrypted.RTE_key}`;

})