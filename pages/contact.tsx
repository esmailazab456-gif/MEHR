const ContactPage = () => (
  <section>
    <h1 className="section-title">Contact</h1>
    <p>
      Reach out to learn more about MEHR partnerships, pilots, or institutional
      onboarding.
    </p>
    <form className="form">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
        />
      </div>
      <button type="button">Send Message</button>
    </form>
  </section>
);

export default ContactPage;
