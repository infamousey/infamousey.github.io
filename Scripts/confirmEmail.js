function validateEmail() {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        alert("The email addresses do not match. Self destruct in 5");
        return false;
    }
    return true;
}
