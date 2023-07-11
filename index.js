function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const dobInput = document.getElementById('dob');
    const colorInput = document.getElementById('color');
  
    const errorMessages = [];
  
    if (nameInput.value.trim() === '') {
      errorMessages.push('Name is required.');
    }
  
    if (!isValidEmail(emailInput.value.trim())) {
      errorMessages.push('Email is invalid.');
    }
  
    if (!isValidPhoneNumber(phoneInput.value.trim())) {
      errorMessages.push('Phone number is invalid.');
    }
  
    if (passwordInput.value.length < 8) {
      errorMessages.push('Password should be at least 8 characters long.');
    }
  
    if (isNaN(ageInput.value) || ageInput.value < 18 || ageInput.value > 100) {
      errorMessages.push('Age must be a number between 18 and 100.');
    }
  
    if (genderInput.value === '') {
      errorMessages.push('Gender is required.');
    }
  
    if (!isValidDate(dobInput.value.trim())) {
      errorMessages.push('Date of birth is invalid.');
    }
  
    if (colorInput.value === '#000000') {
      errorMessages.push('Please select a color.');
    }
  
    if (errorMessages.length > 0) {
      showErrors(errorMessages);
    } else {
      // Form is valid, submit it or perform further actions
      alert('Form submitted successfully!');
      resetForm();
    }
  }
  
  function showErrors(errors) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';
  
    errors.forEach(error => {
      const errorMessage = document.createElement('p');
      errorMessage.innerText = error;
      errorMessage.classList.add('error');
      errorContainer.appendChild(errorMessage);
    });
  }
  
  function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function isValidPhoneNumber(phone) {
    // Basic phone number validation using a regular expression
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }
  
  function isValidDate(date) {
    // Basic date validation using JavaScript's Date object
    const dateObj = new Date(date);
    return dateObj instanceof Date && !isNaN(dateObj);
  }
  
  function resetForm() {
    document.getElementById('myForm').reset();
    document.getElementById('errorContainer').innerHTML = '';
  }
  