import styles from "./inventory.module.css";

const InventoryForm = ({ productDetails, setProductDetails }) => {
  const onInput = (e) => {
    const label = e.target.name;
    const value = e.target.value;

    setProductDetails((curr) => ({ ...curr, [label]: value }));
  };
  return (
    <div className={styles.inventoryFormContainer}>
      <div className={styles.inventoryForm}>
        <div className={`${styles.inputBox} ${styles.nameInput}`}>
          <label>Product Name</label>
          <input
            name="name"
            value={productDetails.name}
            onChange={onInput}
            placeholder="Enter product name"
          />
        </div>
        <div className={`${styles.inputBox} ${styles.priceInput}`}>
          <label>Product Price</label>
          <input
            value={productDetails.price}
            placeholder="Enter product price"
            type="number"
            min={0}
            onChange={onInput}
            name="price"
          />
        </div>
        <div className={`${styles.inputBox} ${styles.quantityInput}`}>
          <label>Product Quantity</label>
          <input
            placeholder="Enter product quantity"
            type="number"
            value={productDetails.quantity}
            min={0}
            onChange={onInput}
            max={1000}
            name="quantity"
          />
        </div>
        <div className={`${styles.inputBox} ${styles.descInput}`}>
          <label>Product Description</label>
          <textarea
            value={productDetails.desc}
            name="desc"
            onChange={onInput}
            placeholder="Enter product description here..."
          ></textarea>
        </div>
      </div>
      <div className={styles.inventoryFormActions}>
        <button className={styles.addProductBtn}>Add Product</button>
      </div>
    </div>
  );
};
export default InventoryForm;
