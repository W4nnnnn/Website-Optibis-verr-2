//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hambruger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle ('aktif');
};

// klik di luarr side bar
const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click' , function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('aktif');
    }
});