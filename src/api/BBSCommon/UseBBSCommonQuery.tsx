import { useMutation } from "@tanstack/react-query";
import type { BBSRegisterApi, getBBSPostList } from "./BBSCommonType";
import { BBSPostList, PostBBSPost } from "./BBSCommonFetch";
import type { UseMutationOption } from "../Common-query-type";

import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

export const useBoardList = <T = getBBSPostList["result"]>(
    params: getBBSPostList["params"],
    options?: UseQueryOptions<getBBSPostList["result"], Error, T>,
) => {
    return useQuery({
        queryKey: ["boardList", params],
        queryFn: () => BBSPostList(params),
        ...options,
    });
};

export const useCommunityWrite = (options?: UseMutationOption<BBSRegisterApi["params"]>) => {
    return useMutation({
        mutationFn: (data) => PostBBSPost(data),
        ...options,
    });
};
