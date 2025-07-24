import Linkto from "@/shared/components/linkto/Linkto";
import PostPreviewList from "@/shared/components/postPreviewList/PostPreviewList";

const Home = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-8 space-y-8">
            {/* 링크 섹션 */}
            <section>
                <Linkto />
            </section>

            {/* 포스트 프리뷰 리스트 섹션 */}
            <section className="space-y-6">
                <PostPreviewList />
                <PostPreviewList />
                {/* 혹은 반복 렌더링 시 map 사용 */}
            </section>
        </div>
    );
};

export default Home;
