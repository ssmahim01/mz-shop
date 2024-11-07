import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutItems = () => {
  const navigation = useNavigation();
  // const {pathname} = useLocation();
// console.log(pathname);
// console.log(!(pathname.includes("/category")));
// console.log(pathname !== "/" || !(pathname.includes("/category")));
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto">
      <Navbar></Navbar> 
      </div>
        <div className="min-h-[calc(100vh+80px)]">
        {
        navigation.state === 'loading' ? <p className="text-center text-gray-500 text-2xl font-medium my-4">loading...</p> : <Outlet></Outlet>
      }
        </div>
      <Footer />
    </div>
  );
};

export default LayoutItems;
