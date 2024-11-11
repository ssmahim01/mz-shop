import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/dashboard');
    };

    return (
        <div className="lg:px-40 px-10 lg:pt-20 pt-10 lg:h-[550px] md:h-[500px] h-[380px] my-2">
            <div className="flex flex-col justify-center items-center md:gap-8 gap-4">
                <h2 className="lg:text-5xl md:text-3xl text-xl text-white font-bold text-center">Upgrade Your Tech Accessorize with MZ Shop Accessories</h2>

                <p className="text-sm text-white font-medium text-center lg:w-3/4 w-11/12">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <button onClick={handleNavigate} className="btn rounded-full px-6 bg-white text-purple-500 text-xl font-bold">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;