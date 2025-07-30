import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FormField, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useCallback, useRef } from "react";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiOutlineBold } from "react-icons/hi2";
import { FiItalic } from "react-icons/fi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { HiOutlineLink } from "react-icons/hi";
import { HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiOutlineUpload } from "react-icons/hi";

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

    const markdownFunction = (key: string) => {
        // 기존 텍스트 불러오기
        const oldText = watch("post_cnts") || "";
        let markdownFunction = "";

        switch (key) {
            case "h1":
                markdownFunction = "#";
                break;
            case "h2":
                markdownFunction = "##";
                break;
            case "h3":
                markdownFunction = "###";
                break;
            case "bold":
                markdownFunction = "**굵게**";
                break;
            case "italic":
                markdownFunction = "*기울임*";
                break;
            case "codeblock":
                markdownFunction = "```\n코드\n```";
                break;
            case "link":
                markdownFunction = "[링크텍스트](https://)";
                break;
            case "list":
                markdownFunction = "- 리스트 항목";
                break;
            case "hr":
                markdownFunction = "---";
                break;
            default:
                break;
        }
        // 마크다운 문법 삽입
        const newText = oldText + `\n\n${markdownFunction} `;
        setValue("post_cnts", newText);

        // 포커스 전환
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.focus();
                textareaRef.current.selectionStart = textareaRef.current.selectionEnd = textareaRef.current.value.length;
            }
        }, 0);
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileIconClick = () => {
        inputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        uploadFile(files[0]);
    };
    const uploadFile = async (file: File) => {
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

            const oldText = watch("post_cnts") || "";
            const newText = oldText + `\n\n![](${imageUrl})\n`;

            setValue("post_cnts", newText);
            setValue("thumbnail", imageUrl || "");
        } catch (error) {
            alert("이미지 업로드 실패");
            console.error(error);
        }
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
                </div>
                <div>
                    <FormField name="imageUrl" render={({ field }) => <Input {...field} placeholder="썸네일" hidden />} />
                    <input type="file" ref={inputRef} className="hidden" onChange={handleFileChange} />
                </div>
            </div>
            <div className="border-t border-solid h-10 flex items-center pr-4 pl-4 gap-2">
                <HiOutlineHashtag
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("h1");
                    }}
                />
                <div
                    className="cursor-pointer rounded-md pr-1 pl-1 mb-0.5 hover:bg-gray-100 transition flex items-center gap-1"
                    onClick={() => markdownFunction("h1")}
                >
                    <span className="text-[14px] font-medium select-none">H1</span>
                </div>
                <div
                    className="cursor-pointer rounded-md pr-1 pl-1 mb-0.5 hover:bg-gray-100 transition flex items-center gap-1"
                    onClick={() => markdownFunction("h2")}
                >
                    <span className="text-[14px] font-medium select-none">H2</span>
                </div>
                <div
                    className="cursor-pointer rounded-md pr-1 pl-1 mb-0.5 hover:bg-gray-100 transition flex items-center gap-1"
                    onClick={() => markdownFunction("h3")}
                >
                    <span className="text-[14px] font-medium select-none">H3</span>
                </div>
                <HiOutlineBold
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("bold");
                    }}
                />
                <FiItalic
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("italic");
                    }}
                />
                <HiOutlineCodeBracketSquare
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("codeblock");
                    }}
                />
                <HiOutlineLink
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("link");
                    }}
                />
                <HiOutlineListBullet
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("list");
                    }}
                />
                <HiOutlineMinusSm
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={() => {
                        markdownFunction("hr");
                    }}
                />
                <HiOutlineUpload
                    className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                    size={25}
                    onClick={handleFileIconClick}
                />
            </div>

            <div className="flex gap-5 mb-4">
                <div className="flex-1">
                    {/* 입력창 */}
                    <FormField
                        name="post_cnts"
                        render={({ field }) => (
                            <FormItem>
                                <textarea
                                    className="min-h-[1000px] font-4 p-4 rounded-2xl resize-none"
                                    {...field}
                                    placeholder="여기에 마크다운으로 글을 작성하세요..."
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    ref={textareaRef}
                                />
                            </FormItem>
                        )}
                    />
                </div>

                {/* 미리보기 */}
                <div className="flex-1 h-[1000px] p-2.5 border border-gray-300 overflow-y-auto bg-gray-50 rounded-2xl">
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
                            a: ({ node, ...props }) => (
                                <a className="text-blue-600 hover:underline hover:text-blue-800 transition" {...props} />
                            ),
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
