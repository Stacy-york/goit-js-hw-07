// встановлення placeholder при input.active

const input = document.getElementById('myInput');

input.addEventListener('focus', function() {
    input.setAttribute('placeholder', 'Type area');
});

input.addEventListener('blur', function() {
    input.removeAttribute('placeholder');
});



const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
    alert('All form fields must be filled in');
        return; 
    }
    const formData = {
    email: email,
    password: password
    };
    console.log(formData);
    form.reset();
});
