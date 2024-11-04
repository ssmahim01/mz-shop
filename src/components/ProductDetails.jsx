import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  const { product_id } = useParams();

  const product = products.find((product) => product.product_id === product_id);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};

  return (
    <div>
      <div className="bg-bannerColor pt-10 px-36 pb-52 relative">
        <div className="flex flex-col justify-center items-center text-center gap-4 px-56">
          <h2 className="text-3xl  text-white font-bold">Product Details</h2>
          <p className="font-medium text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="absolute top-60 left-48 w-3/4 mx-auto bg-white rounded-3xl flex justify-between items-center gap-8 p-5">
        <figure className="lg:w-1/2">
          <img
            className="w-[420px] md:h-[430px] rounded-2xl"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="w-full space-y-3">
          <h2 className="text-2xl font-semibold">{product_title}</h2>
          <p className="text-xl text-gray-700 font-medium">
            Price: $ {price}
          </p>

          <button className="border-2 border-greenBorder rounded-full bg-lime-100 text-textGreen font-semibold py-2 px-5">
            {availability ? "In Stock" : "Not Available"}
          </button>

          <p className="text-gray-500 font-medium">{description}</p>
          <div>
            <h3 className="text-lg font-bold">Specification:</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
