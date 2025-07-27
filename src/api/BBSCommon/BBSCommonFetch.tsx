import type { BBSDetailApi, BBSRegisterApi, getBBSPostList } from "./BBSCommonType";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTMyNzU2NzYsImV4cCI6MTc1MzI3NjU3Nn0.XOLmu508iF9-eYKZBP2_kkjJlPRqvqnUs9mICaZtlWA";

export const BBSPostList = async (data: getBBSPostList["params"]) => {
    const { data: result } = await axios.get<getBBSPostList["result"]>(`${API_URL}bbs/list/${data.bbs_numb}/${data.page}/${data.size}`);
    return result;
};

export const PostBBSPost = async (data: BBSRegisterApi["params"]) => {
    const response = await axios.post(`${API_URL}bbs/write`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const PatchBBSPost = async (data: BBSRegisterApi["params"]) => {
    const response = await axios.patch(`${API_URL}bbs/update`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const BBSPostDetail = async (data: BBSDetailApi["params"]) => {
    const { data: result } = await axios.get<BBSDetailApi["result"]>(`${API_URL}bbs/detail/${data.bbs_numb}/${data.post_numb}`);
    return result;
};
