import { useBoardList } from "@/api/BBSCommon/UseBBSCommonQuery";
import CommunityListButSection from "@/domain/community/CommunityListBtnSection";
import Linkto from "@/shared/components/linkto/Linkto";
import PostTable from "@/shared/components/table/PostTable";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();

    const goToDetail = (id: number) => {
        navigate(`/community/bbs/common/detail/${id}?code=BBS0000001`);
    };

    const params = { bbs_numb: "BBS0000001", page: 1, size: 9999 };
    const { data, isLoading, error } = useBoardList(params);
    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-6">
            {/* 네비게이션 링크 */}
            <section>
                <Linkto />
            </section>

            {/* 버튼 섹션 */}
            <section>
                <CommunityListButSection />
            </section>

            {/* 데이터 로딩/에러/테이블 */}
            <section>
                {isLoading && <div className="text-gray-600">로딩 중...</div>}
                {error && <div className="text-red-500">에러 발생: {error.message}</div>}
                {!isLoading && !error && <PostTable goToDetail={goToDetail} BBSList={data?.bbslist || []} />}
            </section>
        </div>
    );
};

export default Community;
