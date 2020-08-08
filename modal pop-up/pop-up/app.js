const btn=document.querySelector("button");
const ele=document.querySelector('.bg-modal');
btn.addEventListener('click',()=>{
    
    ele.style.display='flex';
});

const cross=document.querySelector('.close');
cross.addEventListener('click',()=>{
    ele.style.display='none';
});
