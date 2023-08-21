
let links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        links.forEach(function (a) {
            a.classList.remove("active");
        });

        this.classList.add("active");
    });
});


function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('Phone');
    const ticketNumInput = document.getElementById('ticketNum');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const ticketNumError = document.getElementById('ticketNumError');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    ticketNumError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
    }

    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone is required';
    }

    if (ticketNumInput.value.trim() === '') {
        ticketNumError.textContent = 'Budget is required';
    }
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

