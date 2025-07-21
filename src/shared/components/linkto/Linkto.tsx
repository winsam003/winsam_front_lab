import { Link } from "react-router-dom";

const Linkto = () => {
    return (
        <div>
            <div className="mt-4 flex gap-8 mb-8">
                <Link to="/home">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/community">Community</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Linkto;