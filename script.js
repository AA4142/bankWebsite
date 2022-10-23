const menuIcon = document.querySelector('.menu-icon');
const headerMenu = document.querySelector('.headerMenuContainer');

let menuOpen = false;

menuIcon.addEventListener('click' , () => {
    if(!menuOpen){
        menuIcon.classList.add('open');
        headerMenu.classList.add('open');
        menuOpen = true;
    } else{
        menuIcon.classList.remove('open');
        headerMenu.classList.remove('open');
        menuOpen = false;
    }

});