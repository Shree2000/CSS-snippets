let tabs = document.getElementsByClassName("tab");
let contents = document.getElementsByClassName("content");
for (let i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click", tab,true);
}
function tab(element){
    element.stopPropagation();
    for (let i=0;i<tabs.length;i++){
        tabs[i].classList.remove("active_tab");
    };
    for (let i=0;i<contents.length;i++){
        contents[i].classList.remove("active_content");
    };
    element.target.classList.add("active_tab");
    document.getElementById(element.srcElement.dataset.content).classList.add("active_content");
}