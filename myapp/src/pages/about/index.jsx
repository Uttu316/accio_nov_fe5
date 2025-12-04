import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <Header title="About" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
            Learn more about our mission, vision, and the team behind MyApp.
          </p>
        </section>
        <section className={styles.content}>
          <div className={styles.mission}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p>
              At MyApp, our mission is to provide innovative solutions that
              empower individuals and businesses to achieve their goals. We
              strive to create products that are not only functional but also
              user-friendly and accessible to everyone.
            </p>
          </div>
          <div className={styles.vision}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p>
              We envision a world where technology seamlessly integrates into
              daily life, making complex tasks simple and enjoyable. Our vision
              is to be at the forefront of technological innovation, driving
              positive change in the industry.
            </p>
          </div>
          <div className={styles.team}>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.avatar}></div>
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.avatar}></div>
                <h3>Jane Smith</h3>
                <p>CTO</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.avatar}></div>
                <h3>Bob Johnson</h3>
                <p>Lead Developer</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer companyName="Accio" />
    </div>
  );
};

export default AboutPage;
