import { FaSquareFull } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { addCartList, addWishlist } from "../utilities/localStorageData";

const ProductDetails = () => {
  const products = useLoaderData();
  const { product_id } = useParams();

  const product = products.find((product) => product.product_id === product_id);

  const {
    product_id : productId,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating
  } = product || {};

  const handleCart = (id) => {
    addCartList(id);
  };

  const handleWishlist = (id) => {
    addWishlist(id);
  };

  return (
    <div className="lg:pb-0 md:pb-[840px] pb-[680px]">
      <div className="bg-bannerColor pt-10 lg:px-36 px-12 pb-52 relative">
        <div className="flex flex-col justify-center items-center text-center gap-4 lg:px-56 md:px-8">
          <h2 className="text-3xl text-white font-bold">Product Details</h2>
          <p className="font-medium text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="absolute lg:top-60 md:top-64 top-72 lg:left-48 md:left-24 left-10 md:w-3/4 w-4/5 bg-white rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-8 p-5">
        <figure className="lg:w-1/2 w-full">
          <img
            className="lg:w-[420px] lg:h-[505px] w-full rounded-2xl"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="w-full space-y-3">
          <h2 className="md:text-3xl text-xl font-semibold">{product_title}</h2>
          <p className="md:text-xl text-gray-700 font-medium">
            Price: $ {price}
          </p>

          {availability ? (
            <button className="border-2 border-greenBorder rounded-full bg-lime-100 text-sm text-textGreen font-semibold py-1 px-4">
              In Stock
            </button>
          ) : (
            <button className="border-2 border-red-400 rounded-full bg-red-100 text-xs text-red-400 font-semibold p-1 px-4">
              Not Available
            </button>
          )}

          <p className="text-gray-500 font-medium">{description}</p>
          <div>
            <h3 className="text-lg font-bold">Specification:</h3>
            {Specification.map((item, index) => (
              <p key={index} className="text-gray-500 font-medium mt-3">
                <p><span>{index + 1}.</span><span> {item}</span></p>
              </p>
            ))}

            <div className="space-y-2 pt-3">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                Rating <FaSquareFull />
              </h2>
              <div className="flex items-center gap-5">
                <div className="rating space-x-2">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-rating"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-rating"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-rating"
                    />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-rating"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-rating"
                  />
                </div>
                <button className="text-sm px-4 py-2 bg-gray-100 hover:cursor-pointer rounded-3xl text-gray-700 font-medium">
                  {rating}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button onClick={() => handleCart(productId)} className="btn text-white text-base font-bold bg-purple-600 px-6 rounded-full">Add To Cart <MdOutlineShoppingCart className="text-xl"/></button>

                <button onClick={() => handleWishlist(productId)} className="p-3 bg-white border border-gray-200 rounded-full text-xl"><FiHeart /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;