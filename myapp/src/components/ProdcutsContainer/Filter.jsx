import styles from "./Filter.module.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
];

const Filter = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.filterContainer}>
      {FILTERS.map((item, index) => (
        <FilterItem
          key={index}
          label={item.label}
          value={item.value}
          onFilter={setSelectedCategory}
          selected={selectedCategory}
        />
      ))}
    </div>
  );
};

const FilterItem = ({ label, onFilter, value, selected }) => {
  const isActive = selected === value;
  return (
    <button
      onClick={() => onFilter(value)}
      className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
    >
      {label}
    </button>
  );
};
export default Filter;
