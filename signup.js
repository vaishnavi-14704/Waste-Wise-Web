document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signin-form");
    const verificationForm = document.getElementById("verification-form");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Here, you would send the email to the server for verification
        // After successful verification, show the verification form
        signInForm.classList.add("hidden");
        verificationForm.classList.remove("hidden");
    });

    verificationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const verificationCode = document.getElementById("verification-code").value;
        // Here, you would send the verification code to the server for validation
        // If valid, proceed with authentication
    });
});
