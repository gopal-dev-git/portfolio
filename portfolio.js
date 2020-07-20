var two=document.querySelector('.secondpage');
var one=document.querySelector('.firstpage');

one.style.dispay='block';
two.style.display='none';

document.querySelector('.project-btn').addEventListener('click',function(){
    if(two.style.display='none')
    {
    two.style.display='block';
    one.style.display='none';
    document.querySelector('.top_bar').textContent="projects";

    }
});
document.querySelector('.btn-home2').addEventListener('click',function(){
    if(two.style.display='block')
    {
    two.style.display='none';
    one.style.display='block';
    document.querySelector('.top_bar').textContent="portfolio";
    }
});
