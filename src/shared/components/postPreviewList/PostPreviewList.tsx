import Line from "../Line/Line";

const PostPreviewList = () => {
    return (
        <div className="flex max-h-[300px] mb-12">
            <div className="flex-1">
                <img src="/images/tempImg1.avif" alt="header background" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-4">
                <div className="h-full">
                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <div>사진</div>
                        </div>
                        <div>
                            <div className="text-[12px]">admin</div>
                            <div className="text-[12px]">2025-07-21</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-[24px]">제목</div>
                        <div className="h-full">
                            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                        </div>
                    </div>
                </div>
                <Line />
                <div className="flex gap-4 pt-4">
                    <div className="text-[12px]">조회수</div>
                    <div className="text-[12px]">댓글</div>
                </div>
            </div>
        </div>
    );
};

export default PostPreviewList;
