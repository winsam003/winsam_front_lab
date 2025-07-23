import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FormField, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const MarkdownSection = () => {
    const { watch } = useFormContext();
    return (
        <div>
            <div className="mt-4 mb-4">
                <FormField name="post_subj" render={({ field }) => <Input {...field} placeholder="제목" />} />
            </div>
            <div className="border-t border-solid h-7"></div>

            <div className="flex gap-5 mb-4">
                <div className="flex-1">
                    {/* 입력창 */}
                    <FormField
                        name="post_cnts"
                        render={({ field }) => (
                            <FormItem>
                                <textarea
                                    className="min-h-[500px] font-4 p-4 rounded-2xl"
                                    {...field}
                                    placeholder="여기에 마크다운으로 글을 작성하세요..."
                                />
                            </FormItem>
                        )}
                    />
                </div>

                {/* 미리보기 */}
                <div className="flex-1 h-[500px] p-2.5 border border-gray-300 overflow-y-auto bg-gray-50 rounded-2xl">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkBreaks]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-medium mb-2" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                            li: ({ node, ...props }) => <li className="list-disc ml-6" {...props} />,
                        }}
                    >
                        {watch("post_cnts")}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default MarkdownSection;
