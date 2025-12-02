import { useEffect, useState } from "react";
import ProductList from "./productList";
import { api } from "../../services";
import styles from "./index.module.css";

const ProdcutsContainer = () => {
  const [stauts, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);

  const isLoading = stauts === "loading";
  const isSuccess = stauts === "success";
  const isError = stauts === "error";

  const getProducts = async () => {
    try {
      const data = await api();
      if (data) {
        setProducts(data);
        setStatus("success");
        return;
      }
      setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Products</h2>
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
