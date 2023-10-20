import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartItemCard = ({ car, handleCartItem }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://assignment10-rho.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        handleCartItem(id);
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="md:w-1/3">
          <img src={car?.photoURL} alt="" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {car?.brand} {car?.model}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {car?.category}
          </p>

          <div className="flex flex-col md:flex-row justify-between mt-3 item-center">
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
  handleCartItem: PropTypes.func,
};
