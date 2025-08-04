import { useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useUserStore, type UserInfo } from "../../store/useUserInfo";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { setNickName } from "./LoginType";
import { setNickNamePost } from "./LoginFetch";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const useGoogleLogin = (onNeedNickname?: (accessToken: string, userName: string, userEmail: string, picture: string) => void) => {
    const startLogin = useCallback(() => {
        window.open(`${API_URL}auth/google`, "_blank", "width=500,height=600");
    }, []);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // 보안상 origin 체크 꼭 하세요!
            // if (event.origin !== API_ORIGIN) return;

            const data = event.data;
            if (data.type === "google-auth-token") {
                // 여기서 로그인 상태 업데이트하거나 UI 변경 처리
                const accessToken = data.accessToken; // 백엔드가 보내주는 토큰
                if (data.hasNickName === "Y") {
                    try {
                        const decoded = jwtDecode<UserInfo>(accessToken);
                        sessionStorage.setItem("userInfo", JSON.stringify(decoded));
                        // window.dispatchEvent(new Event("userLoggedIn"));
                        window.location.reload();
                    } catch (err) {
                        console.error("토큰 디코딩 실패", err);
                    }
                } else if (onNeedNickname) {
                    onNeedNickname(accessToken, data.userName, data.userEmail, data.picture); // 닉네임 필요한 경우 콜백 실행
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [onNeedNickname]);

    return { startLogin };
};

export const useLogout = () => {
    const logout = useCallback(async () => {
        try {
            if (confirm("로그아웃 하시겠습니까?")) {
                await fetch(`${API_URL}auth/logout`, {
                    method: "GET",
                    credentials: "include",
                });
                sessionStorage.removeItem("userInfo");
                alert("로그아웃 되었습니다.");
                window.location.href = "/";
            }
            // 로그아웃 후 상태 초기화, 리다이렉트 등 추가
            // 예: window.location.href = '/login';
        } catch (error) {
            console.error("로그아웃 실패", error);
        }
    }, []);

    return { logout };
};

export const useSetNickName = (options?: UseMutationOptions<any, Error, setNickName["params"]>) => {
    return useMutation({
        mutationFn: (data) => setNickNamePost(data),
        ...options,
    });
};
