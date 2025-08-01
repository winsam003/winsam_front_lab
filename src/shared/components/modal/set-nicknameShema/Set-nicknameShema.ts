import { z } from "zod";

export const NicknameShema = z.object({
    userName: z.string(),
    userNickName: z.string(),
    userEmail: z.string(),
    picture: z.string(),
});

export type NicknameShemaType = z.infer<typeof NicknameShema>;

export const NicknameShemaDefaultValue: NicknameShemaType = {
    userName: "",
    userNickName: "",
    userEmail: "",
    picture: "",
};
