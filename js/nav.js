let navBtn = document.getElementById('navBTN');
let nav = document.getElementsByClassName('nav')[0];
let menuCkick = false;

navBtn.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visibles');
    console.log(visibility);
    console.dir(navBtn);
    
    if(visibility === "false"){
        nav.setAttribute('data-visibles', true);
        navBtn.children[0].classList.add('fa-times');
    }
    else if(visibility === "true"){
        nav.setAttribute('data-visibles', false);
        navBtn.children[0].classList.remove('fa-times');
    }
});