import "./Login.css";

function Login({ setIsLogged }) {
  return (
    <div className="login-container">
      <h1>🌿 Mental Health Support Platform</h1>
      <h3>Student & Admin Login</h3>

      <input type="udayasri" placeholder="Username" />
      <input type="1234" placeholder="Password" />

      <select>
        <option>Student</option>
        <option>Admin</option>
      </select>

      <button onClick={() => setIsLogged(true)}>Login</button>
    </div>
  );
}

export default Login;