import { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";

const WishList = ({ wishlists, handleDeleteWishlist }) => {

  useEffect(() => {
    document.title = "Wishlist" + "/Dashboard" + '/Gadget Heaven';
  }, "");

  return (
    <div className="w-4/5 mx-auto py-12">
      <h2 className="text-2xl font-bold md:text-left text-center">Wishlist</h2>

      {wishlists.map((wishlist) => (
        <div
          key={wishlist.product_id}
          className="w-full bg-white rounded-2xl p-6 my-5"
        >
          <div className="flex flex-col lg:flex-row justify-between lg:gap-7 gap-4">
          <div onClick={() => handleDeleteWishlist(wishlist.product_id)} className="text-rose-500 text-3xl mr-14 hover:cursor-pointer lg:hidden block">
              <RxCrossCircled />
            </div>
            <div>
              <img
                className="lg:w-72 w-full lg:h-48 md:h-64 rounded-xl"
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
            <div onClick={() => handleDeleteWishlist(wishlist.product_id)} className="text-rose-500 text-3xl mr-14 hover:cursor-pointer lg:block hidden">
              <RxCrossCircled />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;