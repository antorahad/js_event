document.getElementById('item-2').addEventListener('click', function(){
    console.log('item two clicked');
    document.getElementById('item-2').style.backgroundColor = 'blue';
    event.stopImmediatePropagation();
});

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('list ul clicked');
    document.getElementById('list-ul').style.backgroundColor = 'orange';
});

document.getElementById('list-container').addEventListener('click', function(){
    console.log('List container has been clicked');
    document.getElementById('list-container').style.backgroundColor = 'purple';
});

document.getElementById('body').addEventListener('click', function(){
    console.log('body has been clicked');
    document.getElementById('body').style.backgroundColor = 'red';
});