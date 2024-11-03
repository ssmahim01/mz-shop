const BannerImg = () => {
    return (
        <div className="border border-white rounded-3xl p-4 w-4/5 lg:w-[950px] h-full lg:h-[500px] mx-auto" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        }}>
            <img className="w-full h-full rounded-3xl" src="/assets/banner.jpg" alt="Image of Banner" />
        </div>
    );
};

export default BannerImg;