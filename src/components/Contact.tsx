import { useState, type FormEvent } from "react";
import { company } from "../data";
import Icon from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (!message || message.length < 10)
      next.message = "Tell us a little more (at least 10 characters).";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const org = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    // No backend configured → open the visitor's email client (still a real send).
    if (!company.formEndpoint) {
      const subject = `Project enquiry from ${name}${org ? ` (${org})` : ""}`;
      const body = `Name: ${name}\nEmail: ${email}\nCompany: ${org}\n\n${message}`;
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(company.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company: org, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section contact on-dark" id="contact">
      <div className="contact__texture" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="contact__intro">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something that works.</h2>
          <p>
            Tell us what you're trying to solve using the form. We'll reply within one business day
            with honest thoughts on scope, timeline, and whether we're the right fit.
          </p>
        </div>

        <div className="contact__form-wrap">
          {status === "success" ? (
            <div className="contact__success" role="status">
              <div className="contact__success-icon">
                <Icon name="check" />
              </div>
              <h3>Thanks — message sent.</h3>
              <p>We'll be in touch shortly at the email you provided.</p>
              <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Cooper" />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="jane@company.com" />
                {errors.email && <span className="field__error">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="company">
                  Company <span className="field__opt">(optional)</span>
                </label>
                <input id="company" name="company" type="text" placeholder="Acme Inc." />
              </div>

              <div className="field">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe what you're trying to build or improve…"
                />
                {errors.message && <span className="field__error">{errors.message}</span>}
              </div>

              {status === "error" && (
                <p className="contact__formerror" role="alert">
                  Something went wrong sending your message. Please try again in a moment.
                </p>
              )}

              <button className="btn btn-primary contact__submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
                {status !== "submitting" && <Icon name="arrow" className="btn__icon" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
