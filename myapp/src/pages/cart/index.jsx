import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import PrageWrapper from "../../components/pageWrapper";
import styles from "./index.module.css";

const CartPage = () => {
  const { cart, removeFromCart, isCartEmpty } = useContext(CartContext);

  return (
    <PrageWrapper title="Cart">
      <div className={styles.cartContainer}>
        <h2>Your Cart</h2>
        {isCartEmpty ? (
          <p className={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </PrageWrapper>
  );
};

export default CartPage;
