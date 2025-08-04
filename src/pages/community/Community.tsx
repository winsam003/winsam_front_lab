import { useBoardList } from "@/api/BBSCommon/UseBBSCommonQuery";
import CommunityListButSection from "@/domain/community/CommunityListBtnSection";
import Linkto from "@/shared/components/linkto/Linkto";
import PostTable from "@/shared/components/table/PostTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();

    const goToDetail = (id: number) => {
        navigate(`/community/bbs/common/detail/${id}?code=BBS0000001`);
    };
    const [page, setPage] = useState(1);
    const size = 25;

    const params = { bbs_numb: "BBS0000001", page: page, size: size };
    const { data, isLoading, error } = useBoardList(params);

    const userInfoString = sessionStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-6">
            {/* 네비게이션 링크 */}
            <section>
                <Linkto />
            </section>

            {/* 버튼 섹션 */}
            {userInfo ? (
                <section>
                    <CommunityListButSection />
                </section>
            ) : (
                ""
            )}

            {/* 데이터 로딩/에러/테이블 */}
            <section>
                {isLoading && <div className="text-gray-600">로딩 중...</div>}
                {error && <div className="text-red-500">에러 발생: {error.message}</div>}
                {!isLoading && !error && <PostTable goToDetail={goToDetail} BBSList={data?.bbslist || []} page={page} setPage={setPage} pageInfo={data?.pageInfo}/>}
            </section>
        </div>
    );
};

export default Community;
