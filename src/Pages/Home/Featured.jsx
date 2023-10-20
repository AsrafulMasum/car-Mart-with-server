import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Featured = () => {
  const [brandCars, setBrandCars] = useState([]);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrandCars(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-4xl text-center font-semibold text-[#A55C30]">Search Your Dream Car</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {
          brandCars?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
        }
      </div>
    </div>
  );
};

export default Featured;
