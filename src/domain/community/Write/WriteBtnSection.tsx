import type { BBSPostItem } from "@/api/BBSCommon/BBSCommonType";
import { Button } from "@/components/ui/button";
import { CiSaveDown2 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

type props = {
    btnName?: string;
    btnType?: "button" | "submit" | "reset";
    postId?: string;
    postDetail?: BBSPostItem;
};

const WriteBtnSection = ({ btnType = "submit", btnName, postId, postDetail }: props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-end gap-4">
                <Button
                    className="h-8 text-[12px] bg-gray-500"
                    onClick={() => {
                        navigate("/community");
                    }}
                    type="button"
                >
                    <GiHamburgerMenu />
                    목록
                </Button>
                <Button
                    className="h-8 text-[12px]"
                    type={btnType}
                    onClick={
                        btnType === "button"
                            ? () =>
                                  navigate(`/community/update/${postId}`, {
                                      state: { postDetail },
                                  })
                            : undefined
                    }
                >
                    <CiSaveDown2 />
                    {btnName ? btnName : "등록"}
                </Button>
            </div>
        </div>
    );
};

export default WriteBtnSection;
