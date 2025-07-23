import { useBoardList } from "@/api/BBSCommon/UseBBSCommonQuery";
import CommunityListButSection from "@/domain/community/CommunityListBtnSection";
import Linkto from "@/shared/components/linkto/Linkto";
import PostTable from "@/shared/components/table/PostTable";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();
    const goToDetail = (id: number) => {
        navigate(`/communityDetail/${id}`);
    };

    const params = { bbs_numb: "BBS0000001", page: 1, size: 9999 };

    const { data, isLoading, error } = useBoardList(params);

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;
    
    return (
        <div className="max-w-[1024px] mx-auto w-full h-full">
            <Linkto />
            <CommunityListButSection />
            <PostTable goToDetail={goToDetail} BBSList={data?.bbslist} />
        </div>
    );
};

export default Community;
