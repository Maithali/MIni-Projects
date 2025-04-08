// script.js

function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;
  const errorMessage = document.getElementById("errorMessage");

  // Check if the username and password are provided
  if (username === "" || password === "") {
    errorMessage.style.display = "block";
    return false;
  }

  // Store login credentials in localStorage if 'Remember Me' is checked
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // If validation passes, we return true to submit the form (or you can redirect to another page)
  alert("Logged in successfully!"); // For demo purposes
  return false; // Prevent form submission to demonstrate the login
}

// Autofill username if stored in localStorage (for "Remember Me")
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  if (savedUsername) {
    document.getElementById("username").value = savedUsername;
    document.getElementById("password").value = savedPassword;
    document.getElementById("rememberMe").checked = true;
  }
};

// Password Strength Checker
function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("password-strength");
  const passwordMessage = document.getElementById("password-message");
  let strength = 0;

  // Check password strength based on length and character variety
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;

  // Set strength message and color based on strength
  if (strength === 0) {
    strengthBar.style.width = "0";
    passwordMessage.textContent = "Password is too weak";
    passwordMessage.style.color = "red";
  } else if (strength === 1) {
    strengthBar.style.width = "25%";
    passwordMessage.textContent = "Very Weak";
    passwordMessage.style.color = "red";
  } else if (strength === 2) {
    strengthBar.style.width = "50%";
    passwordMessage.textContent = "Weak";
    passwordMessage.style.color = "orange";
  } else if (strength === 3) {
    strengthBar.style.width = "75%";
    passwordMessage.textContent = "Good";
    passwordMessage.style.color = "yellowgreen";
  } else if (strength === 4) {
    strengthBar.style.width = "100%";
    passwordMessage.textContent = "Strong";
    passwordMessage.style.color = "green";
  }
}
