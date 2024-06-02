document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    hamburger.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            navLinks.classList.toggle('active');
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    console.log('Form Data Submitted:', formObject);

    // Send this data to your server or API endpoint
    // Example:
    fetch('your-server-endpoint', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your feedback!');
            this.reset();
        } else {
            throw new Error('Network response was not ok.');
        }
    }).catch(error => console.error('Error:', error));
});
