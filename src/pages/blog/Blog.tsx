import Linkto from "@/shared/components/linkto/Linkto";
import PostPreviewList from "@/shared/components/postPreviewList/PostPreviewList";

const Blog = () => {
    return (
        <div className="max-w-[1024px] mx-auto w-full h-full">
            <Linkto />
            <div >
                <PostPreviewList />
                <PostPreviewList />
                <PostPreviewList />
            </div>
        </div>
    );
};

export default Blog;
