const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#confirmation");
const signUpForm = document.querySelector("#sign-up-form");
const matchingMessage = document.querySelector("#matching-message");


passwordConfirmation.addEventListener('input', () => {
    if (password.value !== passwordConfirmation.value) {
        matchingMessage.textContent = "Make sure to match the password.";
        passwordConfirmation.classList.add('invalid');        
    } else {
        matchingMessage.textContent = "Password matched"
        passwordConfirmation.classList.remove("invalid");
    }
});