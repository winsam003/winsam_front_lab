import { Button } from "@/components/ui/button";
import { CiSaveDown2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const BlogListBtnSection = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-end mb-4">
            <Button
                className="h-8 text-[12px]"
                onClick={() => {
                    navigate("/blog/bbs/common/write?bbsnumb=BBS0000002");
                }}
            >
                <CiSaveDown2 />
                등록
            </Button>
        </div>
    );
};

export default BlogListBtnSection;
