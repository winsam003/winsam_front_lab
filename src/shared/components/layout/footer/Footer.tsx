import { Link } from "react-router-dom";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { PiGithubLogoDuotone } from "react-icons/pi";

const Footer = () => {
    return (
        <div className="h-[450px] bg-[#434A75] mt-4">
            <div className="max-w-[1024px] mx-auto w-full h-full">
                <div className="flex justify-between h-[80%] p-4">
                    <div className="flex-1 p-4">
                        <div className="mb-4 text-[28px] text-white">winsam.xyz 블로그 소개</div>
                        <div className="text-[16px] text-[#E0E0E0]">winsam.xyz 블로그입니다.</div>
                    </div>
                    <div className="flex-1 p-4">
                        <div className="h-[70%]">
                            <ul>
                                <li className="text-[12px] text-white flex items-center gap-2">
                                    <MdOutlineAttachEmail /> winsam003@gmail.com
                                </li>
                                <li className="text-[12px] text-white flex items-center gap-2">
                                    <SiBloglovin />
                                    blog.winsam.xyz
                                </li>
                                <li className="text-[12px] text-white flex items-center gap-2">
                                    <PiGithubLogoDuotone />
                                    https://github.com/winsam003/winsam_front_lab.git
                                </li>
                            </ul>
                        </div>
                        <div className="flex">
                            <Link to="/home">
                                <span className="flex items-center p-4 text-white">Home</span>
                            </Link>
                            <Link to="/blog">
                                <span className="flex items-center p-4 text-white">Blog</span>
                            </Link>
                            <Link to="/community">
                                <span className="flex items-center p-4 text-white">Community</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between h-[20%] p-4">
                    {/* <Link to="/contact">
                        <div className="flex items-center flex-1 p-4 text-white">contact</div>
                    </Link> */}
                    <div className="flex-1"></div>
                    <div className="flex flex-1 p-4 text-[12px] items-center text-gray-300 justify-end">created with winsam.xyz</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
