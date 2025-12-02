import styles from "./inventory.module.css";
import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";

const InventoryItem = ({
  productDetails,
  selected,
  onDelete,
  index,
  onEdit,
}) => {
  const { name, desc, price, quantity, created_at, id } = productDetails;
  const isSelected = selected && selected.id === id;
  return (
    <div
      className={`${styles.productItem} ${
        isSelected ? styles.selectedItem : ""
      }`}
    >
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
        <button
          className={styles.productEdit}
          disabled={selected}
          onClick={() => onEdit(productDetails, index)}
        >
          <EditIcon />
        </button>
        <button
          disabled={selected}
          className={styles.prodcutDlt}
          onClick={() => onDelete(id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default InventoryItem;
