import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CarCard from "./CarCard";


const BrandCar = () => {
  const {brand} = useParams()
  const allCars = useLoaderData()

  const [currentBrandCars, setCurrentBrandCars] = useState(null)

  useEffect(()=>{
    const brandCars = allCars.filter(car => car.brand === brand)
    setCurrentBrandCars(brandCars)
  },[brand, allCars])

  return (
    <div className="my-10">
      <h2 className="text-4xl font-semibold text-center mb-10">All the available cars from {brand}.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
          currentBrandCars?.length ? currentBrandCars?.map(car => <CarCard key={car._id} car={car}></CarCard>) : <h2 className="text-6xl font-bold flex justify-center items-center col-span-2">There isn&#39;t any data of the brand.</h2>
        }
      </div>
    </div>
  );
};

export default BrandCar;