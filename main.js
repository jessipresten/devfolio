// Animate skill bars when scrolling to the skills section
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector('#about .skills-content');
    const progressBars = document.querySelectorAll('.progress-bar');
  
    window.addEventListener('scroll', function() {
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.2;
  
      if(sectionPos < screenPos) {
        progressBars.forEach(bar => {
          const value = bar.getAttribute('aria-valuenow');
          bar.style.width = value + '%';
        });
      }
    });
  });
  
  // Smooth fade-in for hero text
  document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector('.hero .container');
  
    if (heroText) {
      heroText.style.opacity = 0;
      heroText.style.transform = 'translateY(30px)';
      heroText.style.transition = 'all 2s ease';
  
      setTimeout(() => {
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
      }, 500);
    }
  });
  
































