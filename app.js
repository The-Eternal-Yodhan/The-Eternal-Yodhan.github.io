// 1. Connect your file to your specific Supabase project
const SUPABASE_URL = 'https://supabase.co';
const SUPABASE_KEY = 'sb_publishable_eOO7o5ahzkX-wF3mh94ZvA_nV2-AEOf';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 2. Safely check if the script is working when the page opens
alert("Yay! app.js is linked and running!");

// 3. Grab the visual elements from your login.html page
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit-btn');

// 4. Wait for the user to click the "Log In" button
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from refreshing automatically
    
    // Give the user visual feedback that it's loading
    submitBtn.innerText = 'Logging in...';
    submitBtn.disabled = true;
    errorMsg.style.display = 'none';

    // 5. Tell Supabase to verify this user's email and password
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput.value,
        password: passwordInput.value,
    });

    // 6. Handle the outcome of the login attempt
    if (error) {
        // If login failed, show the error text right on the screen
        errorMsg.innerText = error.message;
        errorMsg.style.display = 'block';
    } else {
        // If login worked, alert them and send them to the homepage
        alert('Login successful!');
        window.location.href = 'index.html'; 
    }

    // Reset the button back to normal
    submitBtn.innerText = 'Log In';
    submitBtn.disabled = false;
});
