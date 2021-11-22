let text = document.getElementById('text');
 window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.right = value * 0.1 +'px';
 });


