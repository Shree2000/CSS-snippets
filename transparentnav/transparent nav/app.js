let istrans=true;
const nav=document.querySelector('nav');
window.addEventListener('scroll', event=>{
    if(window.pageYOffset>70 && istrans){
        nav.classList.add('_fixed');
        istrans=false;
    }
    if(window.pageYOffset<=70 && !istrans)
    {
        nav.classList.remove('_fixed');
        istrans=true;
    }
});