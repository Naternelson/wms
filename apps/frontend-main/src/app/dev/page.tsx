"use client";
import { Subtitle, Header, Section } from "@/components";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";
import "./style.scss"


export default function () {
    return (
        <div className="relative p-10 h-full">
            <div className="">
                <TipTap />
            </div>
        </div>
    );
}

const lowlight = createLowlight(all);
lowlight.register("javascript", js);
// .register("javascript", js)
// .register("json", json)
// .register("python", python)
// .register("shell", shell)
// .register("xml", xml)
// .register("yaml", yaml)
// .register("typescript", ts)
// .register("css", css)
// .register("bash", bash)
// .register("dockerfile", dockerfile);

const TipTap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Header,
            Subtitle,
            Section,
            CodeBlockLowlight.configure({ lowlight }),
        ],
        content: `
            <h1>Syntax Highlighting Example</h1>
            <p>This is a normal paragraph.</p>
            <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
        </p>
        `,
        editorProps: {
            attributes: {
                class: "prose prose-lg mx-w-none focus:outline-none p-10 h-full focus:shadow-lg transition-shadow duration-300",
            },
        },
    });

    return <EditorContent editor={editor} />;
};
