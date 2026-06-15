import { useState, type FormEvent } from "react";
import { company } from "../data";
import { useC } from "../i18n/LocaleContext";
import Icon from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { contact } = useC();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) next.name = contact.errors.name;
    if (!email) next.email = contact.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = contact.errors.emailInvalid;
    if (!message || message.length < 10) next.message = contact.errors.message;

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields; humans never see them. Silently
    // pretend success so we don't tip off the bot, but send nothing.
    if (String(data.get("company_website") || "").trim() !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const org = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: company.formAccessKey,
          subject: `${contact.subject} ${name}${org ? ` (${org})` : ""}`,
          from_name: name,
          name,
          email,
          company: org,
          message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error("Request failed");
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
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.h2}</h2>
          <p>{contact.p}</p>
        </div>

        <div className="contact__form-wrap">
          {status === "success" ? (
            <div className="contact__success" role="status">
              <div className="contact__success-icon">
                <Icon name="check" />
              </div>
              <h3>{contact.success.title}</h3>
              <p>{contact.success.body}</p>
              <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                {contact.success.again}
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from users & assistive tech; bait for bots. */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              <div className="field">
                <label htmlFor="name">{contact.labels.name}</label>
                <input id="name" name="name" type="text" placeholder={contact.placeholders.name} />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">{contact.labels.email}</label>
                <input id="email" name="email" type="email" placeholder={contact.placeholders.email} />
                {errors.email && <span className="field__error">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="company">
                  {contact.labels.company} <span className="field__opt">{contact.labels.optional}</span>
                </label>
                <input id="company" name="company" type="text" placeholder={contact.placeholders.company} />
              </div>

              <div className="field">
                <label htmlFor="message">{contact.labels.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={contact.placeholders.message}
                />
                {errors.message && <span className="field__error">{errors.message}</span>}
              </div>

              {status === "error" && (
                <p className="contact__formerror" role="alert">
                  {contact.errors.submit}
                </p>
              )}

              <button className="btn btn-primary contact__submit" disabled={status === "submitting"}>
                {status === "submitting" ? contact.submit.sending : contact.submit.idle}
                {status !== "submitting" && <Icon name="arrow" className="btn__icon" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
