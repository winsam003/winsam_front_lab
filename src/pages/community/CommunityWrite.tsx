import MarkdownSection from "@/domain/community/Write/MarkdownSection";
import WriteBtnSection from "@/domain/community/Write/WriteBtnSection";
import { BBSWriteSchema, BBSWriteSchemaDefaultValue, type BBSWriteSchemaType } from "./../../domain/community/Write/CommunityWriteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useCommunityWrite } from "@/api/BBSCommon/UseBBSCommonQuery";
import { useNavigate } from "react-router-dom";

const CommunityWrite = () => {
    const navigate = useNavigate();

    const BBSWriteForm = useForm<BBSWriteSchemaType>({
        resolver: zodResolver(BBSWriteSchema) as Resolver<BBSWriteSchemaType>,
        defaultValues: BBSWriteSchemaDefaultValue,
    });

    const { mutate } = useCommunityWrite();

    const BBSRegisterSubmitHandler = () => {
        const params = {
            bbs_numb: BBSWriteForm.getValues("bbs_numb"),
            post_subj: BBSWriteForm.getValues("post_subj"),
            post_cnts: BBSWriteForm.getValues("post_cnts"),
        };

        mutate(params, {
            onSuccess: () => {
                alert("등록되었습니다.");
                BBSWriteForm.reset({ ...BBSWriteSchemaDefaultValue });
                navigate("/community");
            },
            onError: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <Form {...BBSWriteForm}>
            <form onSubmit={BBSWriteForm.handleSubmit(BBSRegisterSubmitHandler)}>
                <div className="max-w-[1024px] mx-auto w-full h-full">
                    <MarkdownSection />
                    <WriteBtnSection />
                </div>
            </form>
        </Form>
    );
};
export default CommunityWrite;
