/*
const myBtnOne = document.getElementById('myBtn1');
myBtnOne.addEventListener('click', colorChange);

function colorChange(){
    document.body.style.backgroundColor = '#272829';
}
*/



/*const myBtnOne = document.getElementById('myBtn1');
myBtnOne.addEventListener('click', function colorChange(){
    document.body.style.backgroundColor = '#272829';
});*/


document.getElementById('myBtn1').addEventListener('click', function(){
    document.body.style.backgroundColor = '#272829';
    document.getElementById('peraText').style.color = 'white';
    document.getElementById('titleTag').style.color = 'white';
})

