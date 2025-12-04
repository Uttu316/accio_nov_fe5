import { useCallback, useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";
import { useParams } from "react-router";
import { api } from "../../services";

const ProductPage = () => {
  const { productId } = useParams(); // extract dynmaic parameter from url

  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  const getProduct = useCallback(async () => {
    try {
      const data = await api({
        endpoint: "/products/" + productId,
      });
      if (data) {
        setProduct(data);
        setStatus("success");
        return;
      }
      setStatus("error");
    } catch (err) {
      console.log("Error fetching product:", err);
      setStatus("error");
      return;
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const renderStars = useCallback((rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (hasHalfStar) {
      stars.push("☆");
    }
    while (stars.length < 5) {
      stars.push("☆");
    }
    return stars.join("");
  }, []);

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className={styles.page}>
      <Header title="Product Details" />
      <div className={styles.productContainer}>
        {isLoading && <div className={styles.loading}>Loading product...</div>}
        {isError && (
          <div className={styles.error}>
            Unable to fetch product. Please try again later.
          </div>
        )}
        {isSuccess && product && (
          <>
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.price}>${product.price}</p>
              <div className={styles.rating}>
                <span className={styles.stars}>
                  {renderStars(product.rating.rate)}
                </span>
                <span className={styles.reviews}>
                  ({product.rating.count} reviews)
                </span>
              </div>
              <p className={styles.description}>{product.description}</p>
              <button className={styles.button} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
      <Footer companyName="AccioJob" />
    </div>
  );
};

export default ProductPage;
