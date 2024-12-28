document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById('name').value.trim();
        const age = parseInt(document.getElementById('age').value, 10);

        // Validation checks
        if (!name) {
            alert("Please enter your name.");
            return;
        }

        if (isNaN(age) || age < 18) {
            alert("You must be at least 18 years old.");
            return;
        }

        alert("Welcome, " + name + "!");
    });
});
