import { Helmet } from "react-helmet";

const Statistics = () => {

  return (
    <div>
        <Helmet>
        <title>Statistics - Gadget Heaven</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="bg-bannerColor lg:px-36 px-12 py-10 relative">
        <div className="flex flex-col justify-center items-center text-center gap-4 lg:px-56 md:px-8">
          <h2 className="text-3xl text-white font-bold">Statistics</h2>
          <p className="font-medium text-white">
         In this page, You can view statistics of products information.The page has important information of statistics.This will be a comparison of Product Name and Price.
          </p>
        </div>
      </div>
      <div className="lg:pt-60 md:pt-32 pt-20">
      <h2 className="text-3xl text-textColor text-center font-bold">
        No Data Found
      </h2>
      </div>
    </div>
  );
};

export default Statistics;