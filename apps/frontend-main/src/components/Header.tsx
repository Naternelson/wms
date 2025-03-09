import { Node, mergeAttributes } from "@tiptap/core";

export const Header = Node.create({
    name: "header",
    group: "block",
    content: "inline*",
    defining: true,
    parseHTML() {
        return [{ tag: "header" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["header", mergeAttributes(HTMLAttributes), 0];
    },
    addAttributes() {
        return {
            class: {
                default:
                    "font-mono text-xs/6 font-medium tracking-wide st text-blueGrey-700 uppercase",
            },
        };
    },
});

