import { createContext, useState } from "react";

export const CartContext = createContext(); //step1

//step 2
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isCartEmpty = cart.length === 0;

  const cartSize = cart.length;

  const addToCart = (product) => {
    setCart([product, ...cart]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id != productId));
  };

  const isInCart = (productId) => {
    return cart.find((item) => item.id == productId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartEmpty,
        cartSize,
        addToCart,
        removeFromCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
