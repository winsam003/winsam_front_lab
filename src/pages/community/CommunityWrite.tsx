import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import ReactMarkdown from "react-markdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const CommunityWrite = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    return (
        <div className="max-w-[1024px] mx-auto w-full h-full">
            <div className="flex gap-5 mt-4 mb-4">
                {/* 입력창 */}
                <textarea
                    className="flex-1 min-h-[500px] font-4 p-4 rounded-2xl"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="여기에 마크다운으로 글을 작성하세요..."
                />

                {/* 미리보기 */}
                <div
                    className="flex-1 h-[500px] p-2.5 border border-gray-300 overflow-y-auto bg-gray-50 rounded-2xl"
                >
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <Button className="h-8 text-[12px] bg-gray-500" onClick={() => {
                        navigate("/community");
                    }}>
                    <GiHamburgerMenu />
                    목록
                </Button>
                <Button className="h-8 text-[12px]">
                    <CiSaveDown2 />
                    등록
                </Button>
            </div>
        </div>
    );
};
export default CommunityWrite;
