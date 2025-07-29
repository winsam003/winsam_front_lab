import Icon from "@/shared/icon/Icon";
import Line from "../Line/Line";
import type { BBSPostItem } from "@/api/BBSCommon/BBSCommonType";
import { useNavigate } from "react-router-dom";

type props = {
    BBSList?: BBSPostItem[];
};

const PostPreviewList = ({ BBSList }: props) => {
    const navigate = useNavigate();

    return (
        <div>
            {BBSList?.length !== 0 ? (
                BBSList?.map((item, index) => {
                    return (
                        <div key={index} className="flex max-h-[300px] mt-4 mb-12">
                            <div
                                className="flex-1 cursor-pointer"
                                onClick={() => {
                                    navigate(`/blog/bbs/common/detail/${item.bbs_no}?code=BBS0000002`);
                                }}
                            >
                                <img
                                    src={item?.thumbnail ? item.thumbnail : "/images/tempImg1.avif"}
                                    alt="header background"
                                    className="w-full h-full object-cover"
                                />
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
                                            <div className="text-[12px]">{item.reg_user}</div>
                                            <div className="text-[12px]">{item.reg_date}</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-4 cursor-pointer"
                                        onClick={() => {
                                            navigate(`/blog/bbs/common/detail/${item.bbs_no}?code=BBS0000002`);
                                        }}
                                    >
                                        <div className="text-[24px] line-clamp-1">{item.bbs_post_sbjt}</div>
                                        <div className="line-clamp-6">{item.bbs_post_cnts}</div>
                                    </div>
                                </div>
                                <Line />
                                <div className="flex gap-4 mt-4">
                                    <div className="text-[12px]">조회수 {item.read_cnt}</div>
                                    <div className="text-[12px]">댓글 0</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>게시글이 없습니다.</div>
            )}
        </div>
    );
};

export default PostPreviewList;
