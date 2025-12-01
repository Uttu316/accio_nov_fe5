import styles from "./inventory.module.css";

const InventoryItem = ({ productDetails }) => {
  const { name, desc, price, quantity, created_at } = productDetails;
  return (
    <div className={styles.productItem}>
      <div className={styles.productTile}>
        <span className={styles.productname}>{name}</span>
        <span className={styles.productCreate}>{created_at}</span>
      </div>
      <div className={styles.prodcutDetails}>
        <p className={styles.productPrice}>{price} Rs.</p>
        <p className={styles.productQuantity}>Qty: {quantity}</p>
        <p className={styles.productdesc}> {desc}</p>
      </div>
      <div className={styles.productActions}>
        <button className={styles.productEdit}>Edit</button>
        <button className={styles.prodcutDlt}>Delete</button>
      </div>
    </div>
  );
};

export default InventoryItem;
