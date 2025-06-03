document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    console.log("Signup Data:", { fullName, email, password, confirmPassword });

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing signups or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem("userSignups")) || [];
    console.log(existingUsers);
    
    // Add new user
    const newUser = { fullName, email, password };
    existingUsers.push(newUser);

    // Save back to localStorage
    localStorage.setItem("userSignups", JSON.stringify(existingUsers));

    alert("Signup successful!");
    this.reset(); // Clear the form
  });
});
