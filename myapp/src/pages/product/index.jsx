import { useCallback, useContext, useEffect, useState } from "react";

import styles from "./index.module.css";
import { useParams } from "react-router";
import { api } from "../../services";
import PrageWrapper from "../../components/pageWrapper";
import { CartContext } from "../../contexts/CartContext";

const ProductPage = () => {
  const { productId } = useParams(); // extract dynmaic parameter from url

  const { addToCart, isInCart, removeFromCart } = useContext(CartContext);

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

  const incart = isInCart(productId);

  const onRemoveCart = () => {
    removeFromCart(productId);
  };
  const onAddCart = () => {
    addToCart(product);
  };

  return (
    <PrageWrapper title="Product Details" className={styles.page}>
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
              {!incart && (
                <button className={styles.button} onClick={onAddCart}>
                  Add to Cart
                </button>
              )}
              {incart && (
                <button
                  className={styles.removeCartbutton}
                  onClick={onRemoveCart}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </PrageWrapper>
  );
};

export default ProductPage;
