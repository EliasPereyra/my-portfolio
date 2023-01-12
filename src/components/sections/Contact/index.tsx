import { t } from "i18next"

import "./styles.css"

function Contact() {
  return (
    <section id="contact">
      <div id="contact-container">
        <div id="contact-container__right-side">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.comment")}</p>
        </div>
        <div id="contact-container__content">
          <form action="mailto:eliaspereyra_gomez@hotmail.com" method="POST">
            <label>{t("contact.name")}</label>
            <input type="text" required />

            <label>{t("contact.email")}</label>
            <input type="email" required />

            <label>{t("contact.message")}</label>
            <textarea rows={3} required></textarea>
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
