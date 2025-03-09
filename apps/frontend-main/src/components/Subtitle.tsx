import { Node, mergeAttributes } from "@tiptap/core";

export const Subtitle = Node.create({
    name: "subtitle",
    group: "block",
    content: "inline*",
    defining: true,
    parseHTML() {
        return [{ tag: "subtitle" }];
    },
    renderHTML({ node, HTMLAttributes }) {
        return ["subtitle", mergeAttributes(node.attrs, HTMLAttributes), 0];
    },
    addAttributes() {
        return {
            class: {
                default: "block mt-6 text-base/7 text-blueGrey-700",
            },
        };
    },
});

