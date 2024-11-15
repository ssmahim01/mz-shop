import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart, getStoredWishlist } from "../utilities/localStorageData";
import ShopCart from "../components/ShopCart";
import WishList from "../components/WishList";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

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
    toast.success("Deleted Successfully", {
      position: "top-center"
    });
 };

   const handleDeleteWishlist = (id) => {
    const deleteItems = wishlists.filter(wishlist => wishlist.product_id != id);
    localStorage.removeItem("wishlist", deleteItems);
    setWishlists(deleteItems);
    toast.success("Deleted Successfully", {
      position: "top-center"
    });
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
    const cartList = products.filter(product => storedCarts.includes(product.product_id));
    setCarts(cartList);
  }, [products]);

  useEffect(() => {
    const storedWishlists = getStoredWishlist();
    const wishlistItems = products.filter(product => storedWishlists.includes(product.product_id));
    setWishlists(wishlistItems);
  }, [products]);

  return <div>
     <Helmet>
        <title>Dashboard | MZ Shop</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className="bg-bannerColor lg:px-36 px-12 py-12 relative">
        <div className="flex flex-col justify-center items-center text-center gap-4 lg:px-56 md:px-8">
          <h2 className="text-3xl text-white font-bold">Dashboard</h2>
          <p className="font-medium text-white">
          The dashboard has two tab, those are Cart and Wishlist.When click the Cart tab it will show items of Cart tabs.And when click the Wishlist tab the tab will show items of Wishlist.
          </p>

          <div className="flex justify-center items-center gap-3 mt-4">
          <button onClick={() => handleActive(true)} className={`${active ? "btn rounded-full w-full text-textColor bg-white font-bold" : "btn rounded-full border border-white w-full text-white bg-transparent font-medium"}`}>Cart</button>

          <button onClick={() => handleActive(false)} className={`${active ? "btn rounded-full border border-white w-full text-white bg-transparent font-medium" : "btn rounded-full w-full text-textColor bg-white font-bold"}`}>Wishlist</button>
          </div>
        </div>
      </div>

     {active ? <ShopCart carts={carts} handleSortItems={handleSortItems} handleDeleteCart={handleDeleteCart}></ShopCart> : <WishList setCarts={setCarts} setWishlists={setWishlists} wishlists={wishlists} handleDeleteWishlist={handleDeleteWishlist}></WishList>}
  </div>;
};

export default Dashboard;
