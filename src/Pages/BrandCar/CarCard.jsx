import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

const CarCard = ({ car }) => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
          <img src={car?.photoURL} alt="" />
        </div>

        <div className="w-56 -mt-20 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {car?.brand} {car?.model}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              $ {car?.price}
            </span>
            <div className="flex items-center gap-1 font-bold text-gray-800 dark:text-gray-200">
              <AiFillStar></AiFillStar> <p className="px-2 bg-slate-900 rounded">{car?.rating}</p>
            </div>
            <Link to={`/carsDetails/${car?._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Details
            </Link>
          </div>
          <div>
            <h3 className="py-2 tracking-wide text-center text-gray-800 dark:text-white">
              {car?.category}
            </h3>
          </div>
          <div className="text-center py-2">
            <Link to={`/updateCar/${car?._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

CarCard.propTypes = {
  car: PropTypes.object,
};
