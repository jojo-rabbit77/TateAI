/********************************************************
 * main.js
 * - Preloader
 * - GSAP Animations for section transitions
 * - Wide image slides from left to right
 ********************************************************/

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Slight delay so user sees lasers
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 800);
  });
  
  function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate entire sections as they come into view
    document.querySelectorAll('.section').forEach((sec) => {
      gsap.from(sec.querySelector('.section-content'), {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 1
      });
    });
  
    // Animate the wide image (appear from left, disappear to right)
    // in the #transition-image section
    const wideImage = document.querySelector('#transition-image .wide-image');
    if (wideImage) {
      gsap.fromTo(wideImage, 
        { x: -200, opacity: 0 }, 
        { 
          x: 200, 
          opacity: 1,
          scrollTrigger: {
            trigger: '#transition-image',
            start: 'top 80%',
            end: 'bottom top', // as we scroll past the section
            scrub: true
          }
        }
      );
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initGSAP();
  });
  