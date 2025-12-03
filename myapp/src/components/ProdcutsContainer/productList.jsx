import { useMemo, useState, memo } from "react";
import Filter from "./Filter";
import ProductItem from "./productitem";
import styles from "./productList.module.css";

const ProductList = ({ products }) => {
  console.log("Product List rendered");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const isEmpty = products.length === 0;

  const visibleProducts = useMemo(() => {
    console.log("Product List filtering");
    return selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className={styles.list}>
        {isEmpty && <div className={styles.empty}>No products available.</div>}

        {!isEmpty &&
          visibleProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default memo(ProductList);
