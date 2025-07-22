import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Pagenation from "../pagenation/Pagenation";

type props = {
    goToDetail: (id: number) => void,
}

const PostTable = ({goToDetail}: props) => {
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
                    <TableRow className="flex" onClick={() => goToDetail(1)}>
                        <TableCell className="flex-1 flex items-center justify-center">1</TableCell>
                        <TableCell className="flex-5 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
                        </TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">zi존winsam</TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">2025-07-22 16:46:02</TableCell>
                        <TableCell className="flex-1 flex items-center justify-center">0</TableCell>
                    </TableRow>
                    <TableRow className="flex">
                        <TableCell className="flex-1 flex items-center justify-center">2</TableCell>
                        <TableCell className="flex-5 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
                        </TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">zi존winsam</TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">2025-07-22 16:46:02</TableCell>
                        <TableCell className="flex-1 flex items-center justify-center">0</TableCell>
                    </TableRow>
                    <TableRow className="flex">
                        <TableCell className="flex-1 flex items-center justify-center">3</TableCell>
                        <TableCell className="flex-5 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
                        </TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">zi존winsam</TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">2025-07-22 16:46:02</TableCell>
                        <TableCell className="flex-1 flex items-center justify-center">0</TableCell>
                    </TableRow>
                    <TableRow className="flex">
                        <TableCell className="flex-1 flex items-center justify-center">4</TableCell>
                        <TableCell className="flex-5 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
                        </TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">zi존winsam</TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">2025-07-22 16:46:02</TableCell>
                        <TableCell className="flex-1 flex items-center justify-center">0</TableCell>
                    </TableRow>
                    <TableRow className="flex">
                        <TableCell className="flex-1 flex items-center justify-center">5</TableCell>
                        <TableCell className="flex-5 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
                        </TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">zi존winsam</TableCell>
                        <TableCell className="flex-2 flex items-center justify-center">2025-07-22 16:46:02</TableCell>
                        <TableCell className="flex-1 flex items-center justify-center">0</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagenation />
        </div>
    );
};

export default PostTable;
