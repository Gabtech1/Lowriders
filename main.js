const intro = document.getElementById('intro');
const topBtn = document.getElementById('top');

window.addEventListener("scroll", ()=> {
    topView();
});

const topView= () => {
    const position = intro.getBoundingClientRect();
    if (position.bottom < 0) {
        topBtn.style.display = "block";
    } else if (position.bottom >= 0){
        topBtn.style.display= "none";
    }
}