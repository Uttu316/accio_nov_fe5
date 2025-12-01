import { useState } from "react";
import InventoryForm from "./inventoryForm";

const Inventory = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    desc: "",
    quantity: "",
    price: "",
  });

  console.log(productDetails);

  return (
    <div>
      <InventoryForm
        setProductDetails={setProductDetails}
        productDetails={productDetails}
      />
    </div>
  );
};
export default Inventory;
