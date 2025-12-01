import { useState } from "react";
import InventoryForm from "./inventoryForm";
import InventoryList from "./inventoryList";
import styles from "./inventory.module.css";
const Inventory = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    desc: "",
    quantity: "",
    price: "",
  });
  const [productsList, setProducts] = useState([]);

  const onSubmit = () => {
    setProducts((curr) => [
      {
        ...productDetails,
        created_at: Date.now(),
        id: parseInt(Math.random() * 100000),
      },
      ...curr,
    ]);
  };

  return (
    <div className={styles.inventoryContainer}>
      <InventoryForm
        setProductDetails={setProductDetails}
        productDetails={productDetails}
        onSubmit={onSubmit}
      />
      <InventoryList productsList={productsList} />
    </div>
  );
};
export default Inventory;
