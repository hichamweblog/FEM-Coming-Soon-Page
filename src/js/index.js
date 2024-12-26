import '../css/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const emailInput = document.querySelector('#email');
  const errorMessage = document.querySelector('#error-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
      errorMessage.style.display = 'block';
      emailInput.classList.add('error');
    } else {
      errorMessage.style.display = 'none';
      emailInput.classList.remove('error');
      emailInput.value = '';
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
