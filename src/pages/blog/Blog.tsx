import { useBoardList } from "@/api/BBSCommon/UseBBSCommonQuery";
import BlogListBtnSection from "@/domain/blog/blogListBtnSection";
import Linkto from "@/shared/components/linkto/Linkto";
import PostPreviewList from "@/shared/components/postPreviewList/PostPreviewList";

const Blog = () => {
    const params = { bbs_numb: "BBS0000002", page: 1, size: 9999 };
    const { data, isLoading, error } = useBoardList(params);

    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-8">
            {/* 링크 영역 */}
            <section>
                <Linkto />
            </section>

            <section className="flex justify-end">
                <BlogListBtnSection />
            </section>

            {/* 블로그 포스트 목록 */}
            <section className="space-y-6">
                {isLoading && <div className="text-gray-600">로딩 중...</div>}
                {error && <div className="text-red-500">에러 발생: {error.message}</div>}
                {!isLoading && !error && <PostPreviewList BBSList={data?.bbslist || []} />}
            </section>
        </div>
    );
};

export default Blog;
