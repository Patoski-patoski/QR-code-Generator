let btn = document.getElementById('btn');
let spin = document.getElementById('spinner');
let errorMsg =  document.getElementById('error-msg');
let qrImage = document.getElementById('qr-image');

const clickButton = () =>{

    let inputValue = document.getElementById('url').value;
    
    if (!inputValue){
    errorMsg.style.display = 'block';
    qrImage.style.display= 'none';
    btn.innerText = 'Generate Code...';
    }
 
    else { 
    showSpinner();

    errorMsg.style.display = 'none';
    qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    qrImage.style.display = 'block'

    
    setInterval(() => stopSpinner() , 222); 
    }

    document.getElementById('url').addEventListener('keyup', clear);

    function  clear(){
        qrImage.style.display = 'none';
    }


}

qrImage.addEventListener('load', () =>{
    btn.innerText = 'Generate Code';

})





btn.addEventListener('click', clickButton);

function stopSpinner() {
    spin.style.display = 'none'
}
function showSpinner() {
    spin.style.display = 'inline-block'
}
 