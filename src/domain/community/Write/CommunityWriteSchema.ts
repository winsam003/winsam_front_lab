import { z } from "zod";

export const BBSWriteSchema = z.object({
    bbs_numb: z.string(),
    post_subj: z.string(),
    post_cnts: z.string(),
    reg_user: z.string(),
    reg_dttm: z.string(),
    read_cnt: z.number().optional(),
});

export type BBSWriteSchemaType = z.infer<typeof BBSWriteSchema>;

export const BBSWriteSchemaDefaultValue: BBSWriteSchemaType = {
    bbs_numb: "BBS0000001", // 자유게시판
    post_subj: "",
    post_cnts: "",
    reg_user: "",
    reg_dttm: "",
    read_cnt: 0,
};
