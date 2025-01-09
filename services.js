// JAVASCRIPT FOR HAMBURGER ICON IN MEDIA QUERY
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the hamburger menu and navigation links
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

    // Toggle the 'active' class on the navigation links and 'open' class on the hamburger when clicked
    hamburger.addEventListener('click', () => {
      // Toggle the 'active' class to show or hide the nav links
      const isActive = navLinks.classList.toggle('active');
      
      // Toggle the 'open' class on the hamburger icon to change its appearance
      hamburger.classList.toggle('open');
      
      // Update the 'aria-expanded' attribute for accessibility purposes
      hamburger.setAttribute('aria-expanded', isActive);
    });
});

const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetModalId = button.getAttribute('href').substring(1); 
    const modal = document.getElementById(targetModalId);
    
    if (modal) {
      modal.style.display = "block";
    }
  });
});

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const modal = button.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});

window.addEventListener('click', function(event) {
  const modal = document.querySelector('.modal');
  if (modal && event.target === modal) {
    modal.style.display = 'none';
  }
});
