import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="flex flex-col justify-center items-center py-60 space-y-4">
            <h2 className="lg:text-5xl text-2xl text-gray-800 font-bold">404</h2>
            <p className="lg:text-2xl text-xl text-gray-600 font-medium">Page is not Found</p>

           <Link to="/" className="btn btn-accent text-white font-semibold mt-5">Return to Home</Link>
        </div>
    );
};

export default ErrorElement;