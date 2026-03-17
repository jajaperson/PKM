import remarkMath from "@jajaperson/remark-math"
import rehypeMathjax from "@jajaperson/rehype-mathjax/svg"
import { QuartzTransformerPlugin } from "../types"
import { Options as MathjaxOptions } from "@jajaperson/rehype-mathjax/svg"

export const Latex: QuartzTransformerPlugin<MathjaxOptions> = (opts) => {
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath]
    },
    htmlPlugins() {
      return [
        [
          rehypeMathjax,
          opts
        ],
      ]
    },
  }
}
