import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
type PaginationProps = {
    page?: number;
    totalPages?: number;
    onPageChange: (page: number) => void;
};

const Pagenation = ({ page=1, totalPages=1, onPageChange }: PaginationProps) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (page > 1) onPageChange(page - 1);
                        }}
                    />
                </PaginationItem>

                {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    // 1 ~ totalPages 전부 보여줌 (페이지 수 적을 때 사용)
                    return (
                        <PaginationItem key={pageNum}>
                            <PaginationLink
                                href="#"
                                isActive={page === pageNum}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange(pageNum);
                                }}
                            >
                                {pageNum}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (page < totalPages) onPageChange(page + 1);
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default Pagenation;
