import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../Styles/InfoPages.css";
import "../Styles/Contact.css";

const TOPICS = [
  { value: "order", label: "Order question" },
  { value: "sizing", label: "Sizing help" },
  { value: "request", label: "Sneaker request" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

const MESSAGE_MAX = 500;

const emptyForm = {
  name: "",
  email: "",
  topic: "",
  orderNumber: "",
  message: "",
  sendCopy: false,
};

// fill the form if the user came from a sneaker page
function getStartValues(params) {
  const topic = params.get("topic") || "";
  const sneaker = params.get("sneaker");
  const size = params.get("size");
  let message = "";

  if (sneaker && topic === "request") {
    message = "Hi! Please let me know when the " + sneaker + " drops.";
  } else if (sneaker && size) {
    message = "Hi! I'm interested in the " + sneaker + " in US size " + size + ". How does it fit?";
  } else if (sneaker) {
    message = "Hi! I have a question about the " + sneaker + ".";
  }

  return { ...emptyForm, topic: topic, message: message };
}

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.includes("@") || !values.email.includes(".")) {
    errors.email = "Please enter a valid email, like you@example.com.";
  }

  if (values.topic === "") {
    errors.topic = "Please choose a topic.";
  }

  if (values.topic === "order" && !values.orderNumber.toUpperCase().startsWith("KWS-")) {
    errors.orderNumber = "Order numbers look like KWS-1234.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Tell us a little more (at least 10 characters).";
  } else if (values.message.length > MESSAGE_MAX) {
    errors.message = "Please keep it under " + MESSAGE_MAX + " characters.";
  }

  return errors;
}

function Contact() {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState(getStartValues(searchParams));
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);

    // no backend yet, so just show the success message
    if (Object.keys(newErrors).length === 0) {
      setSent(true);
    }
  }

  function handleReset() {
    setValues(emptyForm);
    setErrors({});
    setSent(false);
  }

  return (
    <main className="info-page contact-page">
      <section className="contact-content">
        <div className="contact-intro">
          <p className="info-page-eyebrow">Get in touch</p>
          <h1>Talk sneakers with us.</h1>
          <p className="info-page-description">
            Questions about an order, help finding your size, or a pair you
            can&apos;t track down? Drop us a message and we&apos;ll get back to you.
          </p>

          <ul className="contact-details">
            <li>
              <span>Email</span>
              support@kickswithstyle.com
            </li>
            <li>
              <span>Response time</span>
              Within 24 hours
            </li>
            <li>
              <span>Hours</span>
              Mon - Sat, 9am - 7pm
            </li>
          </ul>
        </div>

        <div className="contact-card">
          {sent ? (
            <div className="contact-success">
              <span className="contact-success-mark">✓</span>
              <h2>Got it, {values.name.split(" ")[0]}.</h2>
              <p>
                Your message is in. We&apos;ll reply to <strong>{values.email}</strong> within
                24 hours.
                {values.sendCopy && " A copy is on its way to your inbox."}
              </p>
              <div className="info-page-actions">
                <button className="info-page-link" type="button" onClick={handleReset}>
                  Send another
                </button>
                <Link className="info-page-link info-page-link-secondary" to="/in-stock">
                  Keep browsing
                </Link>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    className={errors.name ? "input-error" : ""}
                    value={values.name}
                    onChange={handleChange}
                  />
                  <p className="contact-error">{errors.name}</p>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={errors.email ? "input-error" : ""}
                    value={values.email}
                    onChange={handleChange}
                  />
                  <p className="contact-error">{errors.email}</p>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-topic">Topic</label>
                <select
                  id="contact-topic"
                  name="topic"
                  className={
                    (values.topic === "" ? "contact-select-empty " : "") +
                    (errors.topic ? "input-error" : "")
                  }
                  value={values.topic}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  {TOPICS.map((topic) => (
                    <option key={topic.value} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
                <p className="contact-error">{errors.topic}</p>
              </div>

              {values.topic === "order" && (
                <div className="contact-field">
                  <label htmlFor="contact-order">Order number</label>
                  <input
                    id="contact-order"
                    name="orderNumber"
                    placeholder="KWS-1234"
                    className={errors.orderNumber ? "input-error" : ""}
                    value={values.orderNumber}
                    onChange={handleChange}
                  />
                  <p className="contact-error">{errors.orderNumber}</p>
                </div>
              )}

              <div className="contact-field">
                <div className="contact-label-row">
                  <label htmlFor="contact-message">Message</label>
                  <span
                    className={
                      values.message.length > MESSAGE_MAX
                        ? "contact-counter contact-counter-over"
                        : "contact-counter"
                    }
                  >
                    {values.message.length} / {MESSAGE_MAX}
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="How can we help?"
                  className={errors.message ? "input-error" : ""}
                  value={values.message}
                  onChange={handleChange}
                />
                <p className="contact-error">{errors.message}</p>
              </div>

              <label className="contact-checkbox">
                <input
                  type="checkbox"
                  name="sendCopy"
                  checked={values.sendCopy}
                  onChange={handleChange}
                />
                <span>Send me a copy of this message</span>
              </label>

              <button className="contact-submit" type="submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
