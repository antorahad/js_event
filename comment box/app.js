document.getElementById('commentBtn').addEventListener('click', function(){
   const commentSection = document.getElementById('commentBox');
   const commentText = commentSection.value;
   const commentContainer = document.getElementById('comment-container');
   const p = document.createElement('p');
   p.innerText = commentText
   p.style.backgroundColor = 'lightblue';
   p.style.padding = '15px';
   p.style.borderRadius = '10px';
   p.style.width = '350px';
   commentContainer.appendChild(p);
   commentSection.value = '';
});