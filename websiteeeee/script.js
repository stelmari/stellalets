
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
   

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
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
