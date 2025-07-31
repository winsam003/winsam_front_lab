import { useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useUserStore, type UserInfo } from "../../store/useUserInfo";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const useGoogleLogin = () => {
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
                if (data.hasNickName === "Y") {
                    const accessToken = data.accessToken; // 백엔드가 보내주는 토큰
                    try {
                        const decoded = jwtDecode<UserInfo>(accessToken);
                        sessionStorage.setItem("userInfo", JSON.stringify(decoded));
                        window.dispatchEvent(new Event("userLoggedIn"));
                    } catch (err) {
                        console.error("토큰 디코딩 실패", err);
                    }
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

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
            }
            // 로그아웃 후 상태 초기화, 리다이렉트 등 추가
            // 예: window.location.href = '/login';
        } catch (error) {
            console.error("로그아웃 실패", error);
        }
    }, []);

    return { logout };
};
