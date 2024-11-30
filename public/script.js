// Form Validation Example
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        if (!name || !email) {
            alert('Please fill out all required fields.');
            e.preventDefault(); // Prevent form submission
        }
    });
});
