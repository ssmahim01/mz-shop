import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart, getStoredWishlist } from "../utilities/localStorageData";
import ShopCart from "../components/ShopCart";
import WishList from "../components/WishList";
import toast from "react-hot-toast";

const Dashboard = () => {
  const products = useLoaderData();
  
  const [carts, setCarts] = useState([]);
  const [wishlists, setWishlists] = useState([]);

   const handleSortItems = () => {
      const sortedCarts = [...carts].sort((a, b) => b.price - a.price);
      setCarts(sortedCarts);
   };

   const handleDeleteCart = (id) => {
    const deleteItems = carts.filter(cart => cart.product_id != id);
    localStorage.removeItem("cart", deleteItems);
    setCarts(deleteItems);
    toast.success('Deleted Successfully');
 };

   const handleDeleteWishlist = (id) => {
    const deleteItems = wishlists.filter(wishlist => wishlist.product_id != id);
    localStorage.removeItem("wishlist", deleteItems);
    setWishlists(deleteItems);
    toast.success('Deleted Successfully');
 };

  const [active, setActive] = useState(true);

  const handleActive = (content) => {
    if(content === true){
      setActive(true);
    }else{
      setActive(false);
    }
  };

  useEffect(() => {
    const storedCarts = getStoredCart();
    const allCarts = products.filter(product => storedCarts.includes(product.product_id));
    setCarts(allCarts);
  }, []);

  useEffect(() => {
    const storedWishlists = getStoredWishlist();
    const allWishlists = products.filter(product => storedWishlists.includes(product.product_id));
    setWishlists(allWishlists);
  }, []);

  return <div>
    <div className="bg-bannerColor lg:px-36 px-12 py-12 relative">
        <div className="flex flex-col justify-center items-center text-center gap-4 lg:px-56 md:px-8">
          <h2 className="text-3xl text-white font-bold">Dashboard</h2>
          <p className="font-medium text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>

          <div className="flex justify-center items-center gap-3 mt-4">
          <button onClick={() => handleActive(true)} className={`${active ? "btn rounded-full w-full text-textColor bg-white font-bold" : "btn rounded-full border border-white w-full text-white bg-transparent font-medium"}`}>Cart</button>

          <button onClick={() => handleActive(false)} className={`${active ? "btn rounded-full border border-white w-full text-white bg-transparent font-medium" : "btn rounded-full w-full text-textColor bg-white font-bold"}`}>Wishlist</button>
          </div>
        </div>
      </div>

     {active ? <ShopCart carts={carts} handleSortItems={handleSortItems} handleDeleteCart={handleDeleteCart}></ShopCart> : <WishList wishlists={wishlists} handleDeleteWishlist={handleDeleteWishlist}></WishList>}
  </div>;
};

export default Dashboard;
