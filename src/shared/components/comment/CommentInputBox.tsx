import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaUserCircle } from "react-icons/fa";
import { CmntWriteSchema, CmntWriteSchemaDefaultValue, type CmntWriteSchemaType } from "./CommnetSchema";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { useCmntPost } from "@/api/BBSCommon/UseBBSCommonQuery";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useQueryClient } from "@tanstack/react-query";

const CommentInputBox = () => {
    const { id } = useParams();
    const postId = id ? Number(id) : null;
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code") || "BBS0000001";

    const queryClient = useQueryClient();

    const CmntWriteForm = useForm<CmntWriteSchemaType>({
        resolver: zodResolver(CmntWriteSchema) as Resolver<CmntWriteSchemaType>,
        defaultValues: CmntWriteSchemaDefaultValue,
    });

    const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "null");

    const { mutate } = useCmntPost();
    const CmntRegisterSubmitHandler = () => {
        if (!userInfo) {
            alert("로그인이 필요합니다.");
            return;
        }
        if (postId === null) {
            alert("게시글 번호가 없습니다.");
            return;
        }

        const params = {
            bbs_no: postId,
            cmnt_user: userInfo.sub,
            cmnt_cnts: CmntWriteForm.getValues("cmnt_cnts"),
            reg_user: userInfo.sub,
        };

        mutate(params, {
            onSuccess: () => {
                alert("등록되었습니다.");
                CmntWriteForm.reset({ ...CmntWriteSchemaDefaultValue });

                queryClient.invalidateQueries({
                    queryKey: ["boardDetail", { bbs_numb: code, post_numb: postId }], // queryKey 기준
                });
            },
            onError: (error) => {
                console.error("등록 실패:", error);
                alert("등록 중 에러가 발생했습니다.");
            },
        });
    };
    return (
        <Form {...CmntWriteForm}>
            <form onSubmit={CmntWriteForm.handleSubmit(CmntRegisterSubmitHandler)}>
                <div className="w-full mx-auto bg-white shadow-md rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                        <FaUserCircle className="text-[#434A75] text-3xl" />
                        <div>
                            <div className="text-sm font-semibold text-[#434A75]">{userInfo ? userInfo.userNickName : ""}</div>
                            <div className="text-[10px] text-[#434A75] opacity-70 font-medium">{userInfo ? userInfo.userRole : ""}</div>
                        </div>
                    </div>
                    <FormField
                        control={CmntWriteForm.control}
                        name="cmnt_cnts"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="댓글을 입력하세요." {...field} className="resize-none" />
                                </FormControl>
                                <FormMessage /> {/* 에러 메시지 자동 표시 */}
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end mt-3">
                        <Button className="bg-[#434A75] hover:bg-[#373c61] text-white text-sm px-4 py-2 rounded-xl">등록</Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default CommentInputBox;
