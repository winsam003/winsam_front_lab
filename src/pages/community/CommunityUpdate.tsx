import { useCommunityUpdate, useCommunityWrite } from "@/api/BBSCommon/UseBBSCommonQuery";
import { Form } from "@/components/ui/form";
import { BBSWriteSchema, BBSWriteSchemaDefaultValue, type BBSWriteSchemaType } from "@/domain/community/write/CommunityWriteSchema";
import MarkdownSection from "@/domain/community/write/MarkdownSection";
import WriteBtnSection from "@/domain/community/write/WriteBtnSection";
import Linkto from "@/shared/components/linkto/Linkto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const CommunityUpdate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { postDetail } = location.state || {};
    const path = window.location.pathname;
    const segments = path.split("/");
    const post_numb = segments[segments.length - 1];
    console.log(postDetail);
    const BBSWriteForm = useForm<BBSWriteSchemaType>({
        resolver: zodResolver(BBSWriteSchema) as Resolver<BBSWriteSchemaType>,
        defaultValues: BBSWriteSchemaDefaultValue,
    });
    useEffect(() => {
        BBSWriteForm.reset({
            bbs_numb: postDetail.bbs_code,
            post_subj: postDetail.bbs_post_sbjt,
            post_cnts: postDetail.bbs_post_cnts,
            reg_user: postDetail.reg_user,
            reg_dttm: postDetail.reg_date,
            read_cnt: postDetail.read_cnt,
        });
    }, [postDetail]);

    const { mutate } = useCommunityUpdate();

    const BBSRegisterSubmitHandler = () => {
        const params = {
            bbs_numb: BBSWriteForm.getValues("bbs_numb"),
            post_subj: BBSWriteForm.getValues("post_subj"),
            post_cnts: BBSWriteForm.getValues("post_cnts"),
            post_numb: post_numb,
            reg_user: BBSWriteForm.getValues("reg_user"),
            reg_dttm: BBSWriteForm.getValues("reg_dttm"),
            read_cnt: BBSWriteForm.getValues("read_cnt"),
        };

        mutate(params, {
            onSuccess: () => {
                alert("수정되었습니다.");
                BBSWriteForm.reset({ ...BBSWriteSchemaDefaultValue });
                navigate("/community");
            },
            onError: (error) => {
                console.error("수정 실패:", error);
                alert("수정 중 에러가 발생했습니다.");
            },
        });
    };

    const onInvalidSubmit = (errors: any) => {
        console.error("유효성 검사 실패", errors);
        // 여기서 에러 메시지 표시나 포커스 이동 등을 할 수 있음
    };

    return (
        <Form {...BBSWriteForm}>
            <form onSubmit={BBSWriteForm.handleSubmit(BBSRegisterSubmitHandler, onInvalidSubmit)}>
                <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-6">
                    <Linkto />
                    <h2 className="text-2xl font-semibold text-gray-800">커뮤니티 글쓰기</h2>
                    <MarkdownSection />

                    <WriteBtnSection btnName={"수정"} btnType="submit" />
                </div>
            </form>
        </Form>
    );
};

export default CommunityUpdate;
