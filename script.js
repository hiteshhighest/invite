const a = document.querySelector('.Heart');
a.style.scale = "1";

function heart() {
    a.style.scale = "1.1";
    
    setTimeout(() => {
        a.style.scale = "1";
    }, 150);
}
