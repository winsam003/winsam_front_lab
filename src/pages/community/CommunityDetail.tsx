import { useBoardDetail } from "@/api/BBSCommon/UseBBSCommonQuery";
import { Input } from "@/components/ui/input";
import CommunityDetailBtnSection from "@/domain/community/detail/CommunityDetailBtnSection";
import CommunityDetailCntSection from "@/domain/community/detail/CommunityDetailCntSection";
import CommentBox from "@/shared/components/comment/CommentBox";
import CommentInputBox from "@/shared/components/comment/CommentInputBox";
import Linkto from "@/shared/components/linkto/Linkto";
import { useLocation, useParams } from "react-router-dom";

const CommunityDetail = () => {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code") || "BBS0000001";

    const { data, isLoading, error } = useBoardDetail({
        bbs_numb: code,
        post_numb: isNaN(postId) ? 0 : postId,
    });

    const userInfoString = sessionStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-6">
            <Linkto />

            <CommunityDetailBtnSection postId={String(postId)} postDetail={data} />
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <div>
                    <Input placeholder="제목" readOnly value={data?.bbs_post_sbjt} />
                </div>
                <div className="flex gap-4 justify-end text-[12px] mr-4">
                    <div>
                        <span className="font-bold">작성자: </span>
                        <span>{data?.reg_user}</span>
                    </div>
                    <div>
                        <span className="font-bold">작성일: </span>
                        <span>{data?.reg_date}</span>
                    </div>
                    <div>
                        <span className="font-bold">조회수: </span>
                        <span>{data?.read_cnt}</span>
                    </div>

                    {/* <Input placeholder="작성자" readOnly value={data?.reg_user} />
                    <Input placeholder="작성일" readOnly value={data?.reg_date} />
                    <Input placeholder="조회수" readOnly value={data?.read_cnt} /> */}
                </div>
            </div>
            <section>
                {isLoading && <div className="text-gray-600">게시글 불러오는 중...</div>}
                {error && <div className="text-red-500">에러 발생: {error.message}</div>}
                {!isLoading && !error && data ? (
                    <CommunityDetailCntSection postDetail={data} />
                ) : (
                    !isLoading && !error && <div className="text-gray-500">게시글이 없습니다.</div>
                )}
            </section>
            <section>
                {userInfo ? <CommentInputBox /> : ""}
                {data &&
                    data.cmntVOList?.map((item, index) => {
                        return (
                            <div key={index}>
                                <CommentBox cmntVO={item} />
                            </div>
                        );
                    })}
            </section>
        </div>
    );
};

export default CommunityDetail;
