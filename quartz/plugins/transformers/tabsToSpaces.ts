import { QuartzTransformerPlugin } from "../types";

export const TabsToSpaces: QuartzTransformerPlugin = () => {
    return {
        name: "Tabs to spaces",
        textTransform(_ctx, src) {
            return src
                .split("\n")
                .map(l => l
                    .split("")
                    .map((ch, i) => ch === "\t"
                        ? " ".repeat(2 - (i % 2))
                        : ch)
                    .join(""))
                .join("\n")
        },
    }
}