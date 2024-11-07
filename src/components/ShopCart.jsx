import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ShopCart = ({ carts, handleSortItems, handleDeleteCart }) => {
  const [sum, setSum] = useState(0);
  const [ showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleItemsPurchase = () => {
    showModal;
    setShowModal(true);
    document.getElementById("purchase_modal").showModal();
  };

  const handleClose = (id) => {
    setShowModal(true);
    navigate('/');
    const deleteItems = carts.filter(cart => cart.product_id != id);
    localStorage.removeItem("cart", deleteItems);
    toast.success("Successfully Purchased", {
      position: "top-center"
    });
  };

  useEffect(() => {
    const sumAllPrices = carts.reduce(
      (prev, current) => prev + current.price,
      0
    );
    setSum(sumAllPrices);
  }, [carts]);

  return (
    <div className="w-4/5 mx-auto py-12">
      <div className="lg:w-3/4 w-11/12 flex justify-between flex-col lg:flex-row flex-wrap text-center items-center gap-3">
        <h2 className="text-2xl font-bold">Cart</h2>

        <div className="flex md:justify-normal justify-center items-center flex-wrap gap-3">
          <h2 className="lg:text-xl text-lg font-bold">Total Price: {sum}</h2>
          <button
            onClick={handleSortItems}
            className="btn lg:px-6 px-4 border-2 border-btnBorder text-textColor rounded-full bg-white font-semibold"
          >
            Sort by Price <img src="/assets/Frame.jpeg" alt="Frame" />
          </button>
          <button onClick={handleItemsPurchase} className="btn lg:px-6 px-4 bg-bannerColor rounded-full text-white font-semibold" disabled={carts.length === 0 && sum === 0}>
            Purchase
          </button>

          <dialog
            id="purchase_modal"
            className="modal modal-middle"
          >
            <div className="modal-box flex flex-col justify-center items-center gap-3 py-10">
              <div>
              <img src="/assets/Group.png" alt="Success Img" />
              </div>
              <h2 className="py-4 md:w-96 text-2xl font-bold border-b border-gray-200">
                Payment Successfully
              </h2>
              <div className="space-y-2 pt-3">
              <p className="text-gray-500 font-medium">Thanks for Purchasing.</p>
              <p className="text-gray-500 font-medium">Total:{sum}</p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={() => handleClose(carts.product_id)} className="btn bg-gray-200 md:px-44 px-36 rounded-full font-semibold">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {carts.map((cart) => (
        <div
          key={cart.product_id}
          className="w-full bg-white rounded-2xl p-6 my-8"
        >
          <div className="flex justify-between lg:flex-row flex-col lg:gap-7 gap-4">
          <div
              onClick={() => handleDeleteCart(cart.product_id)}
              className="text-rose-500 text-3xl hover:cursor-pointer lg:hidden block"
            >
              <RxCrossCircled />
            </div>
            <div>
              <img
                className="lg:w-60 w-full lg:h-32 md:h-64 rounded-xl"
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
            <div
              onClick={() => handleDeleteCart(cart.product_id)}
              className="text-rose-500 text-3xl lg:mr-20 mr-12 hover:cursor-pointer lg:block hidden"
            >
              <RxCrossCircled />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ShopCart.propTypes = {
  carts: PropTypes.array,
  handleSortItems: PropTypes.func,
  handleDeleteCart: PropTypes.func
}

export default ShopCart;
