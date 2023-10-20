import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CarCard from "./CarCard";
import "./background.css";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BrandCar = () => {
  const { brand } = useParams();
  const allCars = useLoaderData();

  const [currentBrandCars, setCurrentBrandCars] = useState(null);

  useEffect(() => {
    const brandCars = allCars.filter((car) => car.brand === brand);
    setCurrentBrandCars(brandCars);
  }, [brand, allCars]);

  return (
    <div className="my-10">
      <h2 className="text-4xl font-semibold text-center mb-10">
        All the available cars from {brand}.
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <section className="h-[40vh] flex justify-center items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">get 20% off</h2>
            <h4 className="text-3xl">at winter sale</h4>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="h-[40vh] flex justify-center items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">get 30% off</h2>
        <h4 className="text-3xl">for end of year sale</h4>
      </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="h-[40vh] flex justify-center items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">get 40% off</h2>
        <h4 className="text-3xl">on sale on buy</h4>
      </section>
        </SwiperSlide>
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {currentBrandCars?.length ? (
          currentBrandCars?.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))
        ) : (
          <h2 className="text-6xl font-bold flex justify-center items-center col-span-2">
            There isn&#39;t any data of the brand.
          </h2>
        )}
      </div>
    </div>
  );
};

export default BrandCar;
