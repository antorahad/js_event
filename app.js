function changeText() {
    let changeTitle = document.getElementById('headtag');

    document.getElementById('headtag').style.backgroundColor = 'red';

    let newText = changeTitle.innerText = 'I have changed the text';
    return newText;
}

function addClass(){
    let colorBtn = document.getElementById('btn');

    let updateBtn = colorBtn.classList.add('color');

    return updateBtn;
}

function darkMode(){
    let darkMod = document.body.style.backgroundColor = 'black';
    return darkMod;
}