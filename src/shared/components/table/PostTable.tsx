import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Pagenation from "../pagenation/Pagenation";
import type { BBSPostItem } from "@/api/BBSCommon/BBSCommonType";

type props = {
    goToDetail: (id: number) => void;
    BBSList?: BBSPostItem[];
};

const PostTable = ({ goToDetail, BBSList }: props) => {
    console.log(BBSList);
    return (
        <div>
            <Table className="w-full table-fixed mb-4">
                <TableHeader>
                    <TableRow className="flex">
                        <TableHead className="flex-1 flex items-center justify-center text-[16px]">번호</TableHead>
                        <TableHead className="flex-5 flex items-center justify-center text-[16px]">제목</TableHead>
                        <TableHead className="flex-2 flex items-center justify-center text-[16px]">등록자</TableHead>
                        <TableHead className="flex-2 flex items-center justify-center text-[16px]">등록일</TableHead>
                        <TableHead className="flex-1 flex items-center justify-center text-[16px]">조회수</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {BBSList?.map((item, index) => (
                        <TableRow key={index} className="flex" onClick={() => goToDetail(item.bbs_no)}>
                            <TableCell className="flex-1 flex items-center justify-center">{item.bbs_no}</TableCell>
                            <TableCell className="flex-5 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                                {item.bbs_post_sbjt}
                            </TableCell>
                            <TableCell className="flex-2 flex items-center justify-center">{item.reg_user}</TableCell>
                            <TableCell className="flex-2 flex items-center justify-center">{item.reg_date}</TableCell>
                            <TableCell className="flex-1 flex items-center justify-center">0</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagenation />
        </div>
    );
};

export default PostTable;
