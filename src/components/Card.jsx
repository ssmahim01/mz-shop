import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="bg-white p-5 rounded-2xl space-y-3">
      <img
        className="w-full h-44 bg-slate-200 rounded-xl"
        src={product_image}
        alt={product_title}
      />

      <h2 className="text-xl font-semibold">{product_title}</h2>

      <p className="text-gray-500 font-medium">Price: ${price}</p>

      <Link to={`/product/${product_id}`}><button className="py-2 px-4 hover:btn-ghost text-sm text-textColor font-semibold border-2 border-btnBorder rounded-full mt-3">
        View Details
      </button></Link>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object
}

export default Card;