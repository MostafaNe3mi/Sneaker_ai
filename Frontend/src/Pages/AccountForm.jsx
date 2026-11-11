import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../services/api.js";
import "../Styles/Account.css";

function AccountForm({ mode }) {
  const isSignup = mode === "signup";
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
      if (isSignup) {
        await registerUser({ name, email, password });
        setMessage("Account created.");
      } else {
        await loginUser({ email, password });
        setMessage("Login successful.");
      }
    } catch {
      setMessage("Could not connect to the server. Please try again later.");
    }

    setLoading(false);
  }

  return (
    <main className="account-page">
      <section className="account-card">
        <p className="account-eyebrow">Kicks With Style</p>
        <h1>{isSignup ? "Join the club." : "Welcome back."}</h1>
        <p className="account-description">
          {isSignup
            ? "Create an account to stay close to the latest drops and sneaker stories."
            : "Log in to get back to the latest drops and sneaker stories."}
        </p>

        <form className="account-form" onSubmit={handleSubmit}>
          {isSignup && (
            <label>
              Name
              <input
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
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
            {loading ? "Please wait..." : isSignup ? "Create account" : "Log in"}
          </button>
          <p className="account-message">{message}</p>
        </form>

        <p className="account-switch">
          {isSignup ? "Already a member?" : "New around here?"}{" "}
          <Link to={isSignup ? "/login" : "/signup"}>
            {isSignup ? "Log in" : "Sign up"}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default AccountForm;
