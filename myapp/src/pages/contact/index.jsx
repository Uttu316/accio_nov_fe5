import styles from "./index.module.css";
import PrageWrapper from "../../components/pageWrapper";

const ContactPage = () => {
  return (
    <PrageWrapper title="Contact" className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We'd love to hear from you. Get in touch with our team.
          </p>
        </section>
        <section className={styles.contact}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>123 Main Street, City, State 12345</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>info@myapp.com</p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </PrageWrapper>
  );
};

export default ContactPage;
