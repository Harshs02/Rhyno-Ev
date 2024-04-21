 /* JavaScript for Animation */

 document.addEventListener("DOMContentLoaded", function() {
     // Fade in sections
     const sections = document.querySelectorAll('.section');
     sections.forEach(section => {
         if (isElementInViewport(section)) {
             section.classList.add('active');
         }
     });

     window.addEventListener('scroll', function() {
         sections.forEach(section => {
             if (isElementInViewport(section)) {
                 section.classList.add('active');
             }
         });
     });

     function isElementInViewport(el) {
         const rect = el.getBoundingClientRect();
         return (
             rect.top >= 0 &&
             rect.left >= 0 &&
             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
         );
     }
 });
