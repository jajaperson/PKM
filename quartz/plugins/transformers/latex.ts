import remarkMath from "@jajaperson/remark-math"
import rehypeMathjax from "@jajaperson/rehype-mathjax/chtml"
import { QuartzTransformerPlugin } from "../types"
import { Options as MathjaxOptions } from "@jajaperson/rehype-mathjax/chtml"

export const Latex: QuartzTransformerPlugin<MathjaxOptions> = (opts) => {
	return {
		name: "Latex",
		textTransform(_, src) {
			return src.replaceAll(String.raw`\Set`, String.raw`\cat{Set}`) // bodge
		},
		markdownPlugins() {
			return [remarkMath]
		},
		htmlPlugins() {
			return [[rehypeMathjax, opts]]
		},
	}
}
