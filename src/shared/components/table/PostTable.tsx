import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Pagenation from "../pagenation/Pagenation";
import type { BBSPostItem, pageInfo } from "@/api/BBSCommon/BBSCommonType";

type props = {
    goToDetail: (id: number) => void;
    BBSList?: BBSPostItem[];
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pageInfo?: pageInfo;
};

const PostTable = ({ goToDetail, BBSList, page, setPage, pageInfo }: props) => {
    return (
        <div>
            {BBSList?.length !== 0 ? (
                <div>
                    <Table className="hidden md:table w-full table-fixed mb-4">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center w-16">번호</TableHead> {/* 고정 64px */}
                                <TableHead className="text-left w-[40%] px-2">제목</TableHead> {/* 40% */}
                                <TableHead className="text-center w-32">등록자</TableHead> {/* 128px */}
                                <TableHead className="text-center w-36">등록일</TableHead> {/* 144px */}
                                <TableHead className="text-center w-20">조회수</TableHead> {/* 80px */}
                                <TableHead className="text-center w-20">댓글수</TableHead> {/* 80px */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {BBSList?.map((item, index) => (
                                <TableRow
                                    key={index}
                                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => goToDetail(item.bbs_no)}
                                >
                                    <TableCell className="text-center w-16">{item.bbs_no}</TableCell>
                                    <TableCell className="text-left w-[40%] px-2 truncate max-w-full">{item.bbs_post_sbjt}</TableCell>
                                    <TableCell className="text-center w-32">{item.reg_user}</TableCell>
                                    <TableCell className="text-center w-36">{item.reg_date}</TableCell>
                                    <TableCell className="text-center w-20">{item.read_cnt}</TableCell>
                                    <TableCell className="text-center w-20">{item.cmnt_count}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* 모바일용 카드 리스트 (md 이하에서 보임) */}
                    <div className="md:hidden space-y-4">
                        {BBSList?.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-md p-4 shadow cursor-pointer"
                                onClick={() => goToDetail(item.bbs_no)}
                            >
                                {/* <div className="flex justify-between mb-2">
                                    <span className="font-semibold">번호:</span>
                                    <span>{item.bbs_no}</span>
                                </div> */}
                                <div className="mb-2">
                                    <span className="font-semibold"></span>
                                    <p className="truncate">{item.bbs_post_sbjt}</p>
                                </div>
                                <div className="flex justify-between mb-1 text-sm text-gray-600">
                                    <div>
                                        <span className="font-semibold">등록자:</span> {item.reg_user}
                                    </div>
                                    <div>
                                        <span className="font-semibold">등록일:</span> {item.reg_date}
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <div>
                                        <span className="font-semibold">조회수:</span> {item.read_cnt}
                                    </div>
                                    <div>
                                        <span className="font-semibold">댓글수:</span> {item.cmnt_count}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagenation page={pageInfo?.page} totalPages={pageInfo?.totalPages} onPageChange={setPage} />
                </div>
            ) : (
                <Table className="w-full table-fixed mb-4">
                    <TableHeader>
                        <TableRow className="flex">
                            {/* <TableHead className="flex-1 flex items-center justify-center text-[16px]">번호</TableHead> */}
                            <TableHead className="flex-5 flex items-center justify-center text-[16px]"></TableHead>
                            <TableHead className="flex-2 flex items-center justify-center text-[16px]">등록자</TableHead>
                            <TableHead className="flex-2 flex items-center justify-center text-[16px]">등록일</TableHead>
                            <TableHead className="flex-1 flex items-center justify-center text-[16px]">조회수</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="flex">
                            <TableCell className="flex-1 flex items-center justify-center font-bold">게시글이 없습니다.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default PostTable;
