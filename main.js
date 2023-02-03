document.addEventListener('submit',()=>{
    var pass1=document.querySelector('#pass1').value;
    var pass2=document.querySelector('#pass2').value;
    if(pass1==pass2){
        alert('password matched')
        return true;

    }else{
        alert('password needs to be the same')
        return false;
    }
    document.querySelector('#pass1').value='';
    document.querySelector('#pass2').value='';
})