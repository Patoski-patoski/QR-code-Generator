const spin = document.getElementById('spinner')
const btn = document.querySelector('button');
const inputValue = document.getElementById('input').value;

btn.addEventListener('click', showSpinner);

function showSpinner(){
    if (inputValue === '') {
        alert('erro')
        
    }else{
        showSpinner()

        setInterval(() => {
            hideSpinner()
        }, 1000);
    }
}


function showSpinner(){
    spin.style.display = 'inline-block' 
}


function hideSpinner(){

    spin.style.display = 'none'  
        
}


 