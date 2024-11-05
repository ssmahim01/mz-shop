import { RxCrossCircled } from "react-icons/rx";

const WishList = ({ wishlists }) => {
  return (
    <div className="w-4/5 mx-auto py-12">
      <h2 className="text-2xl font-bold md:text-left text-center">Wishlist</h2>

      {wishlists.map((wishlist) => (
        <div
          key={wishlist.product_id}
          className="w-full bg-white rounded-2xl p-6 my-5"
        >
          <div className="flex flex-col md:flex-row justify-between gap-7">
            <div>
              <img
                className="md:w-72 lg:h-48 md:h-56 rounded-xl"
                src={wishlist.product_image}
                alt={wishlist.product_title}
              />
            </div>
            <div className="w-full lg:space-y-5 space-y-3">
              <h2 className="lg:text-2xl text-xl font-semibold">
                {wishlist.product_title}
              </h2>
              <p className="md:text-lg">
                <span className="font-semibold">Description: </span>{" "}
                <span className="text-gray-500 font-medium">
                  {wishlist.description}
                </span>
              </p>
              <p className="lg:text-xl text-lg text-gray-700 font-semibold">
                Price: ${parseFloat(wishlist.price)}
              </p>

              <button className="btn lg:px-6 px-4 bg-bannerColor rounded-full text-white font-semibold">
                Add to Cart
              </button>
            </div>
            <div className="text-rose-500 text-3xl mr-14">
              <RxCrossCircled />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;