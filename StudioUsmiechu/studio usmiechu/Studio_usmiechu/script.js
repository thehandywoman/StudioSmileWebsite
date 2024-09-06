    var about = document.querySelector('.about');

if (about) {
    var backgroundImage = getComputedStyle(about).backgroundImage;

    if (backgroundImage !== 'none' && backgroundImage !== '') {
        var img2 = new Image();
        img2.src = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/gi, '$1');

        img2.onload = function() {
            about.style.height = img2.height + 'px';
        };
    }
}


    var teamHeader = document.querySelector('.team-header');
    
    if (teamHeader) {
        var img3 = new Image();
        img3.src = 'images/zespol.png';
        
        img3.onload = function() {
            teamHeader.style.height = img3.height + 'px';
        };
    }

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

