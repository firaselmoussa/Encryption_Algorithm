const encrypt_btn = document.getElementById('encrypt_btn');
const encrypt_input = document.getElementById('encrypt_input');
const encryption_result = document.getElementById('encryption_result');

const decrypt_btn = document.getElementById('decrypt_btn');
const decrypt_input = document.getElementById('decrypt_input');
const decryption_result = document.getElementById('decryption_result');


// 
encrypt_btn.addEventListener('click', ()=>{

    encryption_result.innerHTML = 
    `Encrypted: ${RTE(encrypt_input.value).Encrypted} <br> <br>
    RTE_key: ${RTE(encrypt_input.value).RTE_key}`;

})


// 
decrypt_btn.addEventListener('click', ()=>{

    decryption_result.innerHTML = 
    `Encrypted: ${RTE(decrypt_input.value).Encrypted} <br> <br>
    RTE_key: ${RTE(decrypt_input.value).RTE_key}`;

})