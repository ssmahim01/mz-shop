import toast from "react-hot-toast";

const getStoredCart = () => {
  const cartStr = localStorage.getItem("cart");
  if (cartStr) {
    const storedCart = JSON.parse(cartStr);
    return storedCart;
  } else {
    return [];
  }
};

const addCartList = (id) => {
  const storedCartList = getStoredCart();
  if (!storedCartList.includes(id)) {
    storedCartList.push(id);
    const storedCartStr = JSON.stringify(storedCartList);
    localStorage.setItem("cart", storedCartStr);
    toast.success("Added to your Cart");
  } else {
    toast.error("Already exists in the Cart list");
  }
};

const getStoredWishlist = () => {
  const wishlistStr = localStorage.getItem("wishlist");
  if (wishlistStr) {
    const storedWishlist = JSON.parse(wishlistStr);
    return storedWishlist;
  } else {
    return [];
  }
};

const addWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  if (!storedWishlist.includes(id)) {
    storedWishlist.push(id);
    const storedWishlistStr = JSON.stringify(storedWishlist);
    localStorage.setItem("wishlist", storedWishlistStr);
    toast.success("Added to your Wishlist");
  } else {
    toast.error("Already exists in the Wishlist");
  }
};

export { addCartList, addWishlist, getStoredCart, getStoredWishlist };