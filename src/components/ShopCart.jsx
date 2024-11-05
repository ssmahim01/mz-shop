import { RxCrossCircled } from "react-icons/rx";

const ShopCart = ({ carts }) => {
  return (
    <div className="w-4/5 mx-auto py-12">
      <div className="lg:w-3/4 w-11/12 flex justify-between flex-col lg:flex-row flex-wrap text-center items-center gap-3">
        <h2 className="text-2xl font-bold">Cart</h2>

        <div className="flex md:justify-normal justify-center items-center flex-wrap gap-3">
          <h2 className="lg:text-xl text-lg font-bold">Total Cost: 999.99</h2>
          <button className="btn lg:px-6 px-4 border-2 border-btnBorder text-textColor rounded-full bg-white font-semibold">
            Sort by Price <img src="/assets/Frame.jpeg" alt="Frame" />
          </button>
          <button className="btn lg:px-6 px-4 bg-bannerColor rounded-full text-white font-semibold">
            Purchase
          </button>
        </div>
      </div>

      {carts.map((cart) => (
        <div key={cart.product_id} className="w-full bg-white rounded-2xl p-6 my-5">
          <div className="flex justify-between md:flex-row flex-col gap-7">
            <div>
              <img
                className="lg:w-60 md:w-64 lg:h-32 md:h-52 rounded-xl"
                src={cart.product_image}
                alt={cart.product_title}
              />
            </div>
            <div className="w-full space-y-4">
              <h2 className="lg:text-2xl text-xl font-semibold">
                {cart.product_title}
              </h2>
              <p className="md:text-lg text-gray-500 font-medium">
               {cart.description}
              </p>
              <p className="lg:text-xl text-lg text-gray-700 font-semibold">
                Price: ${parseFloat(cart.price)}
              </p>
            </div>
            <div className="text-rose-500 text-3xl lg:mr-20 mr-10">
              <RxCrossCircled />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCart;