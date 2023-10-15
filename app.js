 const users = [
            { username: "user1", password: "password1" },
            { username: "user2", password: "password2" }
        ];
 function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    
    if (loginForm.style.display === "none") {
        // Show the login form and hide the registration form
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        // Show the registration form and hide the login form
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// Registration function
function register() {
    const regUsername = document.getElementById("reg-username").value;
    const regPassword = document.getElementById("reg-password").value;

    // Perform registration logic here (e.g., add the user to your database)
    
    // You can also add validation and registration code here

    alert("Registration successful!");
}

        // Check if a user is logged in (using session storage)
        function isLoggedIn() {
            return sessionStorage.getItem("loggedIn") === "true";
        }

        // Perform login
        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                sessionStorage.setItem("loggedIn", "true");
                showSecureContent();
            } else {
                alert("Invalid username or password.");
            }
        }

        // Perform logout
        function logout() {
            sessionStorage.removeItem("loggedIn");
            hideSecureContent();
        }

        // Display secure content when logged in
        function showSecureContent() {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("secure-content").style.display = "block";
        }

        // Hide secure content when logged out
        function hideSecureContent() {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("secure-content").style.display = "none";
        }

        // Main function to set up the page
        function init() {
            if (isLoggedIn()) {
                showSecureContent();
            } else {
                hideSecureContent();
            }
        }

        // Call the init function when the page loads
        window.onload = init;