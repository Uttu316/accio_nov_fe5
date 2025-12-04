import { useCallback } from "react";
import styles from "./productitem.module.css";
import { useNavigate } from "react-router";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { title, category, price, rating, id, description, image } = product;

  // Generate star rating display
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

  const onProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div onClick={onProductClick} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price}</p>
        <div className={styles.rating}>
          <span className={styles.stars}>{renderStars(rating.rate)}</span>
          <span className={styles.reviews}>({rating.count} reviews)</span>
        </div>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
