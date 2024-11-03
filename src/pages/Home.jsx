import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";

const Home = () => {
  return (
    <div>
      <div className="bg-bannerColor rounded-2xl relative">
        <Banner></Banner>
      <div className="absolute lg:top-96 lg:left-48 md:top-80 top-72">
        <BannerImg></BannerImg>
      </div>
      </div>
    </div>
  );
};

export default Home;
