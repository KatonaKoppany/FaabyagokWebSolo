let menuBtn = document.getElementById('navBTN');
let nav=document.getElementById('nav');
let menuCkick = false;

menuBtn.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visibles');
    console.log(visibility);
    
    if(visibility === "false"){
        nav.setAttribute('data-visibles', true);
    }
    else if(visibility === "true"){
        nav.setAttribute('data-visibles', false);
    }
});