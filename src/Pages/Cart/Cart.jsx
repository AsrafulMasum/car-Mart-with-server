import { useLoaderData } from "react-router-dom";
import CartItemCard from "./CartItemCard";
import { useState } from "react";

const Cart = () => {

  const cartItem = useLoaderData()

  const [totalCar, setTotalCar] = useState(cartItem)

  const handleCartItem = (id) => {
    const remaining = totalCar.filter(car => car._id !== id)
    setTotalCar(remaining);
  }

  return (
    <div className="my-10">
      
      <h2></h2>

      <div className="grid grid-cols-1 gap-4">
        {
          totalCar?.map(car => <CartItemCard key={car?._id} car={car} handleCartItem={handleCartItem}></CartItemCard>)
        }
      </div>

    </div>
  );
};

export default Cart;
