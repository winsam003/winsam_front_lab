import { z } from "zod";

export const CmntWriteSchema = z.object({
    bbs_no: z.number(),
    cmnt_user: z.string(),
    cmnt_cnts: z.string().min(1, "댓글 내용을 입력하세요."), // 필수 체크
    reg_user: z.string(),
});

export type CmntWriteSchemaType = z.infer<typeof CmntWriteSchema>;

export const CmntWriteSchemaDefaultValue: CmntWriteSchemaType = {
    bbs_no: 0,
    cmnt_user: "",
    cmnt_cnts: "",
    reg_user: "",
};
