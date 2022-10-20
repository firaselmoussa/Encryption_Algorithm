const encrypt_btn = document.getElementById('encrypt_btn');
const txt_input = document.getElementById('txt_input');
const encryption_result = document.getElementById('encryption_result');

encrypt_btn.addEventListener('click', ()=>{
    encryption_result.innerText = RTE(txt_input.value);

})