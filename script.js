function checkCode() {
    const enteredCode = document.getElementById("accessCode").value;
    const secretHash = btoa("SHOBHIT2025"); // Encoded secret

    if (btoa(enteredCode) === secretHash) {
        localStorage.setItem("accessGranted", "true");
        window.location.href = "courses.html";
    } else {
        document.getElementById("message").textContent = "Incorrect code. Please try again.";
    }
}

function verifyAccess() {
    if (localStorage.getItem("accessGranted") !== "true") {
        alert("Access denied! Please enter the secret code first.");
        window.location.href = "login.html";
    }
}
