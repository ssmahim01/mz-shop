import { RxCrossCircled } from "react-icons/rx";

const WishList = () => {
  return (
    <div className="w-4/5 mx-auto py-12">
        <h2 className="text-2xl font-bold text-center">Wishlist</h2>
      <div className="w-full bg-white rounded-2xl p-6 my-5">
        <div className="flex flex-col md:flex-row justify-between gap-7">
          <div>
            <img className="md:w-72 lg:h-48 md:h-56 rounded-xl" src="/assets/banner.jpg" />
          </div>
          <div className="w-full lg:space-y-5 space-y-3">
            <h2 className="lg:text-2xl text-xl font-semibold">Samsung Galaxy S23 Ultra</h2>
            <p className="md:text-lg">
              <span className="font-semibold">Description: </span> <span className="text-gray-500 font-medium">Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.</span>
            </p>
            <p className="lg:text-xl text-lg text-gray-700 font-semibold">
              Price: $ 999.99
            </p>

            <button className='btn lg:px-6 px-4 bg-bannerColor rounded-full text-white font-semibold'>Add to Cart</button>
          </div>
          <div className="text-rose-500 text-3xl mr-14">
            <RxCrossCircled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;