// src/store/useUserStore.ts
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

export interface UserInfo {
    name: string;
    nickname: string;
    email: string;
    email_verified: boolean;
    picture: string;
    userRole: string;
}

interface UserStore {
    user: UserInfo | null;
    setUserFromToken: (token: string) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUserFromToken: (token) => {
        try {
            const decoded = jwtDecode<UserInfo>(token);
            set({ user: decoded });
        } catch (err) {
            console.error("JWT 디코딩 실패", err);
            set({ user: null });
        }
    },
    clearUser: () => set({ user: null }),
}));
