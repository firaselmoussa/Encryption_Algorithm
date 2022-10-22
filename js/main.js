// toggling algorithms preview
const preview_select = document.getElementById('preview_select');
const preview_sections = Object.values(document.getElementsByClassName('preview-section'));

// initially display RTE & RTD
rte_rtd_html.style.display = 'block';

// hiding all
preview_select.addEventListener('change', ()=>{

    // displaying selected html if option not null
    if(preview_select.value != ''){
        preview_sections.forEach(element => {
            element.style.display = 'none';
        });
        document.getElementById(preview_select.value).style.display = 'block';
    };
});

// RTMG preview
const rtmg_btn = document.getElementById('rtmg_btn');
const rtmg_h = document.getElementById('rtmg_h');
const rtmg_w = document.getElementById('rtmg_w');
const rtmg_solution = document.getElementById('rtmg_solution');
const rtmg_shape = document.getElementById('rtmg_shape');
const rtmg_result = document.getElementById('rtmg_result');

// generate maze
rtmg_btn.addEventListener('click', ()=>{
    // clearing result container
    rtmg_result.innerHTML = '';
    // appending generated maze
    rtmg_result.append(RTMG(rtmg_h.value, rtmg_w.value, rtmg_shape.value));
})

// RTE & RTD preview
const encrypt_btn = document.getElementById('encrypt_btn');
const encrypt_input = document.getElementById('encrypt_input');
const encryption_key = document.getElementById('encryption_key');

const decrypt_btn = document.getElementById('decrypt_btn');
const decrypt_input = document.getElementById('decrypt_input');
const RTE_key_input = document.getElementById('RTE_key_input');
const decryption_result = document.getElementById('decryption_result');


// 
encrypt_btn.addEventListener('click', ()=>{

    // encrypting input
    let encrypted = RTE(encrypt_input.value);

    // rendering result
    encryption_key.innerHTML = `<br> RTE_key: <span class="green"> ${encrypted.RTE_key} <br> <br>`;
    encryption_result.innerHTML = 
    `Encrypted: <p class="red limit-height"> ${encrypted.Encrypted} </p>`;

    // 
    decrypt_input.value = encrypted.Encrypted;
    RTE_key_input.value = encrypted.RTE_key;
});


// 
decrypt_btn.addEventListener('click', ()=>{

    // decrypting input
    let decrypted = RTD(decrypt_input.value, RTE_key_input.value);

    // rendering result
    decryption_result.innerHTML = `Decrypted: <p class="green limit-height">${decrypted} </p>`

});