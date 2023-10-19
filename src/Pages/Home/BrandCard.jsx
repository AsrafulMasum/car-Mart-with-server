import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <Link to={`/cars/${brand?.name}`}>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={brand?.image} alt="Shoes" />
        </figure>
        <div className="card-body items-center mt-10">
          <h2 className="card-title">{brand?.name}</h2>
          <div className="text-center">
            <p>Country: {brand?.country}</p>
            <p>Established: {brand?.founded}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
