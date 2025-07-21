import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="h-[450px] bg-[#434A75] mt-4">
            <div className="max-w-[1024px] mx-auto w-full h-full">
                <div className="flex justify-between h-[80%] p-4">
                    <div className="flex-1 p-4">
                        <div className="mb-4 text-[28px] text-white">winsam.xyz 블로그 소개</div>
                        <div className="text-[16px] text-[#E0E0E0]">소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개</div>
                    </div>
                    <div className="flex-1 p-4">2</div>
                </div>
                <div className="flex justify-between h-[20%] p-4">
                    <Link to="/contact">
                        <div className="flex items-center flex-1 p-4 text-white">contact</div>
                    </Link>
                    <div className="flex-1"></div>
                    <div className="flex flex-1 p-4 text-[12px] items-center text-gray-300">created with winsam.xyz</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
