import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header title="MyApp" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to MyApp</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing products and services tailored just for you.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </section>
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Quality Products</h3>
              <p>We offer top-notch products that meet your needs.</p>
            </div>
            <div className={styles.feature}>
              <h3>Excellent Service</h3>
              <p>
                Our team is dedicated to providing exceptional customer service.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Innovative Solutions</h3>
              <p>Stay ahead with our cutting-edge technology and solutions.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer companyName="Accio" />
    </div>
  );
};

export default HomePage;
