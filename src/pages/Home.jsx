import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigation = useNavigation();
  const categories = useLoaderData();

  return (
    <div className="w-11/12 mx-auto pt-2">
       <Helmet>
        <title>Home | MZ Shop</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     <div className="border border-gray-300 rounded-3xl px-2 pt-2">
     <div className="bg-bannerColor rounded-3xl relative">
       <Navbar></Navbar>
        <Banner></Banner>
      <div className="absolute lg:top-[450px] lg:left-48 hidden md:block md:top-96">
        <BannerImg></BannerImg>
      </div>
      </div>
     </div>
      
      <div className="w-11/12 mx-auto lg:pt-[420px] md:pt-72 pt-20">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 text-center">Explore Cutting-Edge Gadgets</h2>

      <div className="lg:grid grid-cols-12 lg:gap-0 gap-10 py-14 flex flex-col justify-center lg:items-start items-center">
      <Categories categories={categories}></Categories>
      {
        navigation.state === 'loading' ? <span className="loading loading-infinity loading-lg lg:ml-96 text-info my-8"></span> : <Outlet></Outlet>
      }
      </div>
      </div>
    </div>
  );
};

export default Home;