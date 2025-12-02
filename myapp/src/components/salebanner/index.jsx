import { useState } from "react";
import Banner from "./banner";

const SaleBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSale = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {!isOpen && <button onClick={toggleSale}>Open sale</button>}
      {isOpen && <button onClick={toggleSale}>Close sale</button>}

      {isOpen && <Banner />}
    </div>
  );
};
export default SaleBanner;
