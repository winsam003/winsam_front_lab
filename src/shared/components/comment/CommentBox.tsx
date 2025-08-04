import type { cmntVO } from "@/api/BBSCommon/BBSCommonType";
import { FaUserCircle } from "react-icons/fa";

type props = {
    cmntVO: cmntVO;
};

const CommentBox = ({ cmntVO }: props) => {
    return (
        <div className="w-full mx-auto bg-white shadow-sm rounded-2xl p-4 border border-gray-200 mt-4 mb-4">
            <div className="flex items-center gap-3 mb-2">
                <FaUserCircle className="text-[#434A75] text-2xl" />
                <div className="flex flex-col">
                    <div className="text-sm font-semibold text-[#434A75]">{cmntVO.usernickname}</div>
                    <div className="text-[10px] text-[#434A75] opacity-70 font-medium">{cmntVO.userrole}</div>
                </div>
                <div className="ml-auto text-[10px] text-gray-400">{cmntVO.reg_date}</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-xl text-sm text-gray-800 whitespace-pre-line">{cmntVO.cmnt_cnts}</div>
        </div>
    );
};

export default CommentBox;
