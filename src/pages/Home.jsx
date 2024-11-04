import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Categories from "../components/Categories";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="bg-bannerColor rounded-2xl relative">
        {/* <Navbar></Navbar> */}
        <Banner></Banner>
      <div className="absolute lg:top-96 lg:left-48 md:top-80 top-72">
        <BannerImg></BannerImg>
      </div>
      </div>
      
      <div className="w-4/5 mx-auto lg:pt-[420px] md:pt-72 pt-48">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 text-center">Explore Cutting-Edge Gadgets</h2>

      <div className="grid grid-cols-12 gap-4 py-14">
      <Categories products={products}></Categories>
      <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Home;
