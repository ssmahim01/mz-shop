import { NavLink } from "react-router-dom";

const Dashboard = () => {

  return <div>
    <div className="bg-bannerColor lg:px-36 px-12 py-12 relative">
        <div className="flex flex-col justify-center items-center text-center gap-4 lg:px-56 md:px-8">
          <h2 className="text-3xl text-white font-bold">Dashboard</h2>
          <p className="font-medium text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>

          <div className="flex justify-center items-center gap-3 mt-4">
          <NavLink to={'/dashboard'} className={({isActive}) => `btn rounded-full w-full text-white font-medium ${isActive ? "text-purple-500 font-bold bg-white" : "hover:bg-white hover:text-purple-500 hover:font-bold"}`}>Cart</NavLink>

          <NavLink to={'/dashboard'} className={({isActive}) => `btn rounded-full w-full text-white font-medium ${isActive ? "text-purple-500 font-bold bg-white" : "hover:bg-white hover:text-purple-500 hover:font-bold"}`}>Wishlist</NavLink>
          </div>
        </div>
      </div>
  </div>;
};

export default Dashboard;
