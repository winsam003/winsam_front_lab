import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-[480px] relative ">
            <img src="/images/headerImg.avif" alt="header background" className="absolute w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,50, 0.5)" }}></div>
            <div className="relative z-10  max-w-[1024px] mx-auto w-full h-full flex flex-col">
                <div className="flex justify-between pt-4">
                    <Link to="/">
                        <div className="text-xl text-white font-normal">Blog.winsam</div>
                    </Link>
                    <div></div>
                </div>
                <div className="flex flex-1 flex-col justify-center items-center gap-4">
                    <div className="text-white text-xl font-[400]">임시로 넣은</div>
                    <div className="text-white text-5xl font-[500]">블로그 중앙문자열</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
