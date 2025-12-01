import styles from "./inventory.module.css";
import InventoryItem from "./inventoryItem";

const InventoryList = ({ productsList }) => {
  const isEmpty = productsList.length === 0;
  return (
    <div className={styles.productListContainer}>
      {isEmpty && <h2 className={styles.noProduct}>No Product Available</h2>}
      {!isEmpty && (
        <div className={styles.productsList}>
          {productsList.map((item) => (
            <InventoryItem productDetails={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default InventoryList;
