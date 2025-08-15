document.addEventListener("DOMContentLoaded", function() {
  const footer = `
    <footer>
    <div class="container">
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="contact.html">Contact</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
      </div>
      <div class="social-icons">
        <a href="https://www.facebook.com/brujagabot"><i class="fab fa-facebook"></i></a>
        
        <a href="https://www.instagram.com/brujaga_bn"><i class="fab fa-instagram"></i></a>
        
      </div>
      <p>&copy; 2025 Payung Aman. All rights reserved.</p>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footer);
});

// <a href="#"><i class="fab fa-twitter"></i></a>
// <a href="#"><i class="fab fa-linkedin"></i></a>