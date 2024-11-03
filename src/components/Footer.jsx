const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-6 text-center bg-base-100 text-base-content rounded p-10">
      <nav className="grid grid-flow-row gap-4">
        <h2 className="md:text-3xl text-xl font-bold">Gadget Heaven</h2>
        <p className="text-gray-500 font-medium">
          Leading the way in cutting-edge technology and innovation
        </p>
        <div className="border border-gray-200 lg:w-[1200px]"></div>
      </nav>

      <div className="flex flex-wrap justify-between items-center lg:px-10 lg:mt-0 mt-8 md:-space-y-9 space-y-4">
        <nav className="flex flex-col gap-2 text-gray-500 font-medium">
          <h2 className="text-lg font-bold text-gray-800">Services</h2>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col gap-2 text-gray-500 font-medium lg:ml-36 md:ml-24 ml-3">
          <h2 className="text-lg font-bold text-gray-800">Company</h2>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col gap-2 text-gray-500 font-medium lg:ml-36 md:ml-24 ml-3">
          <h2 className="text-lg font-bold text-gray-800">Legal</h2>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
