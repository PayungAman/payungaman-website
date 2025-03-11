// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('nav') && !event.target.closest('.hamburger') && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
        }
      }
    });
  });
  
  // Form validation for contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      let valid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      if (!name.value.trim()) {
        valid = false;
        showError(name, 'Name is required');
      } else {
        removeError(name);
      }
      
      if (!email.value.trim()) {
        valid = false;
        showError(email, 'Email is required');
      } else if (!isValidEmail(email.value)) {
        valid = false;
        showError(email, 'Please enter a valid email');
      } else {
        removeError(email);
      }
      
      if (!message.value.trim()) {
        valid = false;
        showError(message, 'Message is required');
      } else {
        removeError(message);
      }
      
      if (valid) {
        // In a real application, you would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      }
    });
  }
  
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
      formGroup.appendChild(errorElement);
    }
    
    input.style.borderColor = 'red';
  }
  
  function removeError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
      formGroup.removeChild(errorElement);
    }
    
    input.style.borderColor = '';
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
