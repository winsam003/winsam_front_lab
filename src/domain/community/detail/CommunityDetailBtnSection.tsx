import type { BBSPostItem } from "@/api/BBSCommon/BBSCommonType";
import WriteBtnSection from "../write/WriteBtnSection";

type props = {
    postId: string;
    postDetail?: BBSPostItem;
};

const CommunityDetailBtnSection = ({ postId, postDetail }: props) => {
    return (
        <div className="mt-4 mb-4">
            <WriteBtnSection btnType="button" btnName={"수정"} postId={postId} postDetail={postDetail} />
        </div>
    );
};

export default CommunityDetailBtnSection;
