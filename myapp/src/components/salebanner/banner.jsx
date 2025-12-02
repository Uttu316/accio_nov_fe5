import { useEffect, useState } from "react";

const Banner = () => {
  const [discout, updateDiscount] = useState(50);

  useEffect(() => {
    //setup function
    console.log("Banner component mounted");

    return () => {
      //cleanup function

      console.log("Banner component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(`Discount updated to ${discout}%`);
  }, [discout]);

  return (
    <div>
      <h2>Big Sale! Up to {discout}% off on selected items!</h2>

      <button onClick={() => updateDiscount(discout + 10)}>
        Set Discount to 10%
      </button>
    </div>
  );
};
export default Banner;
