import styles from "./inventory.module.css";
const validateForm = (productDetails) => {
  return (
    productDetails.name.length > 3 &&
    productDetails.desc.length > 20 &&
    productDetails.price &&
    productDetails.quantity
  );
};

const InventoryForm = ({ productDetails, onSubmit, setProductDetails }) => {
  const isValidated = validateForm(productDetails);
  const onInput = (e) => {
    const label = e.target.name;
    const value = e.target.value;

    setProductDetails((curr) => ({ ...curr, [label]: value }));
  };

  const resetForm = () => {
    setProductDetails({
      name: "",
      desc: "",
      price: "",
      quantity: "",
    });
  };
  const onAddProduct = () => {
    if (isValidated) {
      onSubmit();
      resetForm();
    } else {
      // show error to complete the form
    }
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
        <button
          disabled={!isValidated}
          onClick={onAddProduct}
          className={styles.addProductBtn}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};
export default InventoryForm;
