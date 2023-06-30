const form = document.getElementById('regForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    };
    
    localStorage.setItem('formData', JSON.stringify(data));
    
    window.location.href = 'sample.html';
});
