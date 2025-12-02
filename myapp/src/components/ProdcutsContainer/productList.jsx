import ProductItem from "./productitem";
import styles from "./productList.module.css";

const ProductList = ({ products }) => {
  const isEmpty = products.length === 0;
  return (
    <div className={styles.list}>
      {isEmpty && <div className={styles.empty}>No products available.</div>}
      {!isEmpty &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
