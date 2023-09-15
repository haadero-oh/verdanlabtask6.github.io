document.addEventListener('DOMContentLoaded', function() {
    var fnameInput = document.getElementById('fname');
    var fnameLabel = document.getElementById('fnamelbl');
    var midintInput = document.getElementById('midint');
    var midintLabel = document.getElementById('midintlbl');
    var lnameInput = document.getElementById('lname');
    var lnameLabel = document.getElementById('lnamelbl');
    var emailLabel = document.getElementById("emaillbl");
    var emailInput = document.getElementById("email");
    var emailLabel = document.getElementById("emaillbl");

fnameInput.addEventListener('focusout', function() {
    if (fnameInput.value === "") {
        fnameLabel.textContent = 'Field is empty';
        fnameLabel.style.color = "red";
        fnameInput.style.borderColor = "red";
    }
 });

midintInput.addEventListener('focusout', function() {
    if (midintInput.value === "") {
        midintLabel.textContent = 'Field is empty';
        midintLabel.style.color = "red";
        midintInput.style.borderColor = "red";
    }
 });

lnameInput.addEventListener('focusout', function() {
    if (lnameInput.value === "") {
        lnameLabel.textContent = 'Field is empty';
        lnameLabel.style.color = "red";
        lnameInput.style.borderColor = "red";
    }
 });

emailInput.addEventListener('focusout', function() {
    if (emailInput.value === "") {
        emailLabel.textContent = 'Field is empty';
        emailLabel.style.color = "red";
        emailInput.style.borderColor = "red";
    }
 });

fnameInput.addEventListener('focus', function() {
    if (fnameInput.value === '') {
    fnameLabel.textContent = 'First name:';
    fnameLabel.style.color = "black";
    fnameInput.style.color = "green";
    fnameInput.style.borderColor = "green";
    }
 });

midintInput.addEventListener('focus', function() {
    if (midintInput.value === '') {
    midintLabel.textContent = 'Middle Initial:';
    midintLabel.style.color = "black";
    midintInput.style.color = "green";
    midintInput.style.borderColor = "green";
    }
 });

lnameInput.addEventListener('focus', function() {
    if (lnameInput.value === '') {
    lnameLabel.textContent = "Last name:";
    lnameLabel.style.color = "black";
    lnameInput.style.color = "green";
    lnameInput.style.borderColor = "green";
    }
 });
});

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailLabel = document.getElementById("emaillbl");
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        emailLabel.innerHTML = "Email:";
        emailLabel.style.color = "black";
        emailInput.style.borderColor = "green";
    } else {
        emailLabel.innerHTML = "Incorrect Email Format!";
        emailLabel.style.color = "red";
        emailInput.style.borderColor = "red";
    }
}

function validateForm() {
    var fname = document.getElementById('fname').value;
    var midint = document.getElementById('midint').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    // Check if any of the fields are empty
    if (fname === '' || midint === '' || lname === '' || email === "" ) {
        alert('Please fill in all fields');
        return false;
    }
    

    // Check if email is in correct format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address');
        return false;
    }
    else{
        alert("Success!")
        return true;
    }

    return true;
}