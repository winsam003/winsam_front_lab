import { z } from "zod";

export const BBSWriteSchema = z.object({
    bbs_numb: z.string(),
    post_subj: z.string(),
    post_cnts: z.string(),
});

export type BBSWriteSchemaType = z.infer<typeof BBSWriteSchema>;

export const BBSWriteSchemaDefaultValue: BBSWriteSchemaType = {
    bbs_numb: "BBS0000001", // 자유게시판
    post_subj: "",
    post_cnts: "",
};
