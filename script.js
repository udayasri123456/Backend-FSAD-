async function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if(!username || !password) {
      alert("Please fill in all fields!");
      return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role })
    });

    if (response.ok) {
      alert("Welcome back " + username + "!");
      window.location.href = "dashboard.html";
    } else {
      const errorData = await response.json().catch(() => ({}));
      alert("Login failed: " + (errorData.message || "Invalid credentials"));
    }
  } catch (error) {
    alert("Error connecting to backend: " + error.message + ". Is the server running?");
  }
}

async function handleRegister() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const confirmPwd = document.getElementById("reg-confirm").value;
  const role = document.getElementById("reg-role").value;

  if(!username || !password || !confirmPwd) {
      alert("Please fill in all fields!");
      return;
  }

  if(password !== confirmPwd) {
      alert("Passwords do not match!");
      return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role })
    });

    if (response.ok) {
      alert("Registration successful! You can now log in.");
      window.location.href = "index.html";
    } else {
      const errorData = await response.json().catch(() => ({}));
      alert("Registration failed! Username might already be taken.");
    }
  } catch (error) {
    alert("Error connecting to backend: " + error.message);
  }
}

async function bookSession() {
  const datePrompt = prompt("Enter booking date (e.g. YYYY-MM-DD):");
  if (!datePrompt) return;
  const timePrompt = prompt("Enter booking time (e.g. 14:00):");
  if (!timePrompt) return;

  try {
    const response = await fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: datePrompt, time: timePrompt })
    });

    if (response.ok) {
      alert("✅ Booking Confirmed for " + datePrompt + " at " + timePrompt);
    } else {
      const errorData = await response.json().catch(() => ({}));
      alert("Booking failed: " + (errorData.message || "Invalid details"));
    }
  } catch (error) {
    alert("Error connecting to backend: " + error.message);
  }
}

function showResources() {
  const output = document.getElementById("output");
  output.style.display = "block";
  output.innerHTML = "<h2 style='color:#6366f1; margin-bottom:15px;'>Mindfulness Tips</h2><ul style='line-height:2; list-style-position: inside;'><li>🌿 Take 5 deep breaths, focusing purely on your inhaling and exhaling.</li><li>🚶‍♂️ Go for a 10-minute walk outside without your phone.</li><li>✍️ Journal three things you are grateful for today.</li><li>💧 Drink a glass of water to hydrate your body.</li></ul>";
}

function openForum() {
  const output = document.getElementById("output");
  output.style.display = "block";
  output.innerHTML = "<h2 style='color:#a855f7; margin-bottom:15px;'>Community Forum</h2><p>Our secure peer discussion rooms are currently loading... Please check back later to connect with the community!</p>";
}