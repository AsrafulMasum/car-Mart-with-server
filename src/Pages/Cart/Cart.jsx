import { useLoaderData } from "react-router-dom";
import CartItemCard from "./CartItemCard";

const Cart = () => {

  const cartItem = useLoaderData()

  return (
    <div className="my-10">
      
      <h2></h2>

      <div className="grid grid-cols-1 gap-4">
        {
          cartItem?.map(car => <CartItemCard key={car?._id} car={car}></CartItemCard>)
        }
      </div>

    </div>
  );
};

export default Cart;
