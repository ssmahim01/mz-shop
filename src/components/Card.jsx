const Card = ({product}) => {
    const {product_id, product_title, product_image, price} = product;
    
    return (
        <div className="bg-white p-5 rounded-2xl space-y-3">
           <img className="w-full h-36 rounded-xl" src={product_image} alt={product_title} />

           <h2 className="text-2xl font-semibold">{product_title}</h2>

           <p className="text-lg text-gray-500 font-medium">Price: {price}k</p>

           <button className="py-2 px-4 hover:btn-ghost text-textColor font-semibold border-2 border-btnBorder rounded-full">View Details</button>
        </div>
    );
};

export default Card;