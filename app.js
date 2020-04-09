const navSlide = () => {
    const lineboi = document.querySelector('.lineboi');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');
    //toggle nav

    lineboi.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

     //animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    //lineboi anims
    lineboi.classList.toggle('toggle')
    
    });
   
}

const disp1 = () => {
    document.getElementById('hello').style.display = 'none';
    document.getElementById('world').style.display = 'block';
}

const disp2 = () => {
    document.getElementById('hello').style.display = 'block';
    document.getElementById('world').style.display = 'none';
}





navSlide();
document.getElementById('me1').addEventListener('click', disp1)
document.getElementById('me2').addEventListener('click', disp2)