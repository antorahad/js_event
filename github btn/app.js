document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value
    const confirmDelete = document.getElementById('deleteBtn');
    if(text === 'Delete'){
        confirmDelete.removeAttribute('disabled');
    }
    else{
        confirmDelete.setAttribute('disabled', true);
    }
});



document.getElementById('deleteBtn').addEventListener('click', function(){
   document.getElementById('dummyText').style.display = 'none';
});