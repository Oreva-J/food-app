const navSlide = () => {
    const ham = document.querySelector('.ham');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    ham.addEventListener('click', () =>{
        // toggle nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index)  => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.02}s`;
        }
    
        });
        // Bar Animation
        ham.classList.toggle('toggle');
    })

    
}

navSlide();