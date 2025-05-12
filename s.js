document.addEventListener('DOMContentLoaded', function() {
  // Toggle password visibility
  const togglePassword = document.querySelector('.toggle-password');
  const passwordInput = document.getElementById('password');
  
  if (togglePassword && passwordInput) {
      togglePassword.addEventListener('click', function() {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          this.classList.toggle('fa-eye-slash');
      });
  }
  
  // Add focus effects to inputs
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.parentElement.querySelector('label').style.color = 'var(--primary)';
      });
      
      input.addEventListener('blur', function() {
          this.parentElement.querySelector('label').style.color = 'var(--text-dark)';
      });
  });
});