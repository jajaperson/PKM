import { QuartzTransformerPlugin } from "../types"

export const IndentedMathsFix: QuartzTransformerPlugin = () => {
	return {
		name: "Indented maths fix",
		textTransform(_ctx, src) {
			return src.replace(/((?:> )?\t*)([^ >]+) +\$\$/g, "$1$2\n$1\t$$$$")
		},
	}
}
