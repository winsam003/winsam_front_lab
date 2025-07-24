import { Button } from "@/components/ui/button";
import { CiSaveDown2 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

type props = {
    BtnType?: string;
};

const WriteBtnSection = ({ BtnType }: props) => {
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
                <Button className="h-8 text-[12px]" type="submit">
                    <CiSaveDown2 />
                    {BtnType ? BtnType : "등록"}
                </Button>
            </div>
        </div>
    );
};

export default WriteBtnSection;
