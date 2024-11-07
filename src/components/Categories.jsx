import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="col-span-2 lg:w-full w-3/5 h-[450px] flex flex-col items-center rounded-2xl bg-white p-4">
      <NavLink to={`/`}
        className={({ isActive }) =>
          `btn w-full rounded-full text-gray-500 font-medium ${
            isActive ? "bg-purple-500 text-white font-bold" : ""
          }`
        }
      >
        All Product
      </NavLink>
      
      {categories.map((category) => (

        <NavLink
        key={category.product_id}
        to={`/category/${category.category}`}
        className={({ isActive }) =>
            `btn w-full rounded-full text-gray-500 font-medium mt-3 ${
              isActive ? "bg-purple-500 text-white font-bold" : ""
            }`
          }
          >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories;
