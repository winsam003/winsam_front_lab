import Icon from "@/shared/icon/Icon";
import Line from "../Line/Line";

const PostPreviewList = () => {
    return (
        <div className="flex max-h-[300px] mt-4 mb-12">
            <div className="flex-1">
                <img src="/images/tempImg1.avif" alt="header background" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 pr-4 pl-4 pb-4">
                <div className="mb-2">
                    <div className="flex gap-3 mb-4">
                        <div className="flex items-center">
                            <div className="bg-gray-400 rounded-3xl w-10 h-10">
                                <Icon icon="emptyProfile" width={40} height={40} />
                            </div>
                        </div>
                        <div>
                            <div className="text-[12px]">admin</div>
                            <div className="text-[12px]">2025-07-21</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-[24px] line-clamp-1">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                        <div className="line-clamp-6">
                            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                        </div>
                    </div>
                </div>
                <Line />
                <div className="flex gap-4 mt-4">
                    <div className="text-[12px]">조회수 0</div>
                    <div className="text-[12px]">댓글 0</div>
                </div>
            </div>
        </div>
    );
};

export default PostPreviewList;
