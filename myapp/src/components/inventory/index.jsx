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

  const [selected, setSelected] = useState(null);

  const onSubmit = () => {
    //add product details in begining of the state array
    setProducts((curr) => [
      {
        ...productDetails,
        created_at: Date.now(),
        id: parseInt(Math.random() * 100000),
      },
      ...curr,
    ]);
  };
  const onUpdate = () => {
    // update product details in the state array on selected index
    setProducts((curr) => {
      curr[selected.index] = { ...selected, ...productDetails };
      return curr;
    });
    setSelected(null);
  };

  return (
    <div className={styles.inventoryContainer}>
      <h2 className={styles.heading}>Inventory management</h2>
      <InventoryForm
        setProductDetails={setProductDetails}
        productDetails={productDetails}
        onSubmit={onSubmit}
        selected={selected}
        onUpdate={onUpdate}
      />
      <InventoryList
        productsList={productsList}
        setProducts={setProducts}
        setSelected={setSelected}
        setProductDetails={setProductDetails}
        selected={selected}
      />
    </div>
  );
};
export default Inventory;
