import { NavLink } from "react-router-dom";

const Categories = ({ products }) => {

  return (
    <div className="col-span-2 h-[450px] flex flex-col items-center rounded-2xl bg-white p-4">
        <NavLink className={({isActive}) => `btn px-6 rounded-full text-gray-500 font-medium text-sm ${isActive ? "bg-purple-500 text-white font-bold" : ""}`}>All Product</NavLink>

        <NavLink className="btn px-9 rounded-full text-gray-500 font-medium mt-3 text-sm">Laptops</NavLink>
        
        <NavLink className="btn px-9  rounded-full text-gray-500 font-medium mt-3 text-sm">Phones</NavLink>

        <NavLink className="btn px-5 rounded-full text-gray-500 font-medium mt-3 text-sm">Accessories</NavLink>

        <NavLink className="btn rounded-full text-gray-500 font-medium mt-3 text-xs">Smart Watches</NavLink>

        <NavLink className="btn px-9 rounded-full text-gray-500 font-medium mt-3 text-sm">MacBook</NavLink>

        <NavLink className="btn px-10 rounded-full text-gray-500 font-medium mt-3 text-sm">Iphone</NavLink>
    </div>
  );
};

export default Categories;