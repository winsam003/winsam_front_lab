import { Link, useLocation } from "react-router-dom";

const Linkto = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div>
            <div className="mt-4 flex gap-8 mb-8">
                {/* <Link to="/home">Home</Link> */}
                <Link to="/blog" className={currentPath.startsWith("/blog") ? "font-bold text-[#434A75]" : ""}>
                    Blog
                </Link>
                <Link to="/community" className={currentPath.startsWith("/community") ? "font-bold text-[#434A75]" : ""}>
                    Community
                </Link>
                {/* <Link to="/contact">Contact</Link> */}
            </div>
        </div>
    );
};

export default Linkto;
