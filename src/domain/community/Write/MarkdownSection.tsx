import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FormField, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";

const MarkdownSection = () => {
    const { register, watch, setValue } = useFormContext();

    const handleDrop = useCallback(
        async (e: React.DragEvent<HTMLTextAreaElement>) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length === 0) return;

            const file = files[0];
            const formData = new FormData();
            formData.append("file", file);

            try {
                const API_URL = import.meta.env.VITE_APP_API_URL;
                const res = await fetch(`${API_URL}file/upload`, {
                    method: "POST",
                    body: formData,
                });

                if (!res.ok) throw new Error("업로드 실패");

                const data = await res.json();
                const imageUrl = data.url;

                // 기존 텍스트 불러오기
                const oldText = watch("post_cnts") || "";

                // 이미지 마크다운 문법 삽입
                const newText = oldText + `\n\n![](${imageUrl})\n`;

                // 마크다운 텍스트 업데이트
                setValue("post_cnts", newText);
                setValue("thumbnail", imageUrl || "");
            } catch (error) {
                alert("이미지 업로드 실패");
                console.error(error);
            }
        },
        [setValue, watch],
    );

    const handleDragOver = (e: React.DragEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <div>
                    <FormField name="post_subj" render={({ field }) => <Input {...field} placeholder="제목" />} />
                </div>
                <div className="flex gap-4">
                    <FormField name="reg_user" render={({ field }) => <Input {...field} placeholder="작성자" />} />
                    <FormField name="reg_dttm" render={({ field }) => <Input {...field} placeholder="작성일" disabled />} />
                    <FormField name="read_cnt" render={({ field }) => <Input {...field} placeholder="조회수" disabled />} />
                    <FormField name="imageUrl" render={({ field }) => <Input {...field} placeholder="썸네일" hidden />} />
                </div>
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
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                />
                            </FormItem>
                        )}
                    />
                </div>

                {/* 미리보기 */}
                <div className="flex-1 h-[500px] p-2.5 border border-gray-300 overflow-y-auto bg-gray-50 rounded-2xl">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        // rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-medium mb-2" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal ml-6" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                            hr: () => <hr className="my-4 border-t border-gray-300" />,
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
