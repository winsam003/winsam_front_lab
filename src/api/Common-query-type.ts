import type { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type UseQueryOption<T, U> = Omit<UseQueryOptions<T, AxiosError<BaseError>, U>, "queryKey" | "queryFn">;

export type UseMutationOption<T, U = T> = Omit<UseMutationOptions<T, AxiosError<BaseError>, U>, "mutationKey" | "mutationFn">;

export interface BaseResponse {
    msg: string;
    msgcode: number | null;
    path: string;
    createtime: string;
    status: number;
    responsetype: string;
    obj_data: unknown | null;
}

export interface BaseError {
    msg: string;
    msgcode: number | null;
    path: string;
    createtime: string;
    status: number;
    responsetype: string;
    errorslist: unknown[];
    mainerror: {
        msg: string;
        errorcode: string;
    };
}

export interface PagingInfo {
    page: number;
    size: number;
    total: number;
    bottomIndex_Start: number;
    bottomIndex_End: number;
    before: boolean;
    after: boolean;
}
export interface PagingInfoExp {
    current_page: number;
    page_unit: number;
    page_record: number;
    page_sort_type: string;
    page_unit_total_count: number;
    page_record_total_count: number;
    page_unit_first_index: number;
    page_unit_last_index: number;
    page_record_first_index: number;
    page_record_last_index: number;
    isBefore: boolean;
    isAfter: boolean;
    maxCount: number;
}