import type { BBSPostItem } from "@/api/BBSCommon/BBSCommonType";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

type props = {
    postDetail?: BBSPostItem;
};

const CommunityDetailCntSection = ({ postDetail }: props) => {
    return (
        <div>
            <div className="flex-1 min-h-[700px] h-full p-4 border border-gray-300 overflow-y-auto bg-gray-50 rounded-2xl">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-xl font-medium mb-2" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal ml-6" {...props} />,
                        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                        hr: () => <hr className="my-4 border-t border-gray-300" />,
                        a: ({ node, ...props }) => (
                            <a className="text-blue-600 hover:underline hover:text-blue-800 transition" {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote className="border-l-4 border-blue-500 bg-blue-50 text-blue-900 p-4 my-4 rounded-md" {...props} />
                        ),
                    }}
                >
                    {postDetail && postDetail.bbs_post_cnts}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default CommunityDetailCntSection;
