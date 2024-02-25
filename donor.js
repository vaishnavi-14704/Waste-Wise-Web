const form = document.getElementById('donation-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    displaySuccessMessage();
    form.reset();
  }
});

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const meals = document.getElementById('meals').value;

  if (name === '' || email === '' || meals === '') {
    alert('Please fill in all fields.');
    return false;
  }

  if (meals < 1) {
    alert('Please enter a valid number of meals.');
    return false;
  }

  return true;
}

function displaySuccessMessage() {
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 3000);
}