function checkEmail() {
    const inputEmail = document.getElementById('input-bar').value;

    if (isValidEmail(inputEmail)) {
        alert('Thank you for subscribing!');
    } else {
        document.getElementById('error-icon').classList.remove('d-none');
        document.getElementById('alert-text').classList.remove('d-none');

        setTimeout(() => {
            document.getElementById('error-icon').classList.add('d-none');
            document.getElementById('alert-text').classList.add('d-none');
          }, 5000);
    }
}

function isValidEmail(email) {
    // Regular expression pattern for a valid email address
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Test the email against the pattern
    return emailPattern.test(email);
}