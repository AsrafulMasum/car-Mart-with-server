import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CarDetails = () => {
  const car = useLoaderData();

  const handleAddToCart = () => {
    toast.success("Added to your cart.")
    fetch("https://assignment10-rho.vercel.app/cart", {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(car)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-10">
        <img
          className="object-cover w-full h-96"
          src={car?.photoURL}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {car?.category}
            </span>
            <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white">
              {car?.brand} {car?.model}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {car?.description}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="mx-1 text-lg text-gray-600 dark:text-gray-300">
                $ {car?.price}
              </span>
              <button onClick={handleAddToCart} className="btn">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
