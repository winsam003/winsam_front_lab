import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { useGoogleLogin, useLogout } from "@/api/login/UseLoginQuery";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import type { UserInfo } from "@/store/useUserInfo";
import { jwtDecode } from "jwt-decode";
import NickNameModal from "../../modal/NickNameModal";

const Header = () => {
    // Header 내부 상태 추가
    const [showModal, setShowModal] = useState(false);
    const [pendingToken, setPendingToken] = useState<string | null>(null);
    const [googleInfo, setGoogleInfo] = useState<UserInfo>();

    // 닉네임 필요 시 모달 띄우기 콜백
    const handleNeedNickname = (accessToken: string, userName: string, userEmail: string, picture: string) => {
        setPendingToken(accessToken);
        setShowModal(true);
        setGoogleInfo({
            name: userName,
            email: userEmail,
            picture: picture,
            nickname: "",
            email_verified: false,
            userRole: "",
        });
    };

    const { startLogin } = useGoogleLogin(handleNeedNickname);
    const { logout } = useLogout();

    const handleNicknameSubmit = async (nickname: string) => {
        if (!pendingToken) return;

        try {
            const response = await fetch("/api/set-nickname", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${pendingToken}`,
                },
                body: JSON.stringify({ nickname }),
            });

            if (response.ok) {
                const decoded = jwtDecode<UserInfo>(pendingToken);
                sessionStorage.setItem("userInfo", JSON.stringify(decoded));
                window.dispatchEvent(new Event("userLoggedIn"));
                setUserInfo(decoded);
                setShowModal(false);
                setPendingToken(null);
            } else {
                console.error("닉네임 저장 실패");
            }
        } catch (err) {
            console.error("닉네임 저장 오류", err);
        }
    };

    const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
        const storedUser = sessionStorage.getItem("userInfo");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // 로그인 성공 시 업데이트용 이벤트 리스너
    useEffect(() => {
        const onLogin = () => {
            const storedUser = sessionStorage.getItem("userInfo");
            if (storedUser) {
                setUserInfo(JSON.parse(storedUser));
            }
        };

        const onLogout = () => {
            setUserInfo(null);
        };

        window.addEventListener("userLoggedIn", onLogin);
        window.addEventListener("userLoggedOut", onLogout);

        return () => {
            window.removeEventListener("userLoggedIn", onLogin);
            window.removeEventListener("userLoggedOut", onLogout);
        };
    }, []);

    return (
        <div className="h-[480px] relative w-full">
            <img src="/images/headerImg.avif" alt="header background" className="absolute w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[rgba(0,0,50,0.5)]" />

            <div className="relative z-10 w-full h-full flex flex-col px-4 max-w-screen-xl mx-auto">
                {/* 상단 로고 */}
                <div className="flex justify-between pt-4">
                    <Link to="/">
                        <div className="text-lg sm:text-xl text-white font-normal">Blog.winsam</div>
                    </Link>
                    <div className="flex gap-4">
                        {userInfo ? (
                            <MdLogout
                                size={30}
                                color="white"
                                onClick={() => {
                                    logout();
                                    window.dispatchEvent(new Event("userLoggedOut")); // 상태 갱신
                                }}
                                className="cursor-pointer"
                            />
                        ) : (
                            <MdLogin size={30} color="white" onClick={startLogin} className="cursor-pointer" />
                        )}
                    </div>
                </div>

                {/* 중앙 텍스트 */}
                <div className="flex flex-1 flex-col justify-center items-center gap-4 text-center break-words">
                    <div className="text-white text-base sm:text-xl font-[400]">그냥 이야기</div>
                    <div className="text-white text-3xl sm:text-5xl font-[500] leading-snug">
                        Just words,
                        <br /> your vibe.
                    </div>
                </div>
            </div>

            <NickNameModal open={showModal} onClose={() => setShowModal(false)} onSubmit={handleNicknameSubmit} googleInfo={googleInfo}/>
        </div>
    );
};

export default Header;
