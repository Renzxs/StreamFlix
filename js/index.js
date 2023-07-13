const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const menu = document.querySelector('.menubar');
const menuNav = document.querySelector('.menunav');
const closemenu = document.querySelector('.closemenu');


menu.addEventListener("click", function() {
    menuNav.classList.toggle("open");
});

closemenu.addEventListener("click", function() {
    menuNav.classList.toggle("open");
});