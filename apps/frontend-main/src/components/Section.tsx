import { Node, mergeAttributes } from "@tiptap/core";

export const Section = Node.create({
    name: "section",
    group: "block",
    content: "inline*",
    defining: true,
    parseHTML() {
        return [{ tag: "section" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["section", mergeAttributes(HTMLAttributes), 0];
    },
    addAttributes() {
        return {
            class: {
                default:
                    "mt-10",
            },
        };
    },
});

