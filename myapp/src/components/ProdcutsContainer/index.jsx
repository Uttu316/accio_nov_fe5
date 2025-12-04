import { useCallback, useEffect, useState } from "react";
import ProductList from "./productList";
import Filter from "./Filter";
import { api } from "../../services";
import styles from "./index.module.css";

const ProdcutsContainer = () => {
  console.log("Products Container rendered");
  const [stauts, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const isLoading = stauts === "loading";
  const isSuccess = stauts === "success";
  const isError = stauts === "error";

  const getProducts = useCallback(async () => {
    try {
      const data = await api({
        endpoint: "/products",
      });
      if (data) {
        setProducts(data);
        setStatus("success");
        return;
      }
      setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Products</h2>
      <button onClick={() => setCount(count + 1)}>Update x {count}</button>
      {isLoading && <div className={styles.loading}>Loading products...</div>}
      {isError && (
        <div className={styles.error}>
          Unable to fetch products. Please try again later.
        </div>
      )}
      {isSuccess && <ProductList products={products} />}
    </div>
  );
};
export default ProdcutsContainer;
