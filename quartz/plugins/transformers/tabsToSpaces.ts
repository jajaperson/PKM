import { QuartzTransformerPlugin } from "../types";

export const TabsToSpaces: QuartzTransformerPlugin = () => {
    return {
        name: "Tabs to spaces",
        textTransform(_ctx, src) {
            return src.replace(/\t/, "  ")
        },
    }
}