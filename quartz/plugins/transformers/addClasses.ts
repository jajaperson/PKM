import { selectAll } from "hast-util-select"
import { QuartzTransformerPlugin } from "../types"

interface Options {
  [selector: string]: [string]
}

export const AddClasses: QuartzTransformerPlugin<Options> = (opts: Options = {}) => {
  return {
    name: "Add classes",
    htmlPlugins() {
      return [
        () => (tree) =>
          Object.entries(opts).forEach(([selector, classes]) =>
            selectAll(selector, tree).forEach(({ properties }) => {
              properties.className = [properties.className ?? [], ...classes].flat().join(" ")
            }),
          ),
      ]
    },
  }
}
