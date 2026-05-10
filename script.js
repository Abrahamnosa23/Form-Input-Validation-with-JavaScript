
const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input-box input');

const fullNameInput = inputs[0];
const emailInput = inputs[1];
const passwordInput = inputs[2];
const confirmPasswordInput = inputs[3];
const ageInput = inputs[4];

function resetInputStyles() {
  for (let input of inputs) {
    input.style.borderColor = '#ccc';
  }
}

function markInvalid(input) {
  input.style.borderColor = 'red';
  input.focus();
}

function hasAtLeastTwoWords(text) {
  let wordCount = 0;
  let insideWord = false;

  for (let char of text) {
    if (char !== ' ' && insideWord === false) {
      wordCount++;
      insideWord = true;
    }

    if (char === ' ') {
      insideWord = false;
    }
  }

  return wordCount >= 2;
}

function isValidEmail(email) {
  let atCount = 0;
  let dotAfterAt = false;
  let hasSpace = false;
  let seenAt = false;

  if (email === '') {
    return false;
  }

  for (let char of email) {
    if (char === ' ') {
      hasSpace = true;
    }

    if (char === '@') {
      atCount++;
      seenAt = true;
    } else if (seenAt === true && char === '.') {
      dotAfterAt = true;
    }
  }

  if (hasSpace === true) {
    return false;
  }

  if (email[0] === '@' || email[0] === '.' || email[email.length - 1] === '@' || email[email.length - 1] === '.') {
    return false;
  }

  if (atCount !== 1) {
    return false;
  }

  if (dotAfterAt === false) {
    return false;
  }

  return true;
}

function hasUppercase(text) {
  for (let char of text) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return true;
    }
  }

  return false;
}

function hasNumber(text) {
  const numbers = '0123456789';

  for (let char of text) {
    if (numbers.includes(char)) {
      return true;
    }
  }

  return false;
}

function hasSpecialCharacter(text) {
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

  for (let char of text) {
    if (specialCharacters.includes(char)) {
      return true;
    }
  }

  return false;
}

function validateForm(event) {
  event.preventDefault();
  resetInputStyles();

  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const age = Number(ageInput.value);

  if (fullName === '' || hasAtLeastTwoWords(fullName) === false) {
    alert('Full Name must not be empty and must contain at least 2 words.');
    markInvalid(fullNameInput);
    return;
  }

  if (isValidEmail(email) === false) {
    alert('Please enter a valid email address, for example: example@domain.com');
    markInvalid(emailInput);
    return;
  }

  if (password.length < 8 || hasUppercase(password) === false || hasNumber(password) === false || hasSpecialCharacter(password) === false) {
    alert('Password must be at least 8 characters and include one uppercase letter, one number, and one special character.');
    markInvalid(passwordInput);
    return;
  }

  if (confirmPassword !== password) {
    alert('Confirm Password must match the Password.');
    markInvalid(confirmPasswordInput);
    return;
  }

  if (ageInput.value === '' || age < 18) {
    alert('Age must be 18 or older.');
    markInvalid(ageInput);
    return;
  }

  alert('Registration successful! All inputs are valid.');
  form.reset();
  resetInputStyles();
}

form.addEventListener('submit', validateForm);

for (let input of inputs) {
  input.addEventListener('input', function () {
    input.style.borderColor = '#ccc';
  });
}
