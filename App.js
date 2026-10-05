alert("yay");
if (error) {
    errorMsg.innerText = error.message;
    errorMsg.style.display = 'block';
} else {
    alert('Login successful!');
    
    // Redirect them back to your homepage
    window.location.href = 'index.html'; 
}
