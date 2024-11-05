import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";

const Home = () => {
  const categories = useLoaderData();
  const {pathname} = useLocation();

  return (
    <div className="w-11/12 mx-auto pt-4">
     <div className="border border-gray-300 rounded-3xl px-2 pt-2">
     <div className="bg-bannerColor rounded-3xl relative">
        {
         ( pathname === "/" || pathname.includes("/category")) && <Navbar></Navbar>
        }
        <Banner></Banner>
      <div className="absolute lg:top-[450px] lg:left-48 top-96">
        <BannerImg></BannerImg>
      </div>
      </div>
     </div>
      
      <div className="w-11/12 mx-auto lg:pt-[420px] md:pt-72 pt-44">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 text-center">Explore Cutting-Edge Gadgets</h2>

      <div className="lg:grid grid-cols-12 lg:gap-6 gap-10 py-14 flex flex-col justify-center lg:items-start items-center">
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Home;