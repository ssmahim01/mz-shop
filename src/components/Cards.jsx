import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const productsData = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredData = [...productsData].filter(
        (product) => product.category === category
      );
      setProducts(filteredData);
    } else {
      setProducts(productsData);
    }
  }, [productsData, category]);

  return (
    <div className="col-span-10">
      <div className="w-11/12 mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.product_id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;