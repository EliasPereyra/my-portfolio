import "./styles.css"

function Contact() {
  return (
    <section id="contact">
      <div id="contact-container">
        <div id="contact-container__right-side">
          <h2>Would you like to work with me?</h2>
          <p>
            I'd like to hear your proposals and make an incredible work together
          </p>
        </div>
        <div id="contact-container__content">
          <form action="mailto:eliaspereyra_gomez@hotmail.com" method="POST">
            <label>Name</label>
            <input type="text" required />

            <label>Email</label>
            <input type="email" required />

            <label>Message</label>
            <textarea rows={3} required></textarea>
            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
