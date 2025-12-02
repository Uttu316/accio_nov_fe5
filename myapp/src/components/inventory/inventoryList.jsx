import styles from "./inventory.module.css";
import InventoryItem from "./inventoryItem";

const InventoryList = ({
  productsList,
  setProductDetails,
  setSelected,
  setProducts,
  selected,
}) => {
  const isEmpty = productsList.length === 0;

  const onDelete = (id) => {
    setProducts((curr) => curr.filter((item) => item.id !== id));
  };
  const onEdit = (prodcutDetails, index) => {
    setSelected({ ...prodcutDetails, index });
    setProductDetails({ ...prodcutDetails }); // setting information for form
  };
  return (
    <div className={styles.productListContainer}>
      {isEmpty && <h2 className={styles.noProduct}>No Product Available</h2>}
      {!isEmpty && (
        <div className={styles.productsList}>
          {productsList.map((item, index) => (
            <InventoryItem
              productDetails={item}
              key={item.id}
              onDelete={onDelete}
              onEdit={onEdit}
              index={index}
              selected={selected}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default InventoryList;
