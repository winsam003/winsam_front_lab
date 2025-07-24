import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-[480px] relative w-full">
            <img
                src="/images/headerImg.avif"
                alt="header background"
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,50,0.5)]" />
            
            <div className="relative z-10 w-full h-full flex flex-col px-4 max-w-screen-xl mx-auto">
                {/* 상단 로고 */}
                <div className="flex justify-between pt-4">
                    <Link to="/">
                        <div className="text-lg sm:text-xl text-white font-normal">Blog.winsam</div>
                    </Link>
                </div>

                {/* 중앙 텍스트 */}
                <div className="flex flex-1 flex-col justify-center items-center gap-4 text-center break-words">
                    <div className="text-white text-base sm:text-xl font-[400]">그냥 이야기</div>
                    <div className="text-white text-3xl sm:text-5xl font-[500] leading-snug">
                        Just words,<br /> your vibe.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
