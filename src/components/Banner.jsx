const Banner = () => {

    return (
        <div className="md:px-40 px-10 md:py-16 py-10 my-4 relative">
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="lg:text-5xl md:text-3xl text-2xl text-white font-bold text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>

                <p className="text-white font-medium text-center w-3/4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <button className="btn rounded-full px-6 bg-white text-purple-500 text-xl font-bold">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;