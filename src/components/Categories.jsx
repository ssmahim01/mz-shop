import { NavLink } from "react-router-dom";

const Categories = ({ products }) => {

  return (
    <div className="col-span-3 w-3/4 h-[450px] flex flex-col items-center rounded-2xl bg-white p-4">
        <NavLink className={({isActive}) => `btn px-10 rounded-full text-gray-500 font-medium ${isActive ? "bg-purple-500 text-white font-bold" : ""}`}>All Product</NavLink>

        <NavLink className="btn px-12 rounded-full text-gray-500 font-medium mt-3">Laptops</NavLink>
        
        <NavLink className="btn px-12 rounded-full text-gray-500 font-medium mt-3">Phones</NavLink>

        <NavLink className="btn px-8 rounded-full text-gray-500 font-medium mt-3">Accessories</NavLink>

        <NavLink className="btn px-6 rounded-full text-gray-500 font-medium mt-3">Smart Watches</NavLink>

        <NavLink className="btn px-12 rounded-full text-gray-500 font-medium mt-3">MacBook</NavLink>

        <NavLink className="btn px-14 rounded-full text-gray-500 font-medium mt-3">Iphone</NavLink>
    </div>
  );
};

export default Categories;