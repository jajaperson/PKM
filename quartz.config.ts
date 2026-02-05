import { readFileSync } from "fs"
import { loadMacrosFromPreamble } from "./custom/loadPreamble"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { LitNotes } from "./custom/plugins/emitters/LitNotes"

const MATHJAX_PREAMBLE = "./content/preamble.sty"
const macros = loadMacrosFromPreamble(readFileSync(MATHJAX_PREAMBLE, "utf8"))

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "jaj•a•person's notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "notes.jajaperson.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
        ling: "Charis SIL",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true, parseTags: true, }),
      Plugin.CrawlLinks({ 
        markdownLinkResolution: "shortest",
        // prettyLinks: false,
      }),
      // This needs to come after, since it replaces undirected apostrophes with directed ones.
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax", customMacros: macros }),
      Plugin.TableOfContents({ minEntries: 2 }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      LitNotes({
        bibliographyFile: "./content/Bins/Other/citations.bib"
      }),
      Plugin.ContentIndex({
        enableSiteMap: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      process.env.NODE_ENV === 'development' ? [] : Plugin.CustomOgImages({
        colorScheme: "darkMode",
      }),
    ].flat(1),
  },
}

export default config
