import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/api.js";
import "../Styles/Account.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await registerUser({ name, email, password });
      setMessage("Account created.");
    } catch {
      setMessage("Could not connect to the server. Please try again later.");
    }

    setLoading(false);
  }

  return (
    <main className="account-page">
      <section className="account-card">
        <p className="account-eyebrow">Kicks With Style</p>
        <h1>Join the club.</h1>
        <p className="account-description">
          Create an account to stay close to the latest drops and sneaker stories.
        </p>

        <form className="account-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

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
            {loading ? "Please wait..." : "Create account"}
          </button>

          <p className="account-message">{message}</p>
        </form>

        <p className="account-switch">
          Already a member? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;
