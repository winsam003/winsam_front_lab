import { Button } from "@/components/ui/button";
import Linkto from "@/shared/components/linkto/Linkto";
import PostTable from "@/shared/components/table/PostTable";
import { CiSaveDown2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();

    const goToDetail = (id: number) => {
        navigate(`/communityDetail/${id}`);
    };

    return (
        <div className="max-w-[1024px] mx-auto w-full h-full">
            <Linkto />
            <div className="flex justify-end mb-4">
                <Button
                    className="h-8 text-[12px]"
                    onClick={() => {
                        navigate("/communityWrite");
                    }}
                >
                    <CiSaveDown2 />
                    등록
                </Button>
            </div>
            <PostTable goToDetail={goToDetail} />
        </div>
    );
};

export default Community;
