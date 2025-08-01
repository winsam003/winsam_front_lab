import axios from "axios";
import type { setNickName } from "./LoginType";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const setNickNamePost = async (data: setNickName["params"]) => {
    const response = await axios.post(`${API_URL}auth/set-nickname`, data, {});
    return response.data;
};
