import { BibLatexParser, CSLExporter } from "biblatex-csl-converter";
import { readFile } from "fs/promises";

import { QuartzEmitterPlugin } from "quartz/plugins/types";
import { FullPageLayout } from "quartz/cfg";
import { pageResources, renderPage } from "quartz/components/renderPage";
import { QuartzComponentProps } from "quartz/components/types";
import { defaultProcessedContent } from "quartz/plugins/vfile";
import { FullSlug, joinSegments, pathToRoot } from "quartz/util/path";
import { write } from "quartz/plugins/emitters/helpers";
import HeaderConstructor from "quartz/components/Header";
import BodyConstructor from "quartz/components/Body"
import { defaultContentPageLayout, sharedPageComponents } from "../../../quartz.layout";

import LitNote from "@/components/pages/LitNote";
import { stripHtml } from "string-strip-html";

export interface Options {
    bibliographyFile: string,
    layout: Partial<FullPageLayout>,
}

const defaultOptions: Options = {
    bibliographyFile: "./bibliography.bib",
    layout: {},
}

export const LitNotes: QuartzEmitterPlugin<Partial<Options>> = (userOpts) => {
    const opts = { ...defaultOptions, ...userOpts }

    const layout: FullPageLayout = {
        ...sharedPageComponents,
        ...defaultContentPageLayout,
        pageBody: LitNote(),
        ...opts.layout,
    }
    const { head: Head, header, beforeBody, pageBody, afterBody, left, right, footer: Footer } = layout
    const Header = HeaderConstructor()
    const Body = BodyConstructor()
    
    return {
        name: "Literature notes",
        getQuartzComponents() {
            return [
                Head,
                Header,
                Body,
                ...header,
                ...beforeBody,
                pageBody,
                ...afterBody,
                ...left,
                ...right,
                Footer,
            ]
        },
        async *emit(ctx, _content, resources) {
            const cfg = ctx.cfg.configuration
            try {
                const rawBib: string = await readFile(opts.bibliographyFile, { encoding: "utf-8" });
                let parser = new BibLatexParser(rawBib, {});
                const bib = await parser.parseAsync();
                let exporter = new CSLExporter(bib.entries, false, { useEntryKeys: true });
                const csl = exporter.parse();
                for (const id in csl) {
                    const entry = csl[id];
                    const slug = joinSegments("Sources", `@${id}`) as FullSlug;
                    const title = stripHtml(entry.title as string).result;
                    const [tree, vfile] = defaultProcessedContent({
                        slug,
                        text: title,
                        description: "Bibliographic entry",
                        frontmatter: { title },
                        entry,
                    })
                    const externalResources = pageResources(pathToRoot(slug), resources)
                    const componentData: QuartzComponentProps = {
                        ctx,
                        fileData: vfile.data,
                        externalResources,
                        cfg,
                        children: [],
                        tree,
                        allFiles: [],
                    }
                    const content = renderPage(cfg, slug, componentData, layout, externalResources)

                    yield write({
                        ctx,
                        content,
                        slug,
                        ext: ".html",
                    })
                }
            } catch (err) {
                console.error(err)
            }
        },
    }
}