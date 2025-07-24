import { useBoardDetail } from "@/api/BBSCommon/UseBBSCommonQuery";
import CommunityDetailBtnSection from "@/domain/community/detail/CommunityDetailBtnSection";
import CommunityDetailCntSection from "@/domain/community/detail/CommunityDetailCntSection";
import Linkto from "@/shared/components/linkto/Linkto";
import { useParams } from "react-router-dom";

const CommunityDetail = () => {
    const { id } = useParams<{ id: string }>();

    const postId = Number(id);
    const { data, isLoading, error } = useBoardDetail({
        bbs_numb: "BBS0000001",
        post_numb: isNaN(postId) ? 0 : postId,
    });

    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-6">
            <Linkto />

            <CommunityDetailBtnSection />

            <section>
                {isLoading && <div className="text-gray-600">게시글 불러오는 중...</div>}
                {error && <div className="text-red-500">에러 발생: {error.message}</div>}
                {!isLoading && !error && data ? (
                    <CommunityDetailCntSection postDetail={data} />
                ) : (
                    !isLoading && !error && <div className="text-gray-500">게시글이 없습니다.</div>
                )}
            </section>
        </div>
    );
};

export default CommunityDetail;
