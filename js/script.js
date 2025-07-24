// Loading Animation
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 500);
});

// Password Validation
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordFeedback = document.getElementById('passwordFeedback');
const requirements = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number')
};

if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let isValid = true;
        
        // Validate length
        if (password.length >= 8) {
            requirements.length.classList.remove('text-danger');
            requirements.length.classList.add('text-success');
        } else {
            requirements.length.classList.remove('text-success');
            requirements.length.classList.add('text-danger');
            isValid = false;
        }
        
        // Validate uppercase
        if (/[A-Z]/.test(password)) {
            requirements.uppercase.classList.remove('text-danger');
            requirements.uppercase.classList.add('text-success');
        } else {
            requirements.uppercase.classList.remove('text-success');
            requirements.uppercase.classList.add('text-danger');
            isValid = false;
        }
        
        // Validate lowercase
        if (/[a-z]/.test(password)) {
            requirements.lowercase.classList.remove('text-danger');
            requirements.lowercase.classList.add('text-success');
        } else {
            requirements.lowercase.classList.remove('text-success');
            requirements.lowercase.classList.add('text-danger');
            isValid = false;
        }
        
        // Validate number
        if (/[0-9]/.test(password)) {
            requirements.number.classList.remove('text-danger');
            requirements.number.classList.add('text-success');
        } else {
            requirements.number.classList.remove('text-success');
            requirements.number.classList.add('text-danger');
            isValid = false;
        }
        
        // Set custom validity
        if (isValid) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Password tidak memenuhi persyaratan');
        }
    });
}

// Confirm Password Validation
if (confirmPasswordInput && passwordInput) {
    confirmPasswordInput.addEventListener('input', function() {
        if (this.value !== passwordInput.value) {
            this.setCustomValidity('Password tidak cocok');
        } else {
            this.setCustomValidity('');
        }
    });
}

// Registration Form Validation
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (this.checkValidity()) {
            // Form is valid, proceed with submission
            alert('Pendaftaran berhasil! Kami akan menghubungi Anda segera.');
            this.reset();
            
            // Reset password requirements
            Object.values(requirements).forEach(req => {
                req.classList.remove('text-success');
                req.classList.add('text-danger');
            });
        }
        
        this.classList.add('was-validated');
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const messageInput = document.getElementById('contactMessage');
const messageCounter = document.getElementById('messageCounter');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (this.checkValidity()) {
            // Form is valid, proceed with submission
            alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.');
            this.reset();
            messageCounter.textContent = '0/500 karakter';
        }
        
        this.classList.add('was-validated');
    });
}

// Message Character Counter
if (messageInput && messageCounter) {
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        messageCounter.textContent = `${currentLength}/500 karakter`;
        
        if (currentLength > 500) {
            messageCounter.classList.add('text-danger');
        } else {
            messageCounter.classList.remove('text-danger');
        }
    });
}

// Initialize Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});