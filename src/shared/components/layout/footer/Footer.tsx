import { Link } from "react-router-dom";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { PiGithubLogoDuotone } from "react-icons/pi";

const Footer = () => {
    return (
        <div className="bg-[#434A75] mt-4 py-8">
            <div className="max-w-screen-xl mx-auto w-full px-4">
                {/* 상단: 소개 및 연락처 */}
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    {/* 블로그 소개 */}
                    <div className="flex-1">
                        <div className="mb-4 text-2xl text-white font-semibold">winsam.xyz 블로그 소개</div>
                        <div className="text-sm text-[#E0E0E0]">winsam.xyz 블로그입니다.</div>
                    </div>

                    {/* 연락처 및 링크 */}
                    <div className="flex-1">
                        <ul className="space-y-2 text-sm text-white">
                            <li className="flex items-center gap-2">
                                <MdOutlineAttachEmail />
                                winsam003@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <SiBloglovin />
                                blog.winsam.xyz
                            </li>
                            <li className="flex items-center gap-2 break-all">
                                <PiGithubLogoDuotone />
                                https://github.com/winsam003/winsam_front_lab.git
                            </li>
                        </ul>

                        {/* 네비게이션 링크 */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Link to="/home" className="text-white text-sm hover:underline">Home</Link>
                            <Link to="/blog" className="text-white text-sm hover:underline">Blog</Link>
                            <Link to="/community" className="text-white text-sm hover:underline">Community</Link>
                        </div>
                    </div>
                </div>

                {/* 하단: 크레딧 */}
                <div className="mt-8 border-t border-gray-400 pt-4 flex justify-center text-xs text-gray-300">
                    created with winsam.xyz
                </div>
            </div>
        </div>
    );
};

export default Footer;
