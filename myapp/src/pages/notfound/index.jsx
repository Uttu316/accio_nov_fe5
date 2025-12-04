import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";
import { Link } from "react-router";
import notfoundImg from "../../assets/notfound.svg";
import PrageWrapper from "../../components/pageWrapper";

const NotFoundPage = () => {
  return (
    <PrageWrapper title="My App" className={styles.page}>
      <main className={styles.main}>
        <section className={styles.notFoundSection}>
          <div className={styles.notFoundContent}>
            <img
              src={notfoundImg}
              alt="Not Found Illustration"
              className={styles.notFoundImage}
            />
            <h1 className={styles.notFoundTitle}>Oops! Page Not Found</h1>
            <p className={styles.notFoundText}>
              It looks like the page you're looking for doesn't exist. Don't
              worry, it happens to the best of us! You can go back to the home
              page or explore our amazing products.
            </p>
            <div className={styles.buttonContainer}>
              <Link to="/" className={styles.homeButton}>
                Go to Home
              </Link>
              <Link to="/products" className={styles.exploreButton}>
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PrageWrapper>
  );
};

export default NotFoundPage;
