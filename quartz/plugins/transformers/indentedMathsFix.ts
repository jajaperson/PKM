import { QuartzTransformerPlugin } from "../types";

export const IndentedMathsFix: QuartzTransformerPlugin = () => {
    return {
        name: "Indented maths fix",
        textTransform(_ctx, src) {
            return src.replace(/(\S\s*)\$\$/, "$1\n  $$$$")
        },
    }
}