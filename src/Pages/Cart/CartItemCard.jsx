import PropTypes from "prop-types";

const CartItemCard = ({ car }) => {

  const handleDelete = (id) => {
    fetch(`https://assignment10-htbz3t628-masums-projects-7aa1af27.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="w-1/3">
          <img src={car?.photoURL} alt="" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {car?.brand} {car?.model}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {car?.category}
          </p>

          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              $ {car?.price}
            </h1>
            <button onClick={() => handleDelete(car?._id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

CartItemCard.propTypes = {
  car: PropTypes.object,
};
