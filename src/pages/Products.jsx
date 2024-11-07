import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { Helmet } from "react-helmet";

const Products = () => {
    const products = useLoaderData();

  return (
    <div>
        <Helmet>
        <title>Products - Gadget Heaven</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="md:w-4/5 w-11/12 mx-auto pt-5 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.product_id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;