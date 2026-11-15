import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/api.js";
import "../Styles/Account.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await loginUser({ email, password });
      setMessage("Login successful.");
    } catch {
      setMessage("Could not connect to the server. Please try again later.");
    }

    setLoading(false);
  }

  return (
    <main className="account-page">
      <section className="account-card">
        <p className="account-eyebrow">Kicks With Style</p>
        <h1>Welcome back.</h1>
        <p className="account-description">
          Log in to get back to the latest drops and sneaker stories.
        </p>

        <form className="account-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="At least 8 characters"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="account-submit" type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Log in"}
          </button>

          <p className="account-message">{message}</p>
        </form>

        <p className="account-switch">
          New around here? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
