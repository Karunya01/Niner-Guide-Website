var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var cancelButton = modal.querySelector(".cancelbtn");
var signupButton = modal.querySelector(".signupbtn");

function openModal() {
    modal.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("modal-open");
}

btn.onclick = function() {
    openModal();
}

span.onclick = function() {
    closeModal();
}

cancelButton.onclick = function() {
    closeModal();
}

signupButton.onclick = function() {
    var email = modal.querySelector('input[name="email"]').value;
    console.log("Email entered:", email);
    alert("You have successfully signed up with the email: " + email);
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}