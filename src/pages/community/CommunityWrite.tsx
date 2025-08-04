import MarkdownSection from "@/domain/community/write/MarkdownSection";
import WriteBtnSection from "@/domain/community/write/WriteBtnSection";
import { BBSWriteSchema, BBSWriteSchemaDefaultValue, type BBSWriteSchemaType } from "../../domain/community/write/CommunityWriteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useCommunityWrite } from "@/api/BBSCommon/UseBBSCommonQuery";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Linkto from "@/shared/components/linkto/Linkto";
import { useEffect } from "react";

const CommunityWrite = () => {
    const navigate = useNavigate();
    const BBSWriteForm = useForm<BBSWriteSchemaType>({
        resolver: zodResolver(BBSWriteSchema) as Resolver<BBSWriteSchemaType>,
        defaultValues: BBSWriteSchemaDefaultValue,
    });

    const [searchParams] = useSearchParams();
    const bbsnumb = searchParams.get("bbsnumb");

    const location = useLocation();
    const firstSegment = location.pathname.split("/")[1];

    const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "null");

    useEffect(() => {
        if (userInfo) {
            BBSWriteForm.reset({
                ...BBSWriteSchemaDefaultValue,
                reg_user: userInfo.userNickName,
                bbs_numb: bbsnumb || "BBS0000001",
            });
        }
    }, []);

    const { mutate } = useCommunityWrite();

    const BBSRegisterSubmitHandler = () => {
        const params = {
            bbs_numb: BBSWriteForm.getValues("bbs_numb"),
            post_subj: BBSWriteForm.getValues("post_subj"),
            post_cnts: BBSWriteForm.getValues("post_cnts"),
            reg_user: BBSWriteForm.getValues("reg_user"),
            thumbnail: BBSWriteForm.getValues("thumbnail") || "",
        };

        mutate(params, {
            onSuccess: () => {
                alert("등록되었습니다.");
                BBSWriteForm.reset({ ...BBSWriteSchemaDefaultValue });
                navigate(`/${firstSegment}`);
            },
            onError: (error) => {
                console.error("등록 실패:", error);
                alert("등록 중 에러가 발생했습니다.");
            },
        });
    };

    return (
        <Form {...BBSWriteForm}>
            <form onSubmit={BBSWriteForm.handleSubmit(BBSRegisterSubmitHandler)}>
                <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-6">
                    <Linkto />

                    <h2 className="text-2xl font-semibold text-gray-800">커뮤니티 글쓰기</h2>

                    <MarkdownSection />
                    <WriteBtnSection />
                </div>
            </form>
        </Form>
    );
};

export default CommunityWrite;
