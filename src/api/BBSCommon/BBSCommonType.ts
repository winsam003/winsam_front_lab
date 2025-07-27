// 게시글 리스트
export interface getBBSPostList {
    params: {
        bbs_numb: string;
        page: number;
        size: number;
    };

    result: {
        bbslist: BBSPostItem[];
    };
}

// 게시글 VO
export interface BBSPostItem {
    bbs_no: number;
    bbs_code: string;
    bbs_post_sbjt: string;
    bbs_post_cnts: string;
    use_at: string;
    disp_at: string;
    reg_user: string;
    reg_date: string;
    updt_user: string;
    updt_date: string;
    read_cnt: number;
}

// 게시글 등록
export interface BBSRegisterApi {
    params: {
        bbs_numb: string;
        post_subj: string;
        post_cnts: string;
        reg_user: string;
    };
}

// 게시글 상세
export interface BBSDetailApi {
    params: {
        bbs_numb: string;
        post_numb: number;
    };
    result: BBSPostItem;
}
