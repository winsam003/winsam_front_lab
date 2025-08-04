import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { UserInfo } from "@/store/useUserInfo";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { useSetNickName } from "@/api/login/UseLoginQuery";
import { NicknameShema, NicknameShemaDefaultValue, type NicknameShemaType } from "./set-nicknameShema/Set-nicknameShema";

const NickNameModal = ({
    open,
    onClose,
    onSubmit,
    googleInfo,
}: {
    open: boolean;
    onClose: () => void;
    onSubmit: (nickname: string) => void;
    googleInfo?: UserInfo;
}) => {
    const setNicknameForm = useForm<NicknameShemaType>({
        resolver: zodResolver(NicknameShema) as Resolver<NicknameShemaType>,
        defaultValues: NicknameShemaDefaultValue,
    });

    useEffect(() => {
        if (googleInfo) {
            setNicknameForm.reset({
                userName: googleInfo.name,
                userEmail: googleInfo.email,
                picture: googleInfo.picture,
                userNickName: "", // 닉네임은 유저가 입력
            });
        }
    }, [googleInfo, setNicknameForm]);

    const { mutate } = useSetNickName();
    const onSetNickName = () => {
        console.log("휴");
        const params = {
            userName: setNicknameForm.getValues("userName"),
            userNickName: setNicknameForm.getValues("userNickName"),
            userEmail: setNicknameForm.getValues("userEmail"),
            picture: setNicknameForm.getValues("picture"),
        };

        mutate(params, {
            onSuccess: () => {
                console.log("닉네임 설정 성공");
                onSubmit(params.userNickName); // 전달
                onClose();
            },
            onError: () => {
                console.error("닉네임 설정 실패");
            },
        });
    };

    const onInvalidSubmit = (errors: any) => {
        console.error("유효성 검사 실패", errors);
        // 여기서 에러 메시지 표시나 포커스 이동 등을 할 수 있음
    };

    return (
        <div>
            <Form {...setNicknameForm}>
                <Dialog
                    open={open}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) onClose();
                    }}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>닉네임을 입력해주세요</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            반갑습니다. winsam.xyz에 처음 방문 하셨군요! <br /> 저희 블로그에는 닉네임으로 운영됩니다. 최초 1회 닉네임
                            등록이 필요합니다 :)
                        </DialogDescription>
                        <form onSubmit={setNicknameForm.handleSubmit(onSetNickName, onInvalidSubmit)}>
                            <FormField name="userName" render={({ field }) => <Input {...field} placeholder="유저이름" hidden />} />
                            <FormField name="userNickName" render={({ field }) => <Input {...field} placeholder="닉네임" />} />
                            <FormField name="userEmail" render={({ field }) => <Input {...field} placeholder="이메일" hidden />} />
                            <FormField name="picture" render={({ field }) => <Input {...field} placeholder="사진" hidden />} />
                            <DialogFooter className="mt-4">
                                <Button type="submit">확인</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </Form>
        </div>
    );
};

export default NickNameModal;
