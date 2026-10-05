// 1. Correctly pull createClient out of the global supabase object
const { createClient } = supabase;

const SUPABASE_URL = 'https://whrslkfvubmqzzwotncs.supabase.co';
const SUPABASE_KEY = 'sb_publishable_eOO7o5ahzkX-wF3mh94ZvA_nV2-AEOf';

// 2. Initialize the client using the extracted function
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// 3. This will now fire properly!
alert("Yay! app.js is linked and running!");

// 4. Grab the visual elements from your login.html page
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit-btn');

// 5. Wait for the user to click the "Log In" button
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents page refresh
    
    submitBtn.innerText = 'Logging in...';
    submitBtn.disabled = true;
    errorMsg.style.display = 'none';

    // 6. Request verification from Supabase using the client instance
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailInput.value,
        password: passwordInput.value,
    });

    // 7. Handle the outcome
    if (error) {
        errorMsg.innerText = error.message;
        errorMsg.style.display = 'block';
    } else {
        alert('Login successful!');
        window.location.href = 'index.html'; 
    }

    submitBtn.innerText = 'Log In';
    submitBtn.disabled = false;
});
