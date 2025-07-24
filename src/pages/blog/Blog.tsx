import Linkto from "@/shared/components/linkto/Linkto";
import PostPreviewList from "@/shared/components/postPreviewList/PostPreviewList";

const Blog = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-8">
            {/* 링크 영역 */}
            <section>
                <Linkto />
            </section>

            {/* 블로그 포스트 목록 */}
            <section className="space-y-6">
                <PostPreviewList />
                <PostPreviewList />
                <PostPreviewList />
                {/* 혹은 postList.map(...) */}
            </section>
        </div>
    );
};

export default Blog;
