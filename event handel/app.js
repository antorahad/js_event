function handleOnClcik (){
    const updateText = document.getElementById('handlerStatus');
    updateText.innerText = 'Updated Text';
}

document.getElementById('magicBtn').addEventListener('click', function(){
    document.getElementById('defaultText').style.backgroundColor = '#6554AF';
    document.getElementById('defaultText').style.width = '60%';
    document.getElementById('defaultText').style.margin = '30px auto';
    document.getElementById('defaultText').style.color = 'white';
    document.getElementById('defaultText').style.padding = '60px'
    document.getElementById('defaultText').style.borderRadius = '10px';
    document.getElementById('defaultText').style.fontSize = '20px';
    document.getElementById('defaultText').style.fontWeight = '700';
    document.getElementById('defaultText').style.textAlign = 'center';
    document.getElementById('defaultText').innerText = 'The whole peragraph is changed by using JS addEventListener';
})

document.getElementById('postBtn').addEventListener('click', function(){
    const inputField = document.getElementById('input');
    const inputText = inputField.value;
    const text = document.getElementById('postedText');
    text.innerText = inputText;
    inputField.value = ''; 
});