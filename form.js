document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        if (!nameInput.value) {
            nameError.textContent = 'İsim gerekli';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        if (!emailInput.value) {
            emailError.textContent = 'Email gerekli';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = 'Geçerli bir email girin';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        if (!phoneInput.value) {
            phoneError.textContent = 'Telefon numarası gerekli';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        if (!messageInput.value) {
            messageError.textContent = 'Mesaj gerekli';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (valid) {
            alert('Form başarıyla gönderildi!');
            // Form verilerini gönderme işlemi burada yapılır
            form.reset();
        }
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        form.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
    });
});
