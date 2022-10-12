const menuIcon = document.querySelector('.menu-icon');


let menuOpen = false;

menuIcon.addEventListener('click' , () => {
    if(!menuOpen){
        menuIcon.classList.add('open');
        menuOpen = true;
    } else{
        menuIcon.classList.remove('open');
        menuOpen = false;
    }

});