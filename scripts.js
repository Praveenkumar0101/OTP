document.getElementById('sendOtpButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(otp);
    localStorage.setItem('otp', otp);

    emailjs.send('service_ne8hpc7', 'template_gu1wnhn', {
        to_email: email,
        otp: otp
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('OTP sent to your email!');
        document.getElementById('otpSection').style.display = 'block';
    }, function(error) {
        console.error('FAILED...', error);
    });
});

document.getElementById('verifyOtpButton').addEventListener('click', function() {
    const enteredOtp = document.getElementById('otp').value;
    const storedOtp = localStorage.getItem('otp');

    if (enteredOtp === storedOtp) {
        alert('OTP verified successfully!');
        document.getElementById('submitButton').disabled = false;
    } else {
        alert('Invalid OTP. Please try again.');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!');
        location.reload();
    }
});
