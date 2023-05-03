import { t } from "i18next"

import "./styles.css"

function Contact() {
  return (
    <section id="contact">
      <div id="noise"></div>
      <div id="contact-container">
        <div id="underlay"></div>
        <div id="contact-container__right-side" className="animate">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.comment")}</p>
        </div>
        <div id="contact-container__content" className="animate">
          <form method="POST">
            <label htmlFor="username">{t("contact.name")}</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              minLength="5"
              maxLength="35"
              required
            />

            <label htmlFor="email">{t("contact.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <label htmlFor="message">{t("contact.message")}</label>
            <textarea id="message" name="message" rows={3} required></textarea>
            <button type="submit" value="send">
              {t("contact.send-button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
