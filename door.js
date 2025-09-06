function toggleForm(id) {
    const form = document.getElementById(id);
    const otherForm = id === "signupForm" ? document.getElementById("loginForm") : document.getElementById("signupForm");

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
        otherForm.style.display = "none";
    }
}

function submitOrder(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const address = form.address.value.trim();
    const mobile = form.mobile.value.trim();
    const quantity = form.quantity.value.trim();

    if (!name || !address || !mobile || !quantity) {
        alert("Please fill all the fields.");
        return;
    }

    alert(`Order submitted!\nName: ${name}\nAddress: ${address}\nMobile: ${mobile}\nQuantity: ${quantity}`);
    form.reset();
}

function submitSignup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!name || !email || !password) {
        alert("Please fill all signup fields.");
        return;
    }

    alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);
    // You can add actual signup logic here (like sending data to server)
    toggleForm("signupForm");
}

function submitLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Please fill all login fields.");
        return;
    }

    alert(`Login successful!\nEmail: ${email}`);
    // You can add actual login logic here
    toggleForm("loginForm");
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // ये पेज रीलोड होने से रोकेगा
    alert('Form submitted successfully!');
    this.reset();  // फॉर्म के सारे फील्ड्स क्लियर कर देगा
});
