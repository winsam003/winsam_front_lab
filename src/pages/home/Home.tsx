import Linkto from "@/shared/components/linkto/Linkto";
import PostPreviewList from "@/shared/components/postPreviewList/PostPreviewList";

const Home = () => {
    return (
        <div className="max-w-[1024px] mx-auto w-full h-full pb-4">
            <Linkto />
            <div >
                <PostPreviewList />
                <PostPreviewList />
            </div>
        </div>
    );
};

export default Home;
