// Static Database of Clients
// Maps Company ID to their assigned details and hidden dashboard URLs
const clientDatabase = {
  // Client 1: Legal Syndicate Advisory
  "LSA-2026": {
    password: "7Kx3mQ9pL2",
    dashboardUrl: "client-lsa.html" 
  },
  // Client 2: Gem Construction
  "GEM-2026": {
    password: "GEM2026X",
    dashboardUrl: "client-gem.html"
  },
  // Client 3: Demonstration Client
  "DEMO-CLIENT": {
    password: "demo",
    dashboardUrl: "client-demo.html"
  }
};

function loginClient() {
  const companyIdInput = document.getElementById('companyId').value.trim().toUpperCase();
  const passwordInput = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');
  const loginCard = document.getElementById('loginCard');

  // Reset errors and animations
  errorMsg.style.display = 'none';
  loginCard.classList.remove('shake');

  // Check if company exists in our database
  const clientData = clientDatabase[companyIdInput];

  if (clientData && clientData.password === passwordInput) {
    // Success: Change button text and redirect
    const btn = document.querySelector('button');
    btn.innerHTML = "Authenticating...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
      window.location.href = clientData.dashboardUrl;
    }, 600); // Slight delay for UX
  } else {
    // Fail: Show error and trigger shake animation
    errorMsg.style.display = 'block';
    
    // Trigger reflow to restart animation
    void loginCard.offsetWidth; 
    loginCard.classList.add('shake');
  }
}

// Allow pressing "Enter" in the password field to login
document.getElementById('password').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    loginClient();
  }
});
